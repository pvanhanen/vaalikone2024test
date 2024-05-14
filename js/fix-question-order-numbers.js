export function fixQuestionOrderNumbers(questionText, orderNumber) {
    // console.log( questionText.split(".")[0] );
    // const questionTextParts = ;
    var questionTextBeforeComma = questionText.split(".")[0];
    var questionTextAfterComma = questionText.slice(questionTextBeforeComma.length);
    // console.log( questionTextBeforeComma, questionTextAfterComma, orderNumber );    
    return (orderNumber + 1) + questionTextAfterComma;
}
