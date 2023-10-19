document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "yesno", "shouldshouldnt", "scale", "alternatives") {
                let questionType = this.getAttribute("data-type");
                generateAnswer(questionType);
            }
        });
    }

    document.getElementById("input-area").addEventListener("submit", function (event) {
        event.preventDefault();
        handleQuestion();

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

function handleQuestion(questionType) {
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
    document.getElementById('question').classList.remove('hide');
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('alternatives-size').classList.add('hide');
    document.getElementById('alternative-button').classList.add('hide');
    document.getElementById('scale-button').classList.add('hide');
    document.getElementById('scale-input').classList.add('hide');
    document.getElementById('scale-input').classList.add('hide');
    const holder = document.getElementById('alternative-inputs');
    holder.innerHTML = '';


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
    document.getElementById('question').classList.remove('hide');
    document.getElementById('submit').classList.remove('hide');
    document.getElementById('alternatives-size').classList.add('hide');
    document.getElementById('alternative-button').classList.add('hide');
    document.getElementById('scale-button').classList.add('hide');
    document.getElementById('scale-input').classList.add('hide');
    document.getElementById('scale-size').classList.add('hide');

    const holder = document.getElementById('alternative-inputs');
    holder.innerHTML = '';


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
    document.getElementById('question').classList.add('hide');
    document.getElementById('submit').classList.add('hide');
    document.getElementById('alternatives-size').classList.remove('hide');
    document.getElementById('alternative-button').classList.remove('hide');
    document.getElementById('scale-button').classList.add('hide');
    document.getElementById('scale-input').classList.add('hide');
    document.getElementById('scale-size').classList.add('hide');

}
function scale() {
    document.getElementById('question').classList.add('hide');
    document.getElementById('submit').classList.add('hide');
    document.getElementById('alternatives-size').classList.add('hide');
    document.getElementById('alternative-button').classList.add('hide');
    document.getElementById('scale-size').classList.remove('hide');
    document.getElementById('scale-button').classList.remove('hide');
    document.getElementById('scale-input').classList.remove('hide');

    const holder = document.getElementById('alternative-inputs');
    holder.innerHTML = '';



}
/* Event Listener for Scale */
document.getElementById('scale-size').addEventListener('change', function (event) {
    scaleSize = parseInt(event.target.value);
    console.log(scaleSize);

    randomScale = Math.floor(Math.random() * scaleSize);
    console.log(randomScale);



});




document.getElementById("scale-button").addEventListener("click", function (event) {
    let userQuestion = document.getElementById("scale-input").value;
    console.log(userQuestion);



    let newQuestion = document.createElement("li");
    newQuestion.innerHTML =
        ` Your alternatives: ${userQuestion} <br> Answer: ${randomScale} / ${scaleSize}`;

    let displayQnA = document.getElementById("QnA-list");
    displayQnA.appendChild(newQuestion);
});

/* Event Listener's for alternative! */

document.getElementById('alternatives-size').addEventListener('change', function (event) {
    const size = parseInt(event.target.value);
    const holder = document.getElementById('alternative-inputs');
    holder.innerHTML = '';
    for (let i = 0; i < size; i++) {

        const text = document.createElement('div');
        text.innerHTML = "<input type='text' value='' name='items[]' class='alter' style='padding:5px;' placeholder='Enter alternative' />";
        holder.appendChild(text);

    }



});



document.getElementById('alternative-button').addEventListener('click', function (event) {

    const inputValues = document.getElementsByClassName('alter');
    const alternativesArray = [];
    for (let inputValue of inputValues) {
        alternativesArray.push(inputValue.value);
        console.info(inputValue.value);
    }
    var item = alternativesArray[Math.floor(Math.random() * alternativesArray.length)];
    console.info(item);

    let answer = item;

    let userAlternatives = alternativesArray;
    if (alternativesArray.length === 2) {
        userAlternatives = alternativesArray[0] + " and " + alternativesArray[1];
    } else if (alternativesArray.length === 3) {
        userAlternatives = alternativesArray[0] + ", " + alternativesArray[1] + "and " + alternativesArray[2];
    } else if (alternativesArray.length === 4) {
        userAlternatives = alternativesArray[0] + ", " + alternativesArray[1] + ", " + alternativesArray[2] + " and " + alternativesArray[3];
    } else if (alternativesArray.length === 5) {
        userAlternatives = alternativesArray[0] + ", " + alternativesArray[1] + ", " + alternativesArray[2] + ", " + alternativesArray[3] + " and " + alternativesArray[4];
    }


    let newQuestion = document.createElement("li");
    newQuestion.innerHTML =
        ` Your alternatives: ${userAlternatives} <br> Answer: ${answer} `;

    let displayQnA = document.getElementById("QnA-list");
    displayQnA.appendChild(newQuestion);

    const holder = document.getElementById('alternative-inputs');
    holder.innerHTML = '';



});