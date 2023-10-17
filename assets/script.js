document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "yesno", "shouldshouldnt", "scale", "alternative") {
                let questionType = this.getAttribute("data-type");
                alert(`You pressed ${questionType}`);
                checkQuestion(questionType);

                if (this.getAttribute("data-type") === "submit") {
                    handleQuestion();
                    alert(`The answer is ` + answer);

                }
            }
        });

    }




});

function checkQuestion(questionType) {
    if (questionType === "yesno") {
        generateAnswer(questionType);
    } else if (questionType === "shouldshouldnt") {
        generateAnswer(questionType);
    } else if (questionType === "scale") {
        generateAnswer(questionType);
    } else if (questionType === "alternatives") {
        generateAnswer(questionType);
    }

}

function generateAnswer(questionType) {

    if (questionType === "yesno") {
        yesOrNo();
    } else if (questionType === "shouldshouldnt") {
        shouldOrShouldNot();
    } else if (questionType === "scale") {
        alert(`this is ${questionType}`);
    } else if (questionType === "alternatives") {
        alert(`this is ${questionType}`);
    }




}

function handleQuestion() {
    var userQuestion = document.getElementById("question").value;

    alert(`Your question is: ` + userQuestion);

    var newQuestion = document.createElement("ol");
    newQuestion.innerHTML =
        `<li>Question: ${userQuestion} <br> Answer: ${answer} </li>`;

    var displayQnA = document.getElementById("QnA-list");
    displayQnA.appendChild(newQuestion);

    document.getElementById("question").value = "";
}

function yesOrNo(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        answer = "Yes!";

    } else {
        answer = "No!";

    }
}
function shouldOrShouldNot(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        answer = "You should!";

    } else {
        answer = "You shouldn't";

    }
}
function alternatives() {

}
function scale() {

}


