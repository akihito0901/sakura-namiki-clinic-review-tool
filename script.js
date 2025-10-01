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

        document.getElementById('copyUrlBtn').addEventListener('click', () => {
            this.copyUrlToClipboard();
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
        
        // 高度なローカル生成を使用
        const review = generateAdvancedReview(this.ratings);
        document.getElementById('generatedText').textContent = review;
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
            btn.textContent = 'コピー完了！';
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

    async copyUrlToClipboard() {
        const reviewUrl = 'https://g.page/r/Ce8_5GRA1H1fEAE/review';
        try {
            await navigator.clipboard.writeText(reviewUrl);
            
            // ボタンテキストを一時的に変更
            const btn = document.getElementById('copyUrlBtn');
            const originalText = btn.textContent;
            btn.textContent = 'URL完了！';
            btn.style.background = '#20c997';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#6f42c1';
            }, 2000);
        } catch (err) {
            console.error('URLコピーに失敗しました:', err);
            alert('URLコピーに失敗しました。');
        }
    }

    openGoogleMaps() {
        // 桜並木駅前整骨院の直接レビューURL
        const reviewUrl = 'https://g.page/r/Ce8_5GRA1H1fEAE/review';
        window.open(reviewUrl, '_blank');
    }
}

// アプリケーション開始
document.addEventListener('DOMContentLoaded', () => {
    new ReviewGenerator();
});