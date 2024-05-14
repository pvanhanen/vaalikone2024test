import * as questionModal from './create-question-dom-modal.js';
import * as userAnswerModal from './populate-user-answers-modal.js';
import * as renderCandidateBox from './render-candidate-selection-boxes.js';
// JÄRJESTÄ VASTAAVUUDEN PERUSTEELLA
export function sortCandidates(candidates, userAnswers) {
    // Do the actual sorting
    sortByResemblanceValue(candidates);
    updateUI();
    // Render small selection boxes
    renderCandidateBox.renderCandidateBoxes(candidates, userAnswers);
    // Render candidate data to results modal
    questionModal.createSingleCandidateModal(candidates[0], "results");
    // Render user answers data to results modal
    userAnswerModal.populateUserAnswersModal(userAnswers, "results");
    // Open results to Results Modal
    openResultsModal();
    // Update Tweet text
    // $("#twitter-sharer").show();
    // tweet.tweet ( candidates[0].name );
    // More candidates button functions
    $("#show-more-candidates-button").show();
    $(".hidden-results-candidate-box").hide();
}
function sortByResemblanceValue(candidates) {
    candidates.sort(function (a, b) {
        return a.resemblanceValue - b.resemblanceValue;
    });
}
function updateUI() {
    // const resultsButton = document.getElementById("show-results-button");
    // Scroll to top
    // $("body").scrollTop(0);
    // Hide Näytä Tulokset button
    // resultsButton.style.display = "none";
    // Change the button's text for later UPDATE purpose
    // resultsButton.innerHTML = "PÄIVITÄ TULOKSET";
    // $("#start-button-button").text("MUUTA VASTAUKSIASI");
    // Hide top instruction area
    // document.getElementById("instruction-area").style.display = "none";
    // Shrink the Hero-Block
    // $("#hero-block").css( "min-height", "unset" );
    // Change scroll instruction text for better UX experience
    // $("#scroll-for-answers").text( "RULLAAMALLA ALASPÄIN VOIT MUUTTAA VASTAUKSIASI. MUISTA SEN JÄLKEEN PAINAA PÄIVITÄ TULOKSET-NAPPIA." );
    // Interchange Browse for Show Results (essentially offer the same tools for user)
    // $("#results-button").show();
    // $("#browse-button").hide();
    // Hide hero image for better UX experience
    // $("#hero-image").hide();
    // Purge & empty modal header for re-organised candidate list
    $("#results-candidate-header").text("");
    $("#results-candidate-selection-area").text("");
}
