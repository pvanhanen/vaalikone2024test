import * as questionModal from './create-question-dom-modal.js';
import * as userAnswerModal from './populate-user-answers-modal.js';
import * as candidateBoxLayout from './candidate-small-box-layout.js';
export function renderCandidateBoxes(candidates, userAnswers) {
    $("#results-candidate-header").append("<h3 class='results-candidate-header-text'>Vastaustesi perusteella sinulle sopivimmat ehdokkaat</h3>");
    // HANDLER FOR ORDER NUMBER -------
    var orderNumber = 1;
    var previousResemblancePecentage = 100;
    var sameScoreCandidatesAmount = 1;
    // ---------------------
    candidates.forEach(function (singleCandidate, indexNumber) {
        // HANDLER FOR ORDER NUMBER -------
        // IF THE FIRST CANDIDATE IN A LIST (DISREGARD SAME PREVIOUS-RESEMBLANCE VALUE EVENT)
        if (indexNumber === 0) {
            previousResemblancePecentage = singleCandidate.resemblancePercentage;
            sameScoreCandidatesAmount = 1;
        }
        // IF SMALLER THAN PREVIOUS
        else if (previousResemblancePecentage > singleCandidate.resemblancePercentage) {
            orderNumber = orderNumber + sameScoreCandidatesAmount;
            previousResemblancePecentage = singleCandidate.resemblancePercentage;
            sameScoreCandidatesAmount = 1;
        }
        // IF THE SAME THAN PREVIOUS
        else {
            null;
        }
        // ---------------------
        $("#results-candidate-selection-area").append("<div id='top-list'></div>");
        renderSingleCandidateBox(singleCandidate, userAnswers, orderNumber);
    });
}
function renderSingleCandidateBox(singleCandidate, userAnswers, orderNumber) {
    var element = candidateBoxLayout.fetchLayoutSort(singleCandidate, orderNumber);
    if (orderNumber > 3) {
        element = "<div class=\"hidden-results-candidate-box\">".concat(element, "</div>");
    }
    $("#top-list").append(element);
    $("#candidate-" + singleCandidate.id).click(function () {
        questionModal.createSingleCandidateModal(singleCandidate, "single-candidate-results");
        userAnswerModal.populateUserAnswersModal(userAnswers, "single-candidate-results");
        openSingleCandidateResultsModal();
    });
}
