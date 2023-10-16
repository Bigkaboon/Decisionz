document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("hello");

            } else {
                let questionType = this.getAttribute("data-type");
                alert(`You pressed ${questionType}`);
                checkQuestion(questionType);
            }
        });
    }




});

function checkQuestion(questionType) {
    if (questionType === "yesno") {
        generateAnswer(questionType);
    } else if (questionType === "shouldshouldnt") {
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
function shouldOrShouldNot(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        alert("You should!");
    } else {
        alert("You shouldn't");
    }
}
function alternatives() {

}
function scale() {

}


