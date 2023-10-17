document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "yesno", "shouldshouldnt", "scale", "alternative") {
                let questionType = this.getAttribute("data-type");
                alert(`You pressed THIS IS NOT SUBMIT`);
                checkQuestion(questionType);
            } else if (this.getAttribute("data-type") === "submit") {
                alert(answer);
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


function yesOrNo(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        answer = "Yes!";
        alert(answer);
    } else {
        answer = "No!";
        alert(answer);
    }
}
function shouldOrShouldNot(answ1, answ2) {
    answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        answer = "You should!";
        alert(answer);
    } else {
        answer = "You shouldn't";
        alert(answer);
    }
}
function alternatives() {

}
function scale() {

}


