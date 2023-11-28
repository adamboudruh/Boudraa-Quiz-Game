var score = 0;
var highScores = [];

function refreshScore() {
    $("#score").text("Score: " + score);
}

var correctOption = $('.correct');
var incorrectOption = $('.incorrect');
incorrectOption.on('click', function () {
    score--;
    refreshScore();
});
correctOption.on('click', function() {
    score++;
    refreshScore();
});



var beginButton = $('#begin');
var questions = $('#questions').children();

questions.on('hover', function() {
    questions.addClass('.active')
});

beginButton.on('click', firstQuestion);


function firstQuestion() {
    refreshScore();
    $('#welcome-page').attr('style', 'display: none');
    $('#question-container').attr('style', 'display: block');

}




