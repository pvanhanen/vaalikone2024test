import * as sort from './sort-candidates.js';
export function sortCandidates(candidates, userAnswers, gapValues, questions) {
    // Check every candidates' answer list
    checkEveryCandidateForResemblance(candidates, userAnswers, gapValues);
    // Sort candidates according to their resemblance points
    sort.sortCandidates(candidates, userAnswers);
}
function checkEveryCandidateForResemblance(candidates, userAnswers, gapValues) {
    // Check every candidate for their similaritypoints
    candidates.forEach(function (singleCandidate) {
        singleCandidate.resemblanceValue = checkEveryAnswerForPoints(singleCandidate.answers, userAnswers);
        // Calculate their resemblance percentages
        singleCandidate.resemblancePercentage = calculateMatchPercentage(singleCandidate.resemblanceValue, gapValues);
        singleCandidate.resemblancePercentagePretty = prettifyPercentage(singleCandidate.resemblancePercentage);
    });
}
function checkEveryAnswerForPoints(singleCandidateAnswers, userAnswers) {
    var resemblancePoints = 0;
    // Check every answers for their similaritypoints
    singleCandidateAnswers.forEach(function (singleAnswer, index) {
        // FAILSAFE: Ensure it is a number
        singleAnswer.answerValue = Number(singleAnswer.answerValue);
        // Calculate resemblance gap - cumulatively
        resemblancePoints += Math.abs(singleAnswer.answerValue - userAnswers[index].answerValue);
    });
    return resemblancePoints;
}
function calculateMatchPercentage(distancepoints, gapValues) {
    var returnValue = (100 / gapValues.maxDifferenceGap * (gapValues.maxDifferenceGap - distancepoints));
    return returnValue;
}
function prettifyPercentage(value) {
    return Math.round(value) + " %";
}
