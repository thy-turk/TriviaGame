var correct = 0;
var counter = 90;
var downloadTimer;

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
             'A monkey called Albert',

        ],
        correctAnswer: 'A dog named Laika'
    },
    
];



function createquestions() {
    for (var i = 0; i < questions.length; i++) {
        $('#quiz').append("<h3>" + questions[i].question + "<h3>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $('#quiz').append("<div class='checked'><input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + "<span class='word'>" + questions[i].answers[j] + "</span></div>");
        }
    }
}

function startGame() {
    $('#startBtn').hide();
    $('#quiz').show();
    $('#submit').show();
    $('#timer').show();
    timerStart();
 }

function submit() {
    quizSubmit();
    $('#results').show();
    $('#quiz').hide();
    $('#submit').hide();
    $('#timer').hide();
    $('#results').html("You got " + correct + "/5 questions correct!")
    clearInterval(downloadTimer);


}

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
}

function timerStart() {
var downloadTimer = setInterval(function(){
  $('#timer').html(counter + " seconds remaining");
  counter -= 1;
  if(counter <= -1){
    clearInterval(downloadTimer);
    outOfTime();
  } 
}, 1000);
}

function outOfTime() {
    $('#results').show();
    $('#quiz').hide();
    $('#submit').hide();
    $('#timer').hide();
    $('#results').html("You ran out of time! You got " + correct + "/5 questions correct!")
    
}

createquestions();

$('#quiz').hide();
$('#submit').hide();
$('#results').hide();
$('#timer').hide();

$('#startBtn').on("click", startGame);

$('#submit').on("click", submit);

