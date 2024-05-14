import * as renderText from './render-candidate-modal-content.js';
import * as intros from './create-question-intros.js';
import * as candidateBoxLayout from './candidate-small-box-layout.js';
export function createQuestionDomBrowseModal(candidates) {
    // RESULTS Modal
    $("#results-candidate-selection-area").text("");
    $("#results-candidate-selection-area").append("<div id='top-list'></div>");
    // BROWSE modal
    $("#browse-candidate-selection-area").text("");
    $("#browse-candidate-selection-area").append("<div id='browse-list'></div>");
    var defaultFoldSymbol = ">";
    // Setup checker for party name change
    var previousParty = null;
    var partyID = 0;
    // Loop every candidate
    candidates.forEach(function (singleCandidate) {
        // Check if party name has changed
        if (previousParty != singleCandidate.party) {
            partyID++;
            var partyName = "";
            if (singleCandidate.party == "") {
                partyName = "(puolueen nimi ei tiedossa)";
            }
            else {
                partyName = singleCandidate.party;
            }
            // RESULTS MODAL
            var appendElementResult = partySeparatorLayout(partyName, "result", partyID, defaultFoldSymbol);
            $("#top-list").append(appendElementResult);
            // // BROWSE MODAL
            var appendElementBrowse = partySeparatorLayout(partyName, "browse", partyID, defaultFoldSymbol);
            $("#browse-list").append(appendElementBrowse);
            previousParty = singleCandidate.party;
        }
        // ACTIONS FOR TWO RESPECTIVE MODAL TYPES
        // RESULTS MODAL
        var resultBoxLayout = candidateBoxLayout.fetchLayoutPreResult(singleCandidate);
        $("#result-party-number-".concat(partyID)).append(resultBoxLayout);
        $("#candidate-" + singleCandidate.id).click(function () {
            createSingleCandidateModal(singleCandidate, "single-candidate-results");
            openSingleCandidateResultsModal();
        });
        // BROWSE MODAL
        var browseBoxLayout = candidateBoxLayout.fetchLayoutBrowse(singleCandidate);
        $("#browse-party-number-".concat(partyID)).append(browseBoxLayout);
        $("#candidate-browse-" + singleCandidate.id).click(function () {
            createSingleCandidateModal(singleCandidate, "single-candidate-results");
            openSingleCandidateResultsModal();
        });
    });
}
// LAYOUTS FOR PRERESULT & BROWSE
function partySeparatorLayout(partyName, target, partyID, defaultFoldSymbol) {
    var gridButtonSection = "\n    <div class=\"fold-party-grid-button\" id=\"fold-party-grid-".concat(target, "-").concat(partyID, "\" onclick=\"foldPartyGrid('").concat(target, "', ").concat(partyID, ")\">").concat(defaultFoldSymbol, "</div>\n    ");
    return "\n    <div class=\"party-separator\"><p class=\"party-name-p\">".concat(partyName, "</p>").concat(gridButtonSection, "</div><div class=\"party-candidates-grid\" id=\"").concat(target, "-party-number-").concat(partyID, "\" style=\"height: 0px\"></div>\n    ");
}
// This applies to both Browse and Results
export function createSingleCandidateModal(candidateAnswers, destination) {
    renderText.renderCandidateProfileInfo(candidateAnswers, destination);
    renderText.renderCandidateProfileAnswers(candidateAnswers, destination);
    renderText.renderCandidateProfileExplanations(candidateAnswers, destination);
    intros.createQuestionIntrosModal();
}
