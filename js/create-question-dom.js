import * as render from './render-answer-option-numbers.js';
import * as numberOrder from './fix-question-order-numbers.js';
export function createQuestionDOM(questions) {
    questions.forEach(function (singleQuestion, indexNumber) {
        printQuestionsInHTML(singleQuestion.question, indexNumber);
        printAnswerOptionsInHTML(singleQuestion);
    });
}
function printQuestionsInHTML(question, questionNumber) {
    var questionTextOutput = question.replace("(3 - en osaa sanoa)", "");
    // ADD QUESTION ELEMENT
    // QUESTION NUMBER + 1, CAUSE OTHERWISE WILL START FORM 0
    var questionElement = "\n    <div id='question-main-container-".concat((questionNumber + 1), "'>\n        <h3 class='question-line'>").concat(numberOrder.fixQuestionOrderNumbers(question, questionNumber), "</h3>\n    </div>\n    ");
    $("#question-area").append(questionElement);
    // ADD ANSWER OPTIONS ELEMENT
    var answerOptionsElement = "\n    <div class=\"answer-container\" id=\"answer-container-".concat(questionNumber, "\"></div>\n    ");
    $("#question-area").append(answerOptionsElement);
    // ADD EXPLANATION ELEMENT
    var explanationElement = "\n    <div class=\"explanation-container\" id=\"explanation-container-".concat(questionNumber, "\"></div>\n    ");
    $("#question-area").append(explanationElement);
}
function printAnswerOptionsInHTML(questionData) {
    $("#answer-container-" + questionData.questionId).append("<p class='answer-aid-small'>Täysin<br>eri<br>mieltä</p>");
    questionData.answerOptions.forEach(function (singleAnswerOption, indexNumber) {
        var answerLine = "\n        <div class=\"answer-line\" id=\"answer-line-".concat(questionData.questionId, "-").concat(indexNumber, "\">\n            <input type=\"radio\" id=\"input-line-").concat(questionData.questionId, "-").concat(indexNumber, "\" name=\"question").concat(questionData.questionId, "\" value=\"").concat(indexNumber, "\">\n        </div>\n        ");
        $("#answer-container-" + questionData.questionId).append(answerLine);
    });
    $("#answer-container-" + questionData.questionId).append("<p class='answer-aid-small'>Täysin<br>samaa<br>mieltä</p>");
    $("#answer-container-" + questionData.questionId).before(render.addAnswerOptionNumbers());
}
