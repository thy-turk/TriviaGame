var correct = 0;
var counter = 90;
var downloadTimer;

//Creating arrays that stores all the questions, potential answers and the correct answer
var questions = [
    {
        question: "How old do researchers believe the world is?",

        answers: [
             '13 million years',
             '2.7 billion years',
             '13.8 billion years',
             '1.3 trillion years',

        ],
        correctAnswer: '13.8 billion years'
    },
    {
        question: "How many Earths can fit in the sun?",

        answers: [
             '1,000',
             '150,000',
             '643,000',
             '1,300,000',

        ],
        correctAnswer: '1,300,000'
    },
    {
        question: "In what year did the US first land on the moon?",

        answers: [
             '1964',
             '1967',
             '1969',
             '1973',

        ],
        correctAnswer: '1969'
    },
    {
        question: "Which country was the first to launch a satellite into space?",

        answers: [
             'United States',
             'China',
             'Russia',
             'India',

        ],
        correctAnswer: 'Russia'
    },
    {
        question: "What was the first animal sent into space?",

        answers: [
             'A dog named Laika',
             'A cat named Felicette',
             'A tortiose named George',
             'A monkey named Albert',

        ],
        correctAnswer: 'A dog named Laika'
    },
    
];



// This code displays the questions and potential answers with 
function createquestions() {
    for (var i = 0; i < questions.length; i++) {
        $('#quiz').append("<h3>" + questions[i].question + "<h3>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $('#quiz').append("<div class='checked'><input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + "<span class='word'>" + questions[i].answers[j] + "</span></div>");
        }
    }
}

//Function is run when the start button is pressed
function startGame() {
    $('#startBtn').hide();
    $('#quiz').show();
    $('#submit').show();
    $('#timer').show();
    timerStart();
}

// Function is run when the submit button is pressed
function submit() {
    quizSubmit();
    $('#results').show();
    $('#quiz').hide();
    $('#submit').hide();
    $('#timer').hide();
    $('#results').html("You got " + correct + "/5 questions correct!")
    clearInterval(downloadTimer);


}

// This function checks to see if the answer provided is correct 
function quizSubmit() {
    var inputs = $(".checked").children("input:checked");
  console.log('inputs', inputs);
  for (var i = 0; i < inputs.length; i++) {
    console.log('inputs[i].val()', inputs[i].value);
    console.log(' questions[i].correctAnswer', questions[i].correctAnswer);
    if (inputs[i].value === questions[i].correctAnswer) {
      correct++;
      console.log('correct', correct);
    } 
  }
  outOfTime();

}

// This function starts the timer
function timerStart() {
    var downloadTimer = setInterval(function(){
        $('#timer').html(counter + " seconds remaining");
        counter -= 1;
        if(counter <= -1){
            clearInterval(downloadTimer);
        } 
    }, 1000);
}

// This function is run if the timer reaches 0;
function outOfTime() {
    $('#results').show();
    $('#quiz').hide();
    $('#submit').hide();
    $('#timer').hide();
    $('#results').html("You ran out of time! You got " + correct + "/5 questions correct!")
    
}

// Calling on the function to display the questions and possible answers
createquestions();

//Hiding code we don't want shown at the start
$('#quiz').hide();
$('#submit').hide();
$('#results').hide();
$('#timer').hide();

//Code saying to run the startGame function when the start button is clicked
$('#startBtn').on("click", startGame);

//Code saying to run the submit function when the submit button is clicked
$('#submit').on("click", submit);

