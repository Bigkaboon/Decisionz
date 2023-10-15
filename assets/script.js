document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                generateAnswer();
            } else {
                let questionType = this.getAttribute("data-type");
                checkQuestionType(questionType);
            }
        });
    }

});

function checkQuestionType() {
    if (questionType = "yesno") {
        yesOrNo();
    }
}

function generateAnswer() {

}

function yesOrNo(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        alert("Yes!");
    } else {
        alert("No!");
    }
}
function shouldOrShouldNot() {

}
function alternatives() {

}
function scale() {

}


