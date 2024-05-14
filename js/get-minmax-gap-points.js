export function getMinMaxDifferenceGaps(questionsLength, optionsAmount) {
    var maxDifferenceGap = (questionsLength * (optionsAmount - 1)); // TO CALCULATE DISTANCE BETWEEN
    var minDifferenceGap = 0;
    return {
        maxDifferenceGap: maxDifferenceGap,
        minDifferenceGap: minDifferenceGap
    };
}
