var score = 0;
var highScores = [];
questionNum = 0;
function refreshScore() {
    $("#score").text("Score: " + score);
}

var anyOption = $('.option');
var beginButton = $('#begin');
var correctID = 3;
var wasItCorrect = true;
var questionAnswered = false;

beginButton.on('click', function() { refreshScore(); questionNum = 1; displayQuestion(questionNum)} );

anyOption.on('click', function () {
    var optionPicked = parseInt($(this).attr('id'), 10);
    console.log('You picked option: ' + optionPicked); 
    console.log('Correct answer is: ' + correctID);
    questionNum++;
    if (optionPicked == correctID) score++;
    console.log('The score is now: ' + score);
    refreshScore(); 
    displayQuestion(questionNum); 
});
           

function displayQuestion(questionNum) {
    if(questionNum == 1) {
        $('#welcome-page').attr('style', 'display: none');
        $('#question-container').attr('style', 'display: block');
        console.log("first question");
    }
    if(questionNum == 2) {
        console.log("second question");
        $('#questionTitle').text("Who was naruto's first sensei?");
            $('#1').text("Iruka");
            $('#2').text("Jiraiya");
            $('#3').text("Minato");
            $('#4').text("Kakashi");
        correctID = 1;
    }
    if(questionNum == 3) {
        console.log("third question");
        $('#questionTitle').text("When did Anakin lose his right arm?");
            $('#1').text("In a fight against Obi wan");
            $('#2').text("In the first fight against count dooku");
            $('#3').text("In the second fight against count dooku");
            $('#4').text("In a fight against General Grievous");
        correctID = 2;
    }
    if(questionNum == 4) {
        console.log("fourth and final question");
        $('#questionTitle').text("Last One... What is my middle name?");
            $('#1').text("Bryan");
            $('#2').text("Myron");
            $('#3').text("Byron");
            $('#4').text("Ryan");
        correctID = 4;
    }
}





// function quiz() { 
//     console.log("first question");
//     $('#welcome-page').attr('style', 'display: none');
//     $('#question-container').attr('style', 'display: block');
//     anyOption.on('click', function(){
//         console.log("second question");
//         $('#questionTitle').text("Who was naruto's first sensei?");
//             $('#option1').text("Iruka");
//             $('#option2').text("Jiraiya");
//             $('#option3').text("Minato");
//             $('#option4').text("Kakashi");
//         $('#option1').removeClass('incorrect').addClass('correct');
//         $('#option3').removeClass('correct').addClass('incorrect');
//         $('.correct').on('click', function () { score++; refreshScore();});
//         $('.incorrect').on('click', function () { score--; refreshScore();});
//         anyOption.on('click', function(){
//             console.log("third question");
//             $('#questionTitle').text("When did Anakin lose his right arm?");
//                 $('#option1').text("In a fight against Obi wan");
//                 $('#option2').text("In the first fight against count dooku");
//                 $('#option3').text("In the second fight against count dooku");
//                 $('#option4').text("In a fight against General Grievous");
//             $('#option1').removeClass('correct').addClass('incorrect');
//             $('#option2').removeClass('incorrect').addClass('correct');
//             $('.correct').on('click', function () { score++; refreshScore(); return(finalQuestion()); });
//             $('.incorrect').on('click', function () { score--; refreshScore(); return(finalQuestion()); });
//         });
//     });
// }


// function firstQuestion() {
//     console.log("first question");
//     $('#welcome-page').attr('style', 'display: none');
//     $('#question-container').attr('style', 'display: block');
//     $('.correct').on('click', function () { refreshScore(1); secondQuestion(1); });
//     $('.incorrect').on('click', function () { refreshScore(-1); secondQuestion(-1); });
// }

// function secondQuestion(prevScore) {
//     console.log("second question");
//     $('#questionTitle').text("Who was naruto's first sensei?");
//         $('#option1').text("Iruka");
//         $('#option2').text("Jiraiya");
//         $('#option3').text("Minato");
//         $('#option4').text("Kakashi");
//     $('#option1').removeClass('incorrect').addClass('correct');
//     $('#option3').removeClass('correct').addClass('incorrect');
//     $('.correct').on('click', function () { refreshScore(prevScore+1); thirdQuestion(prevScore+1); });
//     $('.incorrect').on('click', function () { refreshScore(prevScore-1); thirdQuestion(prevScore-1); });
// }

// function thirdQuestion() {
//     refreshScore();
//     console.log("third question");
//     $('#questionTitle').text("When did Anakin lose his right arm?");
//         $('#option1').text("In a fight against Obi wan");
//         $('#option2').text("In the first fight against count dooku");
//         $('#option3').text("In the second fight against count dooku");
//         $('#option4').text("In a fight against General Grievous");
//     $('#option1').removeClass('correct').addClass('incorrect');
//     $('#option2').removeClass('incorrect').addClass('correct');
//     $('.correct').on('click', function () { score++; refreshScore(); return(finalQuestion()); });
//     $('.incorrect').on('click', function () { score--; refreshScore(); return(finalQuestion()); });
// }

// function finalQuestion() {
//     refreshScore();
//     console.log("fourth and final question");
//     $('#questionTitle').text("Last One... What is my middle name?");
//         $('#option1').text("Bryan");
//         $('#option2').text("Myron");
//         $('#option3').text("Byron");
//         $('#option4').text("Ryan");
//     $('#option2').removeClass('correct').addClass('incorrect');
//     $('#option4').removeClass('incorrect').addClass('correct');
//     $('.correct').on('click', function () { score++; return; });
//     $('.incorrect').on('click', function () { score--; return; });
// }




