import * as render from './render-answer-option-numbers.js';
import * as numberOrder from './fix-question-order-numbers.js';
export function renderCandidateProfileInfo(candidateData, destination) {
    var destinationDOM = "#" + destination + "-candidate-metadata";
    $(destinationDOM).text("");
    var candidatePercentage = "";
    if (candidateData.resemblancePercentage != null) {
        var candidatePercentage_1 = "\n        <h2 style='text-align: center; margin-top: 0px'>Samaa mielt\u00E4 kanssasi".concat(candidateData.resemblancePercentagePretty, "</h2>;\n        ");
    }
    var imageFilename = getImageFilename(candidateData.party);
    var bioElementText = "\n    <h1 style='text-align: center'>".concat(candidateData.name, "</h1>\n    ").concat(candidatePercentage, "\n    <div class=\"candidate-party-logo\"><img src=\"images/party-logos/").concat(imageFilename, ".png\" /></div>\n    <p>").concat(candidateData.party, "</p>\n    <br>\n    ");
    $(destinationDOM).append(bioElementText);
}
function getImageFilename(partyname) {
    var imageFilename = String(partyname).replace(' ', '-');
    var regex = /ä/i;
    imageFilename = imageFilename.replace(regex, 'a');
    regex = /ö/i;
    imageFilename = imageFilename.replace(regex, 'o');
    regex = /å/i;
    imageFilename = imageFilename.replace(regex, 'a');
    imageFilename = imageFilename.toLocaleLowerCase();
    return imageFilename;
}
export function renderCandidateProfileAnswers(candidateData, destination) {
    var destinationDOM = "#" + destination + "-candidate-question-answers";
    $(destinationDOM).text("");
    // Add questions
    candidateData.answers.forEach(function (singleAnswers, questionNumber) {
        var htmlSnippet = "\n        <div id='modal-questionline-container-".concat((questionNumber + 1), "'>\n            <h4 class='modal-questionline'>").concat(numberOrder.fixQuestionOrderNumbers(singleAnswers.question, questionNumber), "</h4>\n        </div>\n        ");
        $(destinationDOM).append(htmlSnippet);
        $(destinationDOM).append("<div style='text-align: center;'><div class='modal-question' id='" + destination + "-modal-question-" + questionNumber + "'></div></div>");
        printAnswerOptionsInHTML(singleAnswers, destination);
        var explanationContainer = addExplanationContainer(questionNumber, destination);
        $(destinationDOM).append(explanationContainer);
    });
}
function addExplanationContainer(questionNumber, destination) {
    var destinationDOM = destination + "-candidate-question-explanation-";
    var explanationContainer = "<div id='" + destinationDOM + questionNumber + "'></div>";
    return explanationContainer;
}
function printAnswerOptionsInHTML(questionData, destination) {
    var destinationDOM = "#" + destination + "-modal-question-";
    $(destinationDOM + questionData.questionId).append("<p class='answer-aid-small'>Täysin<br>eri<br>mieltä</p>");
    questionData.answerOptions.forEach(function (singleAnswerOption, indexNumber) {
        var answerLine = '<div class="answer-line" id="' + destination + '-modal-answer-line-' + questionData.questionId + '-' + indexNumber + '"><div class="modal-radio"></div></div>';
        // questionData.answerValue range 1-5 --- indexnumber range 0-4
        if (Number((questionData.answerValue - 1)) === indexNumber) {
            // OPTION: FILLED BOX
            // answerLine = '<div class="answer-line" id="' + destination + '-modal-answer-line-' + questionData.questionId + '-' + indexNumber + '"><div class="modal-radio modal-radio-checked"></div></div>';
            // OPTION: X BOX
            answerLine = '<div class="answer-line" id="' + destination + '-modal-answer-line-' + questionData.questionId + '-' + indexNumber + '"><div class="modal-radio "><p>X</p></div></div>';
        }
        $(destinationDOM + questionData.questionId).append(answerLine);
    });
    $(destinationDOM + questionData.questionId).append("<p class='answer-aid-small'>Täysin<br>samaa<br>mieltä</p>");
    $(destinationDOM + questionData.questionId).before(render.addAnswerOptionNumbers());
}
export function renderCandidateProfileExplanations(candidateData, destination) {
    var destinationDOM = "#" + destination + "-candidate-question-explanation-";
    candidateData.explanations.forEach(function (singleExplanation, questionNumber) {
        // console.log( singleExplanation.explanationText );
        if (singleExplanation.explanationText.length > 0) {
            var profileImage = "";
            var explanation = "\n            <div class='modal-explanation'>".concat(profileImage, "\n                <p class=\"modal-explanation-text\"><span class=\"text-bold\">").concat(candidateData.name, ":</span> ").concat(singleExplanation.explanationText, "</p>\n            </div>\n            ");
            $(destinationDOM + questionNumber).text("");
            $(destinationDOM + questionNumber).append(explanation);
        }
    });
}
