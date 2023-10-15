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

function checkQuestionType(questionType) {
    if (questionType = "yesno") {
        
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
function shouldOrShouldNot(answ1, answ2) {
    /* answ1 = 1;
    answ2 = 2;
    answCheck = Math.floor(Math.random() * 2);

    if (answ1 === answCheck) {
        alert("You should!");
    } else {
        alert("You shouldn't");
    } */
}
function alternatives() {

}
function scale() {
    let scale = parseInt(promt("You chose 'Scale', what scale would you like to see  1 - ..."));
    let ratio = Math.floor(Math.random() * scale);
    alert("The odds for that is " + ((ratio / scale) * 100) + "%");
}


