var correct = 0;


var questions = [
    {
        question: "Choose 3",

        answers: [
             '1',
             '2',
             '3',
             '4',

        ],
        correctAnswer: '3'
    },
    {
        question: "Choose 4",

        answers: [
             '1',
             '2',
             '3',
             '4',

        ],
        correctAnswer: '4'
    },
    {
        question: "Choose 1",

        answers: [
             '1',
             '2',
             '3',
             '4',

        ],
        correctAnswer: '1'
    },
    
];



function createquestions() {
    for (var i = 0; i < questions.length; i++) {
        $('#quiz').append("<h3>" + questions[i].question + "<h3>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $('#quiz').append("<div class='checked'><input type='radio' name='question-" + i +
            "' value='" + questions[i].answers[j] + "''>" + "<span class='word'>" + questions[i].answers[j] + "</span></div>");
        }
    }
}

function startGame() {
    $('#startBtn').hide();
    $('#quiz').show();
    $('#submit').show();
 }

function submit() {
    quizSubmit();
    $('#results').show();
    $('#quiz').hide();
    $('#submit').hide();
    $('#results').html("You got " + correct + "/3 questions correct!")

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


createquestions();

$('#quiz').hide();
$('#submit').hide();
$('#results').hide();

$('#startBtn').on("click", startGame);





 
$('#submit').on("click", submit);

