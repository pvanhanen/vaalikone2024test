var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var metadataFields = [
    "Timestamp",
    "Email Address",
    "Email address",
    "name"
];
var explanationFieldTextStrings = [
    "Voitte halutessanne perustella"
];
export function getCandidateAnswersFromRawData(rawData, answerOptionTexts) {
    return __awaiter(this, void 0, void 0, function () {
        var returnPackage;
        return __generator(this, function (_a) {
            returnPackage = [];
            returnPackage = checkRows(rawData, answerOptionTexts);
            return [2 /*return*/, returnPackage];
        });
    });
}
function checkRows(rawData, answerOptionTexts) {
    // montako riviä on tietueessa?
    var rows = Object.values(rawData);
    var returnPackage = [];
    rawData.forEach(function (row, rowNumber) {
        returnPackage.push(checkColumns(row, answerOptionTexts, rowNumber));
    });
    return returnPackage;
}
function checkColumns(row, answerOptionTexts, rowNumber) {
    // montako saraketta on rivillä?
    var columns = Object.values(row);
    var returnPackage = initCandidatePackage(columns, rowNumber);
    returnPackage = extractAnswersExplanations(columns, row, returnPackage, answerOptionTexts);
    return returnPackage;
}
function initCandidatePackage(columns, rowNumber) {
    var returnPackage = {
        id: rowNumber,
        name: fetchName(columns),
        bioText: null,
        websiteURL: null,
        profilePictureSrc: null,
        age: null,
        party: null,
        rawData: [],
        answers: [],
        explanations: [],
        resemblanceValue: null,
        resemblancePercentage: null,
        resemblancePercentagePretty: null
    };
    return returnPackage;
}
function extractAnswersExplanations(columns, row, returnPackage, answerOptionTexts) {
    // käy läpi jokaisen rivin sarake
    var questionId = 0;
    var explanationId = 0;
    columns.forEach(function (column, columnNumber) {
        returnPackage.rawData.push(column);
        var columnKey = Object.keys(row)[columnNumber];
        if (!isMetadataField(columnKey)) {
            if (!isExplanationField(columnKey)) { // LISÄÄ JOS EI OLE SELITYS
                returnPackage.answers.push({
                    questionId: questionId,
                    question: Object.keys(row)[columnNumber],
                    answerValue: column,
                    answerOptions: answerOptionTexts
                });
                questionId++;
            }
            if (isExplanationField(columnKey)) { // LISÄÄ JOS ON SELITYS
                returnPackage.explanations.push({
                    explanationId: explanationId,
                    question: Object.keys(row)[columnNumber],
                    explanationText: column
                });
                explanationId++;
            }
        }
    });
    return returnPackage;
}
function fetchName(data) {
    // Name is hard-coded in the array field 0 ( question-answers start from 1 onwards )
    return data[0];
}
function isMetadataField(fieldKey) {
    var hitpoints = 0;
    metadataFields.forEach(function (metadataName) {
        if (fieldKey === metadataName) {
            hitpoints++;
        }
    });
    if (hitpoints > 0) {
        return true;
    }
    else {
        return false;
    }
}
function isExplanationField(fieldKey) {
    var hitpoints = 0;
    explanationFieldTextStrings.forEach(function (explanationFieldName) {
        if (fieldKey.search(explanationFieldName) > -1) {
            hitpoints++;
        }
    });
    if (hitpoints > 0) {
        return true;
    }
    else {
        return false;
    }
}
