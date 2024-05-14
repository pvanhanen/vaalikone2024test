export function fetchLayoutPreResult(singleCandidate) {
    return "\n    <div id=\"candidate-".concat(singleCandidate.id, "\" class=\"profile-small-box\">\n        <div class=\"profile-small-box-text-div\">\n            <h3 class=\"profile-picture-small-box-text\">").concat(singleCandidate.name, "</h3>\n            <p style=\"margin: 0px;\">").concat(singleCandidate.party, "</p>\n        </div>\n    </div>");
}
export function fetchLayoutBrowse(singleCandidate) {
    return "\n    <div id=\"candidate-browse-".concat(singleCandidate.id, "\" class=\"profile-small-box\">\n        <div class=\"profile-small-box-text-div\">\n            <h3 class=\"profile-picture-small-box-text\">").concat(singleCandidate.name, "</h3>\n        </div>\n    </div>");
}
export function fetchLayoutSort(singleCandidate, orderNumber) {
    return "\n    <div id='candidate-".concat(singleCandidate.id, "' class='profile-small-box'>\n        <div class=\"profile-small-box-text-div\">    \n            <h3 class='profile-picture-small-box-text'>").concat(orderNumber, ". ").concat(singleCandidate.name, " - ").concat(singleCandidate.resemblancePercentagePretty, "</h3>\n            <p style='margin: 0px;'>").concat(singleCandidate.party, "</p>\n            </div>\n        </div>");
}
