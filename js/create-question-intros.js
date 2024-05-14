import * as answerline from './create-answer-aids.js';
import * as introTexts from './intro-texts.js';
export function createQuestionIntros() {
    var introPackage = introTexts.introTexts();
    introPackage.forEach(function (singleIntro) {
        var introElement = "\n        <hr class=\"section-divider\">\n        <h2 class='question-section-title'>".concat(singleIntro.sectionTitle, "</h2>\n        <p class='question-section-explanation'>").concat(singleIntro.introText, "</p>\n        ");
        $("#question-main-container-" + singleIntro.questionNumber).prepend(introElement);
    });
}
export function createQuestionIntrosModal() {
    var introPackage = introTexts.introTexts();
    introPackage.forEach(function (singleIntro) {
        $("#modal-questionline-container-" + singleIntro.questionNumber).prepend(answerline.identifyWhoseAnswerAids());
        var introElement = "\n        <hr class=\"section-divider\">\n        <h2 class='question-section-title'>".concat(singleIntro.sectionTitle, "</h2>\n        <p class='question-section-explanation'>").concat(singleIntro.introText, "</p>\n        ");
        $("#modal-questionline-container-" + singleIntro.questionNumber).prepend(introElement);
    });
}
