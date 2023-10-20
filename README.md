# Decisionz

Have you ever had a hard time making an easy decision, maybe what you want to eat for dinner, what you want to do first in your todo list or just wanna have someone else decide if you are going to do that not so necessary thing you thought about doing. Then you should visit.[Decisionz](https://bigkaboon.github.io/Decisionz/).

The application can help you in four different ways, the first two are similar yes or no- and should or shouldn't questions, they are easy to use and the answers are clear. The other two types are scale and alternatives. This makes it possible for you to to add in alternatives and get a random one as response, The scale is exactly what it sounds like. It gives you a scale on a question you provide with a scale of your choice.



![a picture of the main page](assets/readme-images/main-page.png)


## Features

  ---

- **Yes/No** - This feature lets the user ask a question in the input field and get one of the answers as a response.

  
    ![a picture of the yes/no feature](assets/readme-images/yesno.png)
 
  - **Should/Shouldn't** - Very alike the yes/no feature except the answers are different which indicates that the user should phrase the question differently.


- 
    ![a picture of the should/shouldn't feature](assets/readme-images/shouldshouldnt.png)

  
  - **Alternatives** - The alternative feature firstly requires the user to choose how many alternatives they would like, once completed, the user is asked to fill in all the alternatives so that a random alternative can be provided as response.


    ![a picture of the alternatives feature](assets/readme-images/alternatives.png)
  
  - **Scale** - This feature lets the user pick between three different scales 1-10, 1-100 and 1-1000 and then write the question/statement the user wants to see a scale on.


  
    ![a picture of the scale feature](assets/readme-images/scale.png)
  
  - **Display QnA** - In the white bordered box located just below the "Ask!" button all the questions and answers gets saved one by one in the order you ask them which makes it possible for the user to go back and use the output provided by the application.

  ![a picture of the display QnA feature](assets/readme-images/qna.png)

  - **Email results** - Once you are finished asking your questions and are satisfied with what is displayed in the  QnA-box you can send the content to your email simply by filling in the form which appears once "Result on Email" button is clicked.


  ![a picture of the email results feature](assets/readme-images/email.png)



## Features Left to Implement
---

- **Response** - With more time I would make the response more advanced, an idea to this is answering by using the question. One way to accomplish this would be instead of simply yes or no you could involve the question asked. Let's say the question is "Am I going to sleep well tonight". Then make a function that removes "Am", replace "I" to "you are'' (if answer is yes) or "you are not" (if answer is no)  and then answer the question so the output would be "yes you are going to sleep good tonight". This won't probably work for all the questions asked but it would be a cool feature to add.

## Validator Testing
 - HTML passed validating with no errors [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS passed validating with no errors [(JigSaw) validator](https://jigsaw.w3.org/css-validator/validator)
- JavaScript
  - Passed validating with no errors through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 19 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 1.
    - Largest function has 20 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 6 while the median is 1.

## Unfixed bugs

- **Button Text** - Once I ran the HTML code through the W3C validator it gave back an error since I used paragraph's. As soon as I removed the elements it dislocated the text, at least in comprehension to the way I wanted it to be.


## Deployment
- I deployed the site to GitHub pages, the process is described by the steps below.
  - Open the repository and click settings.
  - Click pages on the sidebar to the left.
  - inside pages select main branch and the root folder.
  - Once complete, the press save and deployed version is up and running within a few minutes.

## Credits
-**Icons** - The icons I used is from google [FontAwesome](https://fontawesome.com/)

- **Love Math** - The planning of the area where you choose what type of question you would like to use is well inspired from the Love Math walk through project. I added the buttons in a div in the same way as in the project but edited the code so that the logistics matched the purpose of my project since they work a bit differently.
  
- **Mentor** - I had some issues getting the Email feature to work so I asked my mentor for help to get the functionality behind it to work. I got help with this code provided below. 

```
const sendEmail = (userName, userMail) => {
    emailjs.send('service_5zj8vt1', 'template_sc6pd6m', { name: userName, email: userMail, answers: document.getElementById("QnA-list").innerText }, 'd8LxiloK_bJZiS78E')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};
document.getElementById('close-btn').addEventListener('click', function (event) {
    document.getElementById('sendEmail').classList.add('hide');
});

document.getElementById('send').addEventListener('click', (event) => {
    const userName = document.getElementById("user_name").value;
    const userMail = document.getElementById("user_email").value;
    sendEmail(userName, userMail);
    document.getElementById('sendEmail').classList.add('hide');

});

```

- **EmailJS** - I used [EmailJS](https://www.emailjs.com/) to send the results via email.
## Media
- No media is used in this project.
