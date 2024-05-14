export function fetchQuestions(list) {
    var returnPackage = [];
    list.forEach(function (singleQuestion) {
        returnPackage.push({
            questionId: singleQuestion.questionId,
            question: singleQuestion.question,
            answerOptions: singleQuestion.answerOptions
        });
    });
    return returnPackage;
}
