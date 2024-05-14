export function populateUserAnswersModal(userAnswers, destination) {
    var destinationDOM = "#" + destination + "-modal-answer-line-";
    userAnswers.forEach(function (singleAnswer) {
        var answerValue = (singleAnswer.answerValue - 1);
        $(destinationDOM + singleAnswer.questionNumber + "-" + answerValue).addClass("modal-radio-user-checked");
    });
}
