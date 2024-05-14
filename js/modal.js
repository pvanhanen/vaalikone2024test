function onloadEvent() {
    document.getElementById('about-modal').style.display = "none";
    document.getElementById('results-modal').style.display = "none";
    document.getElementById('browse-modal').style.display = "none";
    document.getElementById('single-candidate-results-modal').style.display = "none";
    document.getElementById('modal-wrapper').style.display = "none";
}
function openAboutModal() {
    showModalWrapper();
    document.getElementById('about-modal').style.display = "block";
    document.getElementById('results-modal').style.display = "none";
    document.getElementById('browse-modal').style.display = "none";
    document.getElementById('single-candidate-results-modal').style.display = "none";
}
function closeAboutModal() {
    hideModalWrapper();
    document.getElementById('about-modal').style.display = "none";
}
function openResultsModal() {
    showModalWrapper();
    document.getElementById('results-modal').style.display = "block";
    document.getElementById('about-modal').style.display = "none";
    document.getElementById('browse-modal').style.display = "none";
}
function closeResultsModal() {
    hideModalWrapper();
    document.getElementById('results-modal').style.display = "none";
}
function openBrowseModal() {
    showModalWrapper();
    document.getElementById('results-modal').style.display = "none";
    document.getElementById('about-modal').style.display = "none";
    document.getElementById('browse-modal').style.display = "block";
}
function closeBrowseModal() {
    hideModalWrapper();
    document.getElementById('browse-modal').style.display = "none";
}
function openSingleCandidateResultsModal() {
    showModalWrapper();
    document.getElementById('single-candidate-results-modal').style.display = "block";
    document.getElementById('about-modal').style.display = "none";
}
function closeSingleCandidateResultsModal() {
    document.getElementById('single-candidate-results-modal').style.display = "none";
    $("#modal-wrapper").scrollTop(0);
}
function hideModalWrapper() {
    document.getElementById('modal-wrapper').style.display = "none";
    document.getElementById('body-element').style.overflow = "auto";
    document.getElementById('main-content').style.filter = "unset";
    document.getElementById('main-content').style.zIndex = "100";
    document.getElementById('modal-wrapper').style.zIndex = "0";
}
function showModalWrapper() {
    $("#disable-main-content-ui-functions-layer").click(function () {
        closeSingleCandidateResultsModal();
        closeResultsModal();
        closeAboutModal();
    });
    $("#scroll-to-top-button-container").hide();
    document.getElementById('modal-wrapper').style.display = "block";
    document.getElementById('body-element').style.overflow = "hidden";
    document.getElementById('main-content').style.filter = "blur(2px)";
    $("#modal-wrapper").scrollTop(0);
    document.getElementById('main-content').style.zIndex = "0";
    document.getElementById('modal-wrapper').style.zIndex = "100";
}
