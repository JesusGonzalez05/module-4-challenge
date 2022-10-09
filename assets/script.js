// allows quiz starter page to render 
// assigned variables in use 
var startButton = document.getElementById('start');
var startPage = document.getElementById('start-page');
var quizCard = document.getElementById('quiz-card');

// assigned an event lister to hear once the start button has been clicked 
startButton.addEventListener('click',startGame)

// function starts the game and moved the user from the start page to the questions
function startGame () {
startPage.style.display = 'none';
quizCard.style.display = 'block';
questionOne();
setTime();
};

var time = document.getElementById('timer');

var secondsLeft = 30;
var userScore = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to log score page
    }

  }, 1000);
}
// questions:
var listOfQuestions = [
{
    question: "Which is not a JavaScript data type?",
    choice1:'Boolean',
    choice2:'String',
    choice3:'Number',
    choice4:'Field',
    answer: 'Field'
},

{
    question:"What does 'this' refer to in JavaScript? ",
    choice1:'An object',
    choice2:'A function',
    choice3:'The event you are targeting',
    choice4:'The JavaScript file',
    answer: 'An object'
},

{
    question:'What does API stand for?',
    choice1:'Application Programming Intelligence',
    choice2:'Automated Programming Instructor ',
    choice3:'Application Programming Interface',
    choice4:'Aplicatioin Programming Interruption',
    answer: 'Application Programming Interface'
},

{
    question:'What company created JavaScript',
    choice1:'Microsoft',
    choice2:'IBM',
    choice3:'Intel',
    choice4:'Netscape',
    answer: 'Netscape'
}

]
// display questions
// hook into question element 
var questions = document.getElementById('questions');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');

function questionOne () {

questions.textContent = listOfQuestions[0].question;
answerOne.textContent = listOfQuestions[0].choice1;
answerTwo.textContent = listOfQuestions[0].choice2;
answerThree.textContent = listOfQuestions[0].choice3;
answerFour.textContent = listOfQuestions[0].choice4;

answerOne.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer1')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerTwo.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer2')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerThree.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer3')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
    }
    questionTwo();
});

answerFour.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer4')){
        // write code for correct answer (penalize score and time)

        secondsLeft += 5;
        userScore += 5;
    }
    questionTwo();
});
};

// question 2

function questionTwo () {

questions.textContent = listOfQuestions[1].question;
answerOne.textContent = listOfQuestions[1].choice1;
answerTwo.textContent = listOfQuestions[1].choice2;
answerThree.textContent = listOfQuestions[1].choice3;
answerFour.textContent = listOfQuestions[1].choice4;

answerOne.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer1')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerTwo.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer2')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerThree.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer3')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        questionThree();
    }

});

answerFour.addEventListener('click', function(event){
    userChoice = event.target;

    if (userChoice.matches('#answer4')){
        // write code for correct answer (penalize score and time)
        secondsLeft += 5;
        userScore += 5;
        questionThree();
    }

});


}

function questionThree () {
    
questions.textContent = listOfQuestions[2].question;
answerOne.textContent = listOfQuestions[2].choice1;
answerTwo.textContent = listOfQuestions[2].choice2;
answerThree.textContent = listOfQuestions[2].choice3;
answerFour.textContent = listOfQuestions[2].choice4;
    
answerOne.addEventListener('click', function(event){
  userChoice = event.target;
    
  if (userChoice.matches('#answer1')){
    // write code for wrong answer (penalize score and time)
    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  }
});
    
answerTwo.addEventListener('click', function(event){
  userChoice = event.target;
      
  if (userChoice.matches('#answer2')){
    // write code for wrong answer (penalize score and time)
    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  } 
});
    
answerThree.addEventListener('click', function(event){
  userChoice = event.target;
  
  if (userChoice.matches('#answer3')){
    // write code for wrong answer (penalize score and time)
    secondsLeft -= 5;
    userScore -= 5;
    questionFour();
  }
});
    
answerFour.addEventListener('click', function(event){
  userChoice = event.target;
    
  if (userChoice.matches('#answer4')){
    // write code for correct answer (penalize score and time)
    secondsLeft += 5;
    userScore += 5;
    questionFour();
  }
});
    
};


function questionFour () {
questions.textContent = listOfQuestions[3].question;
answerOne.textContent = listOfQuestions[3].choice1;
answerTwo.textContent = listOfQuestions[3].choice2;
answerThree.textContent = listOfQuestions[3].choice3;
answerFour.textContent = listOfQuestions[3].choice4;
        
answerOne.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer1')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
        
});
        
answerTwo.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer2')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
});
        
answerThree.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer3')){
        // write code for wrong answer (penalize score and time)
        secondsLeft -= 5;
        userScore -= 5;
        Scores();
    }
});
        
answerFour.addEventListener('click', function(event){
    userChoice = event.target;
    
    if (userChoice.matches('#answer4')){
        // write code for correct answer (penalize score and time)
        secondsLeft += 5;
        userScore += 5;
        Scores();
    }
        
});
        
}

// display time and start

var scorePage = document.getElementById('score-page')
function Scores () {
    quizCard.style.display = 'none';
    scorePage.style.display = 'block';
    };