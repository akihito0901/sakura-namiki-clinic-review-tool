// 口コミテンプレート集
const ReviewTemplates = {
    // 施術効果のテンプレート
    treatment: {
        5: [
            "施術が非常に効果的で、",
            "治療効果を強く実感できて、",
            "施術後すぐに改善を感じられて、",
            "期待以上の効果があり、",
            "劇的な改善を実感できて、",
            "痛みが大幅に軽減されて、",
            "体の調子が格段に良くなり、",
            "症状が見事に改善して、",
            "治療効果に驚いており、",
            "素晴らしい施術で、"
        ],
        4: [
            "施術効果を感じることができて、",
            "治療により改善を実感し、",
            "丁寧な施術で、",
            "効果的な治療を受けられて、",
            "適切な施術により、",
            "しっかりとした治療で、",
            "満足のいく施術を受けて、",
            "良い効果を感じられて、",
            "的確な治療により、",
            "質の高い施術で、"
        ],
        3: [
            "施術を受けて、",
            "治療していただき、",
            "丁寧に施術してもらい、",
            "しっかりと治療を受けて、",
            "適切な施術により、",
            "治療を継続していて、",
            "施術を受けさせていただき、",
            "治療に通っており、",
            "定期的に施術を受けて、",
            "継続的な治療で、"
        ]
    },

    // 院長対応のテンプレート
    staff: {
        5: [
            "院長先生の説明が非常に分かりやすく、",
            "院長の対応が素晴らしく、",
            "先生がとても親切で、",
            "院長先生の人柄が良く、",
            "丁寧で親身な対応をしていただき、",
            "院長の専門性の高さを感じ、",
            "先生の温かい人柄に癒されて、",
            "院長先生が親切丁寧で、",
            "信頼できる先生で、",
            "院長の真摯な姿勢に感動し、"
        ],
        4: [
            "院長先生の対応が丁寧で、",
            "先生が親切にしてくださり、",
            "院長の説明が分かりやすく、",
            "丁寧な対応をしていただき、",
            "先生の人柄が良く、",
            "院長先生が優しく、",
            "親身になって相談に乗ってくださり、",
            "先生の対応に満足しており、",
            "院長の専門知識が豊富で、",
            "安心して相談できる先生で、"
        ],
        3: [
            "院長先生に対応していただき、",
            "先生に診ていただいて、",
            "院長の説明を受けて、",
            "丁寧に対応していただき、",
            "先生とお話しして、",
            "院長先生から治療を受けて、",
            "先生に相談させていただき、",
            "院長に診察していただき、",
            "先生の指導を受けて、",
            "院長先生のもとで治療を受けて、"
        ]
    },

    // アクセスのテンプレート
    access: {
        5: [
            "駅からとても近くて通いやすく、",
            "アクセスが抜群に良く、",
            "立地が非常に便利で、",
            "交通の便が素晴らしく、",
            "駅近で非常に便利で、",
            "通院しやすい立地で、",
            "アクセス良好で、",
            "立地条件が最高で、",
            "交通アクセスが良く、",
            "駅からすぐの好立地で、"
        ],
        4: [
            "駅から近くて便利で、",
            "アクセスが良く、",
            "立地が良くて、",
            "通いやすい場所にあり、",
            "交通の便が良く、",
            "駅近で便利で、",
            "立地条件が良く、",
            "アクセスしやすい場所で、",
            "通院に便利な立地で、",
            "駅からのアクセスが良く、"
        ],
        3: [
            "立地も悪くなく、",
            "アクセスも問題なく、",
            "駅からも歩ける距離で、",
            "通いやすい場所にあり、",
            "立地的にも通院しやすく、",
            "場所も分かりやすく、",
            "アクセスも良好で、",
            "立地も良く、",
            "交通の便も悪くなく、",
            "通院に支障のない立地で、"
        ]
    },

    // リラックス度のテンプレート
    relaxation: {
        5: [
            "院内の雰囲気がとても良くリラックスできました。",
            "落ち着いた空間で心地よく過ごせました。",
            "リラックスできる環境が整っていて癒されました。",
            "穏やかな雰囲気で安心して治療を受けられました。",
            "心地よい空間でゆったりと過ごせました。",
            "院内が清潔で居心地が良かったです。",
            "リラックスできる環境で治療に集中できました。",
            "温かい雰囲気で気持ちよく過ごせました。",
            "落ち着ける空間で心が和みました。",
            "癒しの空間で疲れが取れました。"
        ],
        4: [
            "院内の雰囲気が良くてリラックスできました。",
            "落ち着いた環境で過ごせました。",
            "リラックスできる空間でした。",
            "穏やかな雰囲気で安心できました。",
            "居心地の良い院内でした。",
            "清潔で快適な環境でした。",
            "リラックスして治療を受けられました。",
            "心地よい空間でした。",
            "落ち着ける雰囲気でした。",
            "癒される環境でした。"
        ],
        3: [
            "院内も清潔で良かったです。",
            "落ち着いた環境でした。",
            "院内の雰囲気も悪くありませんでした。",
            "清潔感のある院内でした。",
            "過ごしやすい環境でした。",
            "院内も整っていました。",
            "快適に過ごせました。",
            "環境も良好でした。",
            "院内の設備も良かったです。",
            "居心地も悪くありませんでした。"
        ]
    },

    // 推薦意向のテンプレート
    recommendation: {
        5: [
            "ぜひ知人にも勧めたい整骨院です。",
            "友人にも強くお勧めしたいと思います。",
            "周りの人にもぜひ紹介したい院です。",
            "迷わず人に勧められる整骨院です。",
            "自信を持って推薦できる院です。",
            "家族にも通ってもらいたい整骨院です。",
            "絶対に人に勧めたくなる院です。",
            "心からお勧めできる整骨院です。",
            "多くの人に知ってもらいたい院です。",
            "必ず人に紹介したい整骨院です。"
        ],
        4: [
            "知人にも勧めたい整骨院です。",
            "友人にもお勧めしたいと思います。",
            "人にも紹介したい院です。",
            "勧められる整骨院だと思います。",
            "推薦できる院です。",
            "他の人にも勧めたいです。",
            "人に勧めたくなる院です。",
            "お勧めできる整骨院です。",
            "紹介したい院です。",
            "人に勧められる院だと思います。"
        ],
        3: [
            "また利用したいと思います。",
            "継続して通いたいと思います。",
            "今後もお世話になりたいです。",
            "また通院したいと思います。",
            "引き続き利用させていただきます。",
            "これからも通いたいです。",
            "また来院したいと思います。",
            "継続的に利用したいです。",
            "今後ともよろしくお願いします。",
            "また機会があれば利用したいです。"
        ]
    },

    // 総合評価による接続詞
    connectors: {
        excellent: ["", "また、", "さらに、", "そして、", "加えて、"],
        good: ["", "また、", "そして、", ""],
        average: ["", "また、", ""]
    }
};

// ランダム選択ヘルパー関数
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 総合評価を計算
function calculateOverallRating(ratings) {
    const values = Object.values(ratings);
    const average = values.reduce((sum, val) => sum + val, 0) / values.length;
    
    if (average >= 4.5) return 'excellent';
    if (average >= 3.5) return 'good';
    return 'average';
}

// 口コミを生成する関数
function generateAdvancedReview(ratings) {
    const { treatment, staff, access, relaxation, recommendation } = ratings;
    const overallLevel = calculateOverallRating(ratings);
    
    let review = "桜並木駅前整骨院に通院しました。";
    
    // 施術について
    if (treatment >= 3) {
        const connector = getRandomElement(ReviewTemplates.connectors[overallLevel]);
        const template = getRandomElement(ReviewTemplates.treatment[treatment]);
        review += connector + template;
    }
    
    // スタッフ対応
    if (staff >= 3) {
        const connector = getRandomElement(ReviewTemplates.connectors[overallLevel]);
        const template = getRandomElement(ReviewTemplates.staff[staff]);
        review += connector + template;
    }
    
    // アクセス
    if (access >= 3) {
        const connector = getRandomElement(ReviewTemplates.connectors[overallLevel]);
        const template = getRandomElement(ReviewTemplates.access[access]);
        review += connector + template;
    }
    
    // リラックス度
    if (relaxation >= 3) {
        const connector = getRandomElement(ReviewTemplates.connectors[overallLevel]);
        const template = getRandomElement(ReviewTemplates.relaxation[relaxation]);
        review += connector + template;
    }
    
    // 推薦意向
    if (recommendation >= 3) {
        const connector = getRandomElement(ReviewTemplates.connectors[overallLevel]);
        const template = getRandomElement(ReviewTemplates.recommendation[recommendation]);
        review += connector + template;
    }
    
    return review;
}