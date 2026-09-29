if (
    window.location.pathname.includes("admin.html")
) {

    if (localStorage.getItem("adminLoggedIn") != "true") {

        window.location.href = "admin-login.html";

    }

}

function startLearning() {

    alert("Welcome to EverGreen Tutor & Consult!");

}

function registerNow() {

    alert("Registration will open soon.");

}
function joinNow() {

    let user =
        localStorage.getItem("loggedInUser");

    if (user) {

        window.location.href =
            "pages/dashboard.html";

    }

    else {

        window.location.href =
            "pages/register.html";

    }

}

function openSubject(subject) {

    alert(
        "Welcome to " + subject + "!\n\n" +
        "Tutorials for " + subject + " will be available soon."
    );

}

function searchSubject() {

    let subject =
        document.getElementById("search").value
            .trim()
            .toLowerCase();

    let subjectPages = {

        "mathematics": "pages/subject.html",

        "english": "pages/english.html",

        "english language": "pages/english.html",

        "biology": "pages/biology.html",

        "chemistry": "pages/chemistry.html",

        "physics": "pages/physics.html",

        "computer": "pages/computer.html",

        "computer studies": "pages/computer.html"

    };

    let result = document.getElementById("result");

    if (subjectPages[subject]) {

        result.innerHTML =
            "✅ Opening " + subject + "...";

        window.location.href =
            subjectPages[subject];

    }

    else {

        result.innerHTML =
            "❌ Please search for Mathematics, English, Biology, Chemistry, Physics, or Computer Studies.";

    }

}


function startMath() {

    let lessonBox = document.getElementById("lessonBox");

    let lessonTitle = document.getElementById("lessonTitle");

    let lessonContent = document.getElementById("lessonContent");

    lessonBox.style.display = "block";

    lessonTitle.innerHTML = "📘 Mathematics";

    lessonContent.innerHTML =


        "<b>Lesson 1: Introduction to Algebra</b><br><br>" +

        "Algebra is a branch of Mathematics that uses letters and numbers to solve problems.<br><br>" +

        "<b>Example:</b><br>" +

        "x + 5 = 10<br><br>" +

        "<b>Answer:</b><br>" +

        "x = 5<br><br>" +

        "<button onclick='mathQuiz()'>Take Quiz</button>";
}

function mathQuiz() {

    let answer = prompt("Solve: x + 5 = 10\n\nWhat is x?");

    let scoreBox = document.getElementById("scoreBox");

    let score = document.getElementById("score");

    scoreBox.style.display = "block";

    if (answer == "5") {

        score.innerHTML = "🎉 Score: 100%";

    } else {

        score.innerHTML = "❌ Score: 0%";

    }

}

window.onload = function () {

    let user =
        localStorage.getItem("loggedInUser");

    let welcomeUser =
        document.getElementById("welcomeUser");

    if (welcomeUser && user) {

        welcomeUser.innerHTML =
            "👋 Welcome, " + user;

        let accountLink =
            document.getElementById("accountLink");

        if (accountLink && user) {

            accountLink.innerHTML =
                '<a href="#" onclick="logout()">Logout</a>';

        }

        else if (accountLink) {

            accountLink.innerHTML =
                '<a href="pages/login.html">Login</a>';

        }

    }

    else if (welcomeUser) {

        welcomeUser.innerHTML =
            "🎓 Welcome to EverGreen Tutor & Consult";

    }

}

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href = "pages/login.html";

}
function uploadImage() {

    let file =
        document.getElementById("imageInput").files[0];

    let reader = new FileReader();

    reader.onload = function (e) {

        let profileImage =
            document.getElementById("profileImage");

        let idProfileImage =
            document.getElementById("idProfileImage");

        if (profileImage) {

            profileImage.src = e.target.result;

        }

        if (idProfileImage) {

            idProfileImage.src = e.target.result;

        }

        localStorage.setItem("profileImage", e.target.result);

    };

    if (file) {

        reader.readAsDataURL(file);

    }

}
let savedImage = localStorage.getItem("profileImage");

let profileImage = document.getElementById("profileImage");

if (savedImage && profileImage) {

    profileImage.src = savedImage;

}

const backgrounds = [
    "image/pics.jpg",
    "image/pics 2.jpg",
    "image/pics 3.jpg",
    "image/pics 4.jpg",
    "image/pics 5.jpg",
    "image/pics 6.jpg"
];

let current = 0;

function changeBackground() {

    document.querySelector(".hero").style.backgroundImage =
        "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('"
        + backgrounds[current] + "')";

    current++;

    if (current >= backgrounds.length) {
        current = 0;
    }

}

if (document.querySelector(".hero")) {

    changeBackground();

    setInterval(changeBackground, 3000);

}

function contactUs() {

    let message =
        "Hello EverGreen Tutor & Consult, I would like to make an enquiry.";

    window.open(
        "https://wa.me/2348129210525?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}

if (document.getElementById("completedSubjects")) {

    document.getElementById("completedSubjects").innerHTML =
        localStorage.getItem("completedSubjects") || 0;

    document.getElementById("quizTaken").innerHTML =
        localStorage.getItem("quizTaken") || 0;

    document.getElementById("averageScore").innerHTML =
        (localStorage.getItem("averageScore") || 0) + "%";

}
function submitQuiz() {

    let score = 0;

    let answer1 = document.querySelector('input[name="q1"]:checked');

    let answer2 = document.querySelector('input[name="q2"]:checked');

    if (answer1 && answer1.value == "B") {
        score++;
    }

    if (answer2 && answer2.value == "B") {
        score++;
    }

    document.getElementById("result").innerHTML =
        "🎉 Your Score: " + score + " / 2";

}

const mathematicsQuestions = [

    {
        question: "What is 5 + 3?",
        answers: ["6", "8", "10", "12"],
        correct: 1
    },

    {
        question: "What is 12 - 5?",
        answers: ["6", "7", "8", "9"],
        correct: 1
    },

    {
        question: "What is 9 × 4?",
        answers: ["32", "34", "36", "38"],
        correct: 2
    },

    {
        question: "What is 81 ÷ 9?",
        answers: ["7", "8", "9", "10"],
        correct: 2
    },

    {
        question: "What is 15 + 20?",
        answers: ["30", "35", "40", "45"],
        correct: 1
    },

    {
        question: "What is 25 - 9?",
        answers: ["14", "15", "16", "17"],
        correct: 2
    },

    {
        question: "What is 6 × 7?",
        answers: ["40", "41", "42", "43"],
        correct: 2
    },

    {
        question: "What is 100 ÷ 20?",
        answers: ["2", "4", "5", "10"],
        correct: 2
    },

    {
        question: "What is the square of 8?",
        answers: ["16", "32", "64", "72"],
        correct: 2
    },

    {
        question: "What is the cube of 3?",
        answers: ["9", "18", "27", "36"],
        correct: 2
    },

    {
        question: "What is 18 + 12?",
        answers: ["28", "30", "32", "34"],
        correct: 1
    },

    {
        question: "What is 50 - 18?",
        answers: ["30", "31", "32", "33"],
        correct: 2
    },

    {
        question: "What is 7 × 8?",
        answers: ["54", "56", "58", "60"],
        correct: 1
    },

    {
        question: "What is 90 ÷ 10?",
        answers: ["8", "9", "10", "11"],
        correct: 1
    },

    {
        question: "What is 11 + 22?",
        answers: ["31", "32", "33", "34"],
        correct: 2
    },

    {
        question: "What is 45 - 19?",
        answers: ["24", "25", "26", "27"],
        correct: 2
    },

    {
        question: "What is 14 × 2?",
        answers: ["26", "27", "28", "30"],
        correct: 2
    },

    {
        question: "What is 64 ÷ 8?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },

    {
        question: "What is 13 + 17?",
        answers: ["28", "29", "30", "31"],
        correct: 2
    },

    {
        question: "What is 100 - 45?",
        answers: ["50", "55", "60", "65"],
        correct: 1
    }

];

let savedQuestions = localStorage.getItem("mathematicsQuestions");

if (savedQuestions) {

    mathematicsQuestions.length = 0;

    mathematicsQuestions.push(...JSON.parse(savedQuestions));

}

const englishQuestions = [

    {
        question: "Choose the correct spelling.",
        answers: [
            "Beautiful",
            "Beautifull",
            "Beutiful",
            "Beautifool"
        ],
        correct: 0
    },

    {
        question: "A noun is ________",
        answers: [
            "Action word",
            "Naming word",
            "Joining word",
            "Describing word"
        ],
        correct: 1
    },

    {
        question: "Opposite of Happy",
        answers: [
            "Joyful",
            "Sad",
            "Smile",
            "Kind"
        ],
        correct: 1
    }

];

const biologyQuestions = [

    {
        question: "The powerhouse of the cell is?",
        answers: [
            "Nucleus",
            "Mitochondria",
            "Cell wall",
            "Ribosome"
        ],
        correct: 1
    },

    {
        question: "Humans have ____ lungs.",
        answers: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 1
    }

];

const chemistryQuestions = [

    {
        question: "What is the chemical formula for water?",
        answers: ["CO2", "H2O", "O2", "NaCl"],
        correct: 1
    },

    {
        question: "Which gas is needed for burning?",
        answers: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        correct: 0
    },

    {
        question: "What is the smallest particle of an element?",
        answers: ["Molecule", "Atom", "Cell", "Compound"],
        correct: 1
    },

    {
        question: "An acid has a pH value that is:",
        answers: ["Less than 7", "Exactly 7", "More than 7", "Always 14"],
        correct: 0
    },

    {
        question: "The periodic table is arranged mainly by:",
        answers: ["Colour", "Atomic number", "Weight of objects", "Country"],
        correct: 1
    }

];

const physicsQuestions = [

    {
        question: "What is a force?",
        answers: [
            "A push or pull",
            "A type of food",
            "A colour",
            "A chemical element"
        ],
        correct: 0
    },

    {
        question: "What is the SI unit of force?",
        answers: ["Watt", "Newton", "Joule", "Metre"],
        correct: 1
    },

    {
        question: "Which of these is a form of energy?",
        answers: ["Light", "Water", "Sand", "Air"],
        correct: 0
    },

    {
        question: "What instrument is used to measure electric current?",
        answers: ["Thermometer", "Ammeter", "Ruler", "Barometer"],
        correct: 1
    },

    {
        question: "Energy is the ability to:",
        answers: [
            "Change colour",
            "Do work",
            "Become smaller",
            "Make sound only"
        ],
        correct: 1
    }

];

const computerQuestions = [

    {
        question: "What is a computer?",
        answers: [
            "An electronic device that processes data",
            "A type of food",
            "A school subject only",
            "A book"
        ],
        correct: 0
    },

    {
        question: "Which part is used to type letters and numbers?",
        answers: ["Monitor", "Keyboard", "Printer", "Speaker"],
        correct: 1
    },

    {
        question: "Which part is called the brain of the computer?",
        answers: ["Mouse", "CPU", "Monitor", "Keyboard"],
        correct: 1
    },

    {
        question: "Which of these is computer software?",
        answers: ["Microsoft Word", "Keyboard", "Mouse", "Monitor"],
        correct: 0
    },

    {
        question: "What does email allow people to do?",
        answers: [
            "Send electronic messages",
            "Print paper only",
            "Turn off the computer",
            "Draw pictures only"
        ],
        correct: 0
    }

];
const questionBankDetails = {

    "Mathematics": {
        questions: mathematicsQuestions,
        storageKey: "mathematicsQuestions"
    },

    "English": {
        questions: englishQuestions,
        storageKey: "englishQuestions"
    },

    "Biology": {
        questions: biologyQuestions,
        storageKey: "biologyQuestions"
    },

    "Chemistry": {
        questions: chemistryQuestions,
        storageKey: "chemistryQuestions"
    },

    "Physics": {
        questions: physicsQuestions,
        storageKey: "physicsQuestions"
    },

    "Computer Studies": {
        questions: computerQuestions,
        storageKey: "computerQuestions"
    }

};

let loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
    alert("⚠️ Please login before taking a quiz.");
    window.location.href = "login.html";
}



let subject = localStorage.getItem("subject");

if (!subject) {
    alert("⚠️ Please select a subject before starting a quiz.");
    window.location.href = "dashboard.html";
}

let currentQuestionBank =
    questionBankDetails[subject] ||
    questionBankDetails["Mathematics"];

let savedSelectedQuestions =
    localStorage.getItem(currentQuestionBank.storageKey);

let questions = savedSelectedQuestions
    ? JSON.parse(savedSelectedQuestions)
    : currentQuestionBank.questions;

questions.sort(function () {

    return Math.random() - 0.5;

});

let currentQuestion = 0;

let userAnswers = [];

// QUIZ TIMER
let timeLeft = 20 * 60; // 20 minutes
let timerInterval;

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerHTML =
            "⏱ Time Left: " +
            minutes + ":" +
            (seconds < 10 ? "0" : "") +
            seconds;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ Time is up! Your exam will be submitted.");

            calculateScore();

        }

        timeLeft--;

    }, 1000);
}

function loadQuestion() {

    document.getElementById("questionNumber").innerHTML =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    let percent =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        percent + "%";

    document.getElementById("questionText").innerHTML =
        questions[currentQuestion].question;

    let answers = "";

    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {

        let checked = "";

        if (userAnswers[currentQuestion] == i) {

            checked = "checked";

        }

        answers +=
            "<label>" +
            "<input type='radio' name='answer' value='" + i + "' " + checked + "> " +
            questions[currentQuestion].answers[i] +
            "</label><br><br>";
    }

    document.getElementById("answers").innerHTML = answers;

    let nextBtn = document.getElementById("nextBtn");

    if (currentQuestion == questions.length - 1) {

        nextBtn.innerHTML = "✅ Finish";

    } else {

        nextBtn.innerHTML = "Next ➡";

    }

    createPalette();
}

if (window.location.pathname.includes("quiz.html")) {

    loadQuestion();
    startTimer();
}

function createPalette() {

    let palette = "";

    for (let i = 0; i < questions.length; i++) {

        let css = "palette-btn";

        if (i == currentQuestion) {

            css += " active-question";

        }

        else if (userAnswers[i] != undefined) {

            css += " answered-question";

        }

        palette +=
            "<button class='" + css +
            "' onclick='goToQuestion(" + i + ")'>"
            + (i + 1) +
            "</button>";

    }

    document.getElementById("questionPalette").innerHTML =
        palette;

}


function nextQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (!selected) {

        alert("⚠️ Please select an answer before proceeding.");

        return;

    }

    userAnswers[currentQuestion] =
        Number(selected.value);

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishExam();

    }

}
function previousQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {

        userAnswers[currentQuestion] =
            Number(selected.value);

    }

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}

function goToQuestion(number) {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {

        userAnswers[currentQuestion] =
            Number(selected.value);

    }

    currentQuestion = number;

    loadQuestion();

}

function calculateScore() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {

        if (userAnswers[i] == questions[i].correct) {
            score++;
        }

    }

    // Save the score
    localStorage.setItem("quizScore", score);

    // Save total number of questions
    localStorage.setItem("quizTotal", questions.length);

    // Go to result page
    window.location.href = "result.html";
}

let percentage = (score / questions.length) * 100;

let quizzes =
    Number(localStorage.getItem("quizTaken")) || 0;

localStorage.setItem("quizTaken", quizzes + 1);

let previousHighestScore =
    Number(localStorage.getItem("averageScore")) || 0;

let highestScore =
    Math.max(previousHighestScore, percentage);

localStorage.setItem("averageScore", highestScore);
let completedSubjects =
    JSON.parse(localStorage.getItem("completedSubjectList")) || [];

let currentSubject =
    localStorage.getItem("subject");

if (!completedSubjects.includes(currentSubject)) {

    completedSubjects.push(currentSubject);

}

localStorage.setItem(
    "completedSubjectList",
    JSON.stringify(completedSubjects)
);

localStorage.setItem(
    "completedSubjects",
    completedSubjects.length
);

let status = percentage >= 50
    ? "✅ PASS"
    : "❌ FAIL";

localStorage.setItem("score", score);

localStorage.setItem("percentage", percentage);

localStorage.setItem("status", status);
let quizResults =
    JSON.parse(localStorage.getItem("quizResults")) || [];

quizResults.push({

    subject: localStorage.getItem("subject"),

    score: percentage,

    status: status

});

localStorage.setItem(
    "quizResults",
    JSON.stringify(quizResults)
);
let leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push({

    name: localStorage.getItem("fullname"),

    subject: localStorage.getItem("subject"),

    score: percentage.toFixed(0)

});

localStorage.setItem(
    "leaderboard",
    JSON.stringify(leaderboard)
);

window.location.href = "result.html";



function finishExam() {
    let studentName = localStorage.getItem("studentname");

    let confirmSubmit =
        confirm("Are you sure you want to submit your exam?");

    if (confirmSubmit) {

        calculateScore();

    }

}
if (document.getElementById("studentName")) {

    let name = localStorage.getItem("fullname");

    document.getElementById("studentName").innerHTML =
        "👋 Welcome, " + name;

}
function showMessage(text) {

    let msg = document.getElementById("loginMessage");

    if (!msg) return;

    msg.innerHTML = text;

    msg.style.display = "block";

    setTimeout(function () {

        msg.style.display = "none";

    }, 3000);

}

function chooseSubject(subject) {

    localStorage.setItem("subject", subject);

    window.location.href = "quiz.html";

}

if (document.getElementById("subjectTitle")) {

    let subject = localStorage.getItem("subject");

    document.getElementById("subjectTitle").innerHTML =
        "📚 Subject: " + subject;



    function getAdminQuestionBank() {

        let subjectSelect =
            document.getElementById("questionSubject");

        let selectedSubject = subjectSelect
            ? subjectSelect.value
            : "Mathematics";

        return questionBankDetails[selectedSubject];

    }

    function saveAdminQuestionBank(questionBank) {

        localStorage.setItem(
            questionBank.storageKey,
            JSON.stringify(questionBank.questions)
        );

    }

    function addQuestion() {

        let questionBank = getAdminQuestionBank();

        let questionText =
            document.getElementById("question").value.trim();

        let answers = [

            document.getElementById("option1").value.trim(),

            document.getElementById("option2").value.trim(),

            document.getElementById("option3").value.trim(),

            document.getElementById("option4").value.trim()

        ];

        let correctAnswer =
            Number(document.getElementById("correct").value);

        if (
            !questionText ||
            answers.some(function (answer) {
                return !answer;
            }) ||
            correctAnswer < 0 ||
            correctAnswer > 3
        ) {

            alert("Please enter a question, four answers, and a correct answer from 0 to 3.");

            return;

        }

        questionBank.questions.push({

            question: questionText,

            answers: answers,

            correct: correctAnswer

        });

        saveAdminQuestionBank(questionBank);

        document.getElementById("question").value = "";
        document.getElementById("option1").value = "";
        document.getElementById("option2").value = "";
        document.getElementById("option3").value = "";
        document.getElementById("option4").value = "";
        document.getElementById("correct").value = "";

        displayQuestions();

    }

    function displayQuestions() {

        let questionList =
            document.getElementById("questionList");

        if (!questionList) {

            return;

        }

        let questionBank = getAdminQuestionBank();

        let output = "";

        for (let i = 0; i < questionBank.questions.length; i++) {

            let item = questionBank.questions[i];

            output +=
                "<div class='question-card'>" +
                "<h3>" + (i + 1) + ". " + item.question + "</h3>" +
                "<ul>" +
                "<li>A. " + item.answers[0] + "</li>" +
                "<li>B. " + item.answers[1] + "</li>" +
                "<li>C. " + item.answers[2] + "</li>" +
                "<li>D. " + item.answers[3] + "</li>" +
                "</ul>" +
                "<p><b>Correct Answer:</b> " +
                String.fromCharCode(65 + item.correct) +
                "</p>" +
                "<button class='edit-btn' onclick='editQuestion(" + i + ")'>✏ Edit</button>" +
                "<button class='delete-btn' onclick='deleteQuestion(" + i + ")'>🗑 Delete</button>" +
                "</div>";

        }

        questionList.innerHTML = output;

    }

    function deleteQuestion(index) {

        let questionBank = getAdminQuestionBank();

        if (confirm("Delete this question?")) {

            questionBank.questions.splice(index, 1);

            saveAdminQuestionBank(questionBank);

            displayQuestions();

        }

    }

    function editQuestion(index) {

        let questionBank = getAdminQuestionBank();

        let item = questionBank.questions[index];

        document.getElementById("question").value = item.question;
        document.getElementById("option1").value = item.answers[0];
        document.getElementById("option2").value = item.answers[1];
        document.getElementById("option3").value = item.answers[2];
        document.getElementById("option4").value = item.answers[3];
        document.getElementById("correct").value = item.correct;

        questionBank.questions.splice(index, 1);

        saveAdminQuestionBank(questionBank);

        displayQuestions();

    }

    if (document.getElementById("score")) {

        document.getElementById("student").innerHTML =
            "👤 Student: " + localStorage.getItem("fullname");

        document.getElementById("subject").innerHTML =
            "📚 Subject: " + localStorage.getItem("subject");

        document.getElementById("score").innerHTML =
            "Score: " + localStorage.getItem("score");

        document.getElementById("percentage").innerHTML =
            "Percentage: " + localStorage.getItem("percentage") + "%";




        document.getElementById("status").innerHTML =
            localStorage.getItem("status");

    }

    if (document.getElementById("leaderboardTable")) {

        let leaderboard =
            JSON.parse(localStorage.getItem("leaderboard")) || [];

        leaderboard.sort(function (a, b) {

            return b.score - a.score;

        });

        let table = "";

        for (let i = 0; i < leaderboard.length; i++) {

            let medal = i + 1;

            if (i == 0) {
                medal = "🥇";
            }

            else if (i == 1) {
                medal = "🥈";
            }

            else if (i == 2) {
                medal = "🥉";
            }

            table +=
                "<tr>" +
                "<td>" + medal + "</td>" +
                "<td>" + leaderboard[i].name + "</td>" +
                "<td>" + leaderboard[i].subject + "</td>" +
                "<td>" + leaderboard[i].score + "%</td>" +
                "</tr>";

        }

        document.getElementById("leaderboardTable").innerHTML = table;

    }


    if (document.getElementById("status")) {

        document.getElementById("status").innerHTML =
            localStorage.getItem("status");

    }




    if (document.getElementById("students")) {

        let students =
            JSON.parse(localStorage.getItem("students")) || [];

        document.getElementById("students").innerHTML =
            students.length;

        document.getElementById("subjects").innerHTML = 6;

        document.getElementById("quizzes").innerHTML =
            localStorage.getItem("quizTaken") || 0;

        document.getElementById("highestScore").innerHTML =
            (localStorage.getItem("averageScore") || 0) + "%";

    }

    function adminLogin() {

        let username =
            document.getElementById("adminUsername").value;

        let password =
            document.getElementById("adminPassword").value;

        if (username == "admin" && password == "12345") {

            localStorage.setItem("adminLoggedIn", "true");

            window.location.href = "admin.html";

        }

        else {

            alert("❌ Wrong Username or Password");

        }

    }

    function adminLogout() {

        localStorage.removeItem("adminLoggedIn");

        window.location.href = "admin-login.html";

    }

    if (document.getElementById("questionList")) {

        displayQuestions();

    }

    if (document.getElementById("studentTable")) {

        let students =
            JSON.parse(localStorage.getItem("students"))
            || [];

        let output = "";

        students.forEach(function (student) {

            output +=
                "<tr>" +
                "<td>" + student.name + "</td>" +
                "<td>" + student.email + "</td>" +
                "</tr>";

        });

        document.getElementById("studentTable").innerHTML =
            output;

    }

    if (document.getElementById("recentResults")) {

        let results =
            JSON.parse(localStorage.getItem("quizResults")) || [];

        let recentResults =
            document.getElementById("recentResults");

        if (results.length > 0) {

            let output = "";

            results.forEach(function (result) {

                output +=
                    "<div class='card'>" +
                    "<h3>📚 " + result.subject + "</h3>" +
                    "<p>Score: " + result.score + "%</p>" +
                    "<p>" + result.status + "</p>" +
                    "</div>";

            });

            recentResults.innerHTML = output;

        }

    }