const intensity = JSON.parse(localStorage.getItem("intensity"));
const totalQuestions = intensity.questions;

let current = 0;

// MBTI score tracker
let score = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

// QUESTION BANK (extendable)
const questions = [
    {
        q: "In a group discussion, you usually:",
        options: [
            { text: "Speak confidently and lead", trait: "E" },
            { text: "Listen more and speak selectively", trait: "I" },
            { text: "Focus on facts and details", trait: "S" },
            { text: "Discuss ideas and possibilities", trait: "N" }
        ]
    },
    {
        q: "When making decisions, you rely more on:",
        options: [
            { text: "Logical reasoning", trait: "T" },
            { text: "Emotions and values", trait: "F" },
            { text: "Clear plans and rules", trait: "J" },
            { text: "Flexibility and spontaneity", trait: "P" }
        ]
    },
    {
        q: "Your work style is best described as:",
        options: [
            { text: "Structured and planned", trait: "J" },
            { text: "Adaptable and flexible", trait: "P" },
            { text: "Practical and realistic", trait: "S" },
            { text: "Creative and imaginative", trait: "N" }
        ]
    },
    {
        q: "After a long day, you prefer to:",
        options: [
            { text: "Socialize with others", trait: "E" },
            { text: "Spend time alone", trait: "I" },
            { text: "Finish pending tasks", trait: "J" },
            { text: "Relax without planning", trait: "P" }
        ]
    }
];

// Load question
function loadQuestion() {
    const q = questions[current];

    document.getElementById("question").textContent = q.q;
    document.getElementById("progress").textContent =
        `Question ${current + 1} of ${totalQuestions}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.trait);
        optionsDiv.appendChild(btn);
    });
}

// Handle option click
function selectOption(trait) {
    score[trait]++;
    current++;

    if (current < totalQuestions && current < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", JSON.stringify(score));
        window.location.href = "result.html";
    }
}

loadQuestion();
