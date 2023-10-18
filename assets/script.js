document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "yesno", "shouldshouldnt", "scale", "alternatives") {
                let questionType = this.getAttribute("data-type");
                generateAnswer(questionType);
                alert(questionType);
                typeOfQuestion.push(questionType);
                /* Trying to replace 'null' to the latest questionType 

                if (document.getElementById("data-type") === "null") {
                    questionType = typeOfQuestion.at(1);

                } */

            }
        });
    }
    let typeOfQuestion = [];



    document.getElementById("input-area").addEventListener("submit", function () {
        event.preventDefault();
        handleQuestion();
        alert(typeOfQuestion);
        questionType = typeOfQuestion.length[-1];
        if (questionType === "alternatives") {
            alternatives();
        }
        
    });


});



function generateAnswer(questionType) {
    if (questionType === "yesno") {
        yesOrNo();
    } else if (questionType === "shouldshouldnt") {
        shouldOrShouldNot();
    } else if (questionType === "scale") {
        scale();
    } else if (questionType === "alternatives") {
        alternatives(questionType);
    }
}

function handleQuestion(typeOfQuestion) {


    let userQuestion = document.getElementById("question").value;

    alert(`Your question is: ` + userQuestion);

    let newQuestion = document.createElement("li");
    newQuestion.innerHTML =
        ` Question: ${userQuestion} <br> Answer: ${answer} `;

    let displayQnA = document.getElementById("QnA-list");
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

function alternatives(questionType) {
    /* document.getElementById("input-area").addEventListener("submit", function () {
        let altNumber = document.getElementById("question").value;
        console.log(altNumber);

    });
 */
}
function scale() {

}

