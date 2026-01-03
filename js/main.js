function startTest() {
    window.location.href = "user.html";
}
// Intro Page Navigation
function startTest() {
    window.location.href = "user.html";
}

// User Form Handling
const form = document.getElementById("userForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const error = document.getElementById("error");

        if (name === "" || age === "") {
            error.textContent = "Please fill all required fields";
            return;
        }

        if (age < 10 || age > 100) {
            error.textContent = "Please enter a valid age";
            return;
        }

        // Store data
        const userData = {
            name,
            age,
            gender
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        // Move to intensity page
        window.location.href = "intensity.html";
    });
}
// Intensity Selection
function selectIntensity(level, totalQuestions) {
    const intensityData = {
        level: level,
        questions: totalQuestions
    };

    localStorage.setItem("intensity", JSON.stringify(intensityData));

    window.location.href = "test.html";
}
