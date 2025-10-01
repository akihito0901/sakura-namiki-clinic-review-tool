export default async function handler(req, res) {
    // CORS設定
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
        return res.status(500).json({ 
            error: 'APIキーが設定されていません',
            fallback: true 
        });
    }

    try {
        const { ratings } = req.body;
        
        if (!ratings) {
            return res.status(400).json({ error: 'アンケート結果が必要です' });
        }

        const prompt = createPrompt(ratings);
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'あなたは桜並木駅前整骨院の満足した患者です。アンケート結果に基づいて自然で好意的な口コミを生成してください。150-200文字程度で、具体的で説得力のある内容にしてください。'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 300,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API Error: ${response.status}`);
        }

        const data = await response.json();
        const review = data.choices[0].message.content.trim();
        
        res.status(200).json({ review });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'レビュー生成に失敗しました',
            fallback: true 
        });
    }
}

function createPrompt(ratings) {
    const ratingTexts = {
        1: "不満",
        2: "やや不満", 
        3: "普通",
        4: "良い",
        5: "とても良い"
    };
    
    const { treatment, staff, access, relaxation, recommendation } = ratings;
    
    return `桜並木駅前整骨院のアンケート結果:
施術の満足度: ${treatment}/5 (${ratingTexts[treatment]})
院長の対応: ${staff}/5 (${ratingTexts[staff]})
アクセス: ${access}/5 (${ratingTexts[access]})
リラックス度: ${relaxation}/5 (${ratingTexts[relaxation]})
推薦意向: ${recommendation}/5 (${ratingTexts[recommendation]})

この結果に基づいて、自然で好意的な口コミレビューを生成してください。`;
}