const score = JSON.parse(localStorage.getItem("score"));

function getPersonality() {
    return (
        (score.E >= score.I ? "E" : "I") +
        (score.S >= score.N ? "S" : "N") +
        (score.T >= score.F ? "T" : "F") +
        (score.J >= score.P ? "J" : "P")
    );
}

const personalities = {
    INTJ: {
        title: "The Architect",
        desc: "Strategic, analytical, and highly independent thinkers who enjoy planning and problem-solving.",
        strengths: ["Logical", "Independent", "Visionary"],
        careers: ["Software Engineer", "Scientist", "Strategist"]
    },
    INTP: {
        title: "The Thinker",
        desc: "Curious and analytical individuals who love exploring ideas and theories.",
        strengths: ["Innovative", "Objective", "Deep thinker"],
        careers: ["Programmer", "Researcher", "Data Scientist"]
    },
    ENTJ: {
        title: "The Commander",
        desc: "Bold, confident leaders who excel at organizing people and achieving goals.",
        strengths: ["Leadership", "Strategic", "Decisive"],
        careers: ["CEO", "Manager", "Entrepreneur"]
    },
    ENTP: {
        title: "The Debater",
        desc: "Energetic and creative individuals who love challenges and new ideas.",
        strengths: ["Creative", "Energetic", "Quick thinker"],
        careers: ["Startup Founder", "Marketing", "Product Manager"]
    },
    INFJ: {
        title: "The Advocate",
        desc: "Insightful and idealistic individuals driven by values and purpose.",
        strengths: ["Empathetic", "Visionary", "Principled"],
        careers: ["Psychologist", "Writer", "Counselor"]
    },
    INFP: {
        title: "The Mediator",
        desc: "Idealistic and compassionate individuals who value authenticity.",
        strengths: ["Creative", "Empathetic", "Loyal"],
        careers: ["Writer", "Designer", "Social Worker"]
    },
    ENFJ: {
        title: "The Protagonist",
        desc: "Charismatic leaders who inspire and motivate others.",
        strengths: ["Charismatic", "Empathetic", "Organized"],
        careers: ["Teacher", "HR", "Coach"]
    },
    ENFP: {
        title: "The Campaigner",
        desc: "Enthusiastic, creative, and people-oriented individuals.",
        strengths: ["Energetic", "Imaginative", "Optimistic"],
        careers: ["Content Creator", "Journalist", "Marketing"]
    },
    ISTJ: {
        title: "The Inspector",
        desc: "Responsible and practical individuals who value order and structure.",
        strengths: ["Reliable", "Detail-oriented", "Logical"],
        careers: ["Auditor", "Administrator", "Civil Engineer"]
    },
    ISFJ: {
        title: "The Protector",
        desc: "Caring and loyal individuals who enjoy helping others.",
        strengths: ["Supportive", "Reliable", "Patient"],
        careers: ["Nurse", "Teacher", "Healthcare"]
    },
    ESTJ: {
        title: "The Executive",
        desc: "Efficient organizers who enjoy managing systems and people.",
        strengths: ["Leadership", "Organized", "Practical"],
        careers: ["Manager", "Administrator", "Operations"]
    },
    ESFJ: {
        title: "The Consul",
        desc: "Warm-hearted individuals who value harmony and cooperation.",
        strengths: ["Supportive", "Organized", "Caring"],
        careers: ["HR", "Teacher", "Customer Relations"]
    },
    ISTP: {
        title: "The Virtuoso",
        desc: "Hands-on problem solvers who love understanding how things work.",
        strengths: ["Practical", "Calm", "Technical"],
        careers: ["Mechanical Engineer", "Technician", "Pilot"]
    },
    ISFP: {
        title: "The Adventurer",
        desc: "Gentle, artistic individuals who value freedom and creativity.",
        strengths: ["Creative", "Flexible", "Sensitive"],
        careers: ["Artist", "Designer", "Photographer"]
    },
    ESTP: {
        title: "The Entrepreneur",
        desc: "Energetic risk-takers who thrive in fast-paced environments.",
        strengths: ["Bold", "Action-oriented", "Persuasive"],
        careers: ["Sales", "Entrepreneur", "Marketing"]
    },
    ESFP: {
        title: "The Entertainer",
        desc: "Spontaneous and fun-loving individuals who enjoy living in the moment.",
        strengths: ["Energetic", "Social", "Adaptable"],
        careers: ["Actor", "Event Manager", "Influencer"]
    }
};

const type = getPersonality();
const data = personalities[type];

document.getElementById("type").textContent = type;
document.getElementById("title").textContent = data.title;
document.getElementById("description").textContent = data.desc;

data.strengths.forEach(s =>
    document.getElementById("strengths").innerHTML += `<li>${s}</li>`
);

data.careers.forEach(c =>
    document.getElementById("careers").innerHTML += `<li>${c}</li>`
);

function restartTest() {
    localStorage.clear();
    window.location.href = "index.html";
}
