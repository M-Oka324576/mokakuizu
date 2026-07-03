// --- 音源データ（Base64埋め込み） ---
const correctSound = new Audio('data:audio/mpeg;base64,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盛りあがり');
const incorrectSound = new Audio('data:audio/mpeg;base64,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がんの');

let currentSessionQuestions = [];
let currentQuestion = 0;
let score = 0;

const progressEl = document.getElementById('progress-text');
const questionEl = document.getElementById('question-text');
const optionsEl = document.getElementById('options-container');
const resultEl = document.getElementById('result-message');
const nextBtn = document.getElementById('next-btn');

function playSound(isCorrect) {
    if (isCorrect) {
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log("再生エラー:", e));
    } else {
        incorrectSound.currentTime = 0;
        incorrectSound.play().catch(e => console.log("再生エラー:", e));
    }
}

function initQuiz() {
    // window.allQuizData から問題データを取得します
    currentSessionQuestions = [...window.allQuizData].sort(() => 0.5 - Math.random()).slice(0, 5);
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    resultEl.innerHTML = "";
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const currentQuizData = currentSessionQuestions[currentQuestion];
    
    progressEl.innerHTML = `<ruby>第<rt>だい</rt></ruby> ${currentQuestion + 1} <ruby>問<rt>もん</rt></ruby> / <ruby>第<rt>だい</rt></ruby> 5 <ruby>問<rt>もん</rt></ruby>`;
    questionEl.innerHTML = currentQuizData.question;

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.onclick = () => checkAnswer(index, button);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    const currentQuizData = currentSessionQuestions[currentQuestion];

    if (selectedIndex === currentQuizData.answer) {
        playSound(true);
        button.style.backgroundColor = "#d4edda";
        button.style.borderColor = "#28a745";
        button.style.color = "#155724";
        resultEl.style.color = "#28a745";
        resultEl.innerHTML = "<ruby>正解<rt>せいかい</rt></ruby>！🎉<br><br><span style='font-size: 15px; font-weight:normal; color:#444; line-height: 1.5; display: inline-block; text-align: left;'>" + currentQuizData.explanation + "</span>";
        score++;
    } else {
        playSound(false);
        button.style.backgroundColor = "#f8d7da";
        button.style.borderColor = "#dc3545";
        button.style.color = "#721c24";
        buttons[currentQuizData.answer].style.backgroundColor = "#d4edda";
        buttons[currentQuizData.answer].style.borderColor = "#28a745";
        buttons[currentQuizData.answer].style.color = "#155724";
        
        resultEl.style.color = "#dc3545";
        resultEl.innerHTML = "<ruby>不正解<rt>ふせいかい</rt></ruby>...<br><br><span style='font-size: 15px; font-weight:normal; color:#444; line-height: 1.5; display: inline-block; text-align: left;'>" + currentQuizData.explanation + "</span>";
    }

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentSessionQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    progressEl.innerHTML = "";
    questionEl.innerHTML = "クイズ<ruby>終了<rt>しゅうりょう</rt></ruby>！お<ruby>疲<rt>つか</rt></ruby>れ<ruby>様<rt>さま</rt></ruby>でした。";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.style.color = "#333";
    resultEl.innerHTML = `あなたの<ruby>正解数<rt>せいかいすう</rt></ruby>は 5<ruby>問中<rt>もんちゅう</rt></ruby> <strong>${score}<ruby>問<rt>もん</rt></ruby></strong> です！<br><br><button id="restart-btn">もういちどチャレンジ！</button>`;
    
    document.getElementById('restart-btn').onclick = () => {
        resultEl.innerHTML = "";
        initQuiz();
    };
}

initQuiz();