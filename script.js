class ReviewGenerator {
    constructor() {
        this.ratings = {};
        this.ratingTexts = {
            1: "不満",
            2: "やや不満",
            3: "普通",
            4: "良い",
            5: "とても良い"
        };
        this.init();
    }

    init() {
        this.setupStarRatings();
        this.setupButtons();
    }

    setupStarRatings() {
        const starRatings = document.querySelectorAll('.star-rating');
        
        starRatings.forEach(rating => {
            const question = rating.dataset.question;
            const stars = rating.querySelectorAll('.star');
            const textElement = document.getElementById(`${question}-text`);
            
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const ratingValue = parseInt(star.dataset.rating);
                    this.ratings[question] = ratingValue;
                    
                    // Update star display
                    stars.forEach((s, index) => {
                        if (index < ratingValue) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                    
                    // Update text
                    textElement.textContent = this.ratingTexts[ratingValue];
                    
                    this.updateGenerateButton();
                });
                
                star.addEventListener('mouseenter', () => {
                    const ratingValue = parseInt(star.dataset.rating);
                    stars.forEach((s, index) => {
                        if (index < ratingValue) {
                            s.style.color = '#ffd700';
                        } else {
                            s.style.color = '#ddd';
                        }
                    });
                });
            });
            
            rating.addEventListener('mouseleave', () => {
                const currentRating = this.ratings[question] || 0;
                stars.forEach((s, index) => {
                    if (index < currentRating) {
                        s.style.color = '#ffd700';
                    } else {
                        s.style.color = '#ddd';
                    }
                });
            });
        });
    }

    setupButtons() {
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateReview();
        });

        document.getElementById('backBtn').addEventListener('click', () => {
            this.showQuestionnaire();
        });

        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyToClipboard();
        });

        document.getElementById('mapsBtn').addEventListener('click', () => {
            this.openGoogleMaps();
        });
    }

    updateGenerateButton() {
        const requiredQuestions = ['treatment', 'staff', 'access', 'relaxation', 'recommendation'];
        const allAnswered = requiredQuestions.every(q => this.ratings[q]);
        
        document.getElementById('generateBtn').disabled = !allAnswered;
    }

    async generateReview() {
        this.showResults();
        
        // OpenAI API呼び出しの代わりにダミー生成を使用
        // 実際の実装では、ここでOpenAI APIを呼び出します
        try {
            const review = await this.callOpenAI();
            document.getElementById('generatedText').textContent = review;
        } catch (error) {
            console.error('Error generating review:', error);
            // フォールバック：ローカル生成
            const review = this.generateLocalReview();
            document.getElementById('generatedText').textContent = review;
        }
    }

    async callOpenAI() {
        // サーバーサイドAPIを呼び出し
        const response = await fetch('/api/generate-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ratings: this.ratings
            })
        });

        if (!response.ok) {
            throw new Error('API呼び出しに失敗しました');
        }

        const data = await response.json();
        
        if (data.fallback) {
            throw new Error('APIキーが設定されていません');
        }
        
        return data.review;
    }


    generateLocalReview() {
        const { treatment, staff, access, relaxation, recommendation } = this.ratings;
        
        let review = "桜並木駅前整骨院に通院しました。";
        
        // 施術について
        if (treatment >= 4) {
            review += "施術は非常に効果的で、痛みが大幅に軽減されました。";
        } else if (treatment >= 3) {
            review += "施術は丁寧に行っていただき、改善を感じています。";
        }
        
        // スタッフ対応
        if (staff >= 4) {
            review += "院長先生の説明はとても分かりやすく、安心して治療を受けることができました。";
        } else if (staff >= 3) {
            review += "スタッフの対応も親切で好感が持てました。";
        }
        
        // アクセス
        if (access >= 4) {
            review += "駅から近くてアクセスも良好です。";
        } else if (access >= 3) {
            review += "立地も通いやすい場所にあります。";
        }
        
        // リラックス
        if (relaxation >= 4) {
            review += "院内の雰囲気も落ち着いており、リラックスして治療を受けられました。";
        }
        
        // 推薦
        if (recommendation >= 4) {
            review += "知人にもぜひ勧めたい整骨院です。";
        } else if (recommendation >= 3) {
            review += "また利用させていただきたいと思います。";
        }
        
        return review;
    }

    showResults() {
        document.getElementById('questionnaire').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }

    showQuestionnaire() {
        document.getElementById('questionnaire').style.display = 'block';
        document.getElementById('results').style.display = 'none';
    }

    async copyToClipboard() {
        const text = document.getElementById('generatedText').textContent;
        try {
            await navigator.clipboard.writeText(text);
            
            // ボタンテキストを一時的に変更
            const btn = document.getElementById('copyBtn');
            const originalText = btn.textContent;
            btn.textContent = 'コピーしました！';
            btn.style.background = '#20c997';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#28a745';
            }, 2000);
        } catch (err) {
            console.error('コピーに失敗しました:', err);
            alert('コピーに失敗しました。テキストを手動で選択してコピーしてください。');
        }
    }

    openGoogleMaps() {
        // 桜並木駅前整骨院のGoogleマップURL（実際の場所に置き換えてください）
        const mapsUrl = 'https://www.google.com/maps/search/桜並木駅前整骨院/@35.6812,139.7671,15z';
        window.open(mapsUrl, '_blank');
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', () => {
    new ReviewGenerator();
});