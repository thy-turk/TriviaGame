// var showQuestions;

var triviaArea = $("#quiz");


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



  createquestions();

  $('#quiz').hide();
  $('#submit').hide();

  $('#startBtn').on("click", startGame);

 function startGame() {
    $('#startBtn').hide();
    $('#quiz').show();
    $('#submit').show();
 }


