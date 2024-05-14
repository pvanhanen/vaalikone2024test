import * as sort from './calculate-similarity.js';
export function createDataWrapper() {
    var returnData = {
        answerRawData: null,
        candidateMetadata: [],
        questions: null,
        questionsPurged: null,
        minmaxDifferenceGaps: null,
        answerOptionTexts: [
            "täysin eri mieltä",
            "jokseenkin eri mieltä",
            "ei mielipidettä/en osaa sanoa",
            "jokseenkin samaa mieltä",
            "täysin samaa mieltä"
        ],
        candidates: [],
        partySortedCandidates: [],
        user: {
            answers: []
        },
        UI: {
            showResultsButtonEnabled: true
        },
        checkIfResultsButtonPressed: function () {
            if (returnData.UI.showResultsButtonEnabled) {
                var elem = document.getElementById("show-results-button");
                $("#show-results-button").css("cursor", "pointer");
                $("#show-results-button").text("NÄYTÄ TULOKSET");
                // Hide Scroll To Top button
                // $("#scroll-to-top-button-container").hide();
                elem.addEventListener("click", function () {
                    // Sort candidates & Show results
                    sort.sortCandidates(returnData.candidates, returnData.user.answers, returnData.minmaxDifferenceGaps, returnData.questions);
                });
            }
        },
        checkIfAllQuestionsAnswered: function () {
            if (checkIfAllQuestionsAnswered(returnData.user.answers, returnData.questions.length)) {
                returnData.checkIfResultsButtonPressed();
            }
        }
    };
    return returnData;
}
function checkIfAllQuestionsAnswered(userAnswers, questionsAmount) {
    // Include Method checks if questions array has any blanks. Otherwise user answering only to the last question sets the array length to match, but array will have some undefined entries.
    if (userAnswers.includes(undefined) == false && userAnswers.length == questionsAmount) {
        return true;
    }
    else {
        return false;
    }
}
