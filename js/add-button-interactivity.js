export function createHTMLRadioButtonInteractivity(questionsAmount, answerOptionsAmount, userAnswers, checkIfAllQuestionsAnswered) {
    // For every question
    for (var i = 0; i < questionsAmount; i++) {
        // For every answerOption in it
        for (var x = 0; x < answerOptionsAmount; x++) {
            addHTMLEventListeners(i, x, userAnswers, checkIfAllQuestionsAnswered);
        }
        ;
    }
    ;
}
function addHTMLEventListeners(questionIndex, answerIndex, userAnswers, checkIfAllQuestionsAnswered) {
    var elem = document.getElementById("answer-line-" + questionIndex + "-" + answerIndex);
    function eventListenerFunction() {
        setUserAnswer(questionIndex, answerIndex, userAnswers, checkIfAllQuestionsAnswered);
    }
    elem.addEventListener("click", eventListenerFunction);
}
function setUserAnswer(questionNumber, value, userAnswers, checkIfAllQuestionsAnswered) {
    userAnswers[questionNumber] = {
        questionNumber: questionNumber,
        answerValue: (value + 1) // GOOGLE FORMS USES SCALE 1-5, JS BY DEFAULT 0-4
    };
    checkIfAllQuestionsAnswered();
}
