$("#scroll-to-top-button-container").click(function () {
    window.scrollTo(0, 0);
});
$("#scroll-to-top-button-container").hide();
function checkScrollButtonToggle() {
    if (window.scrollY > 1000) {
        $("#scroll-to-top-button-container").show();
    }
    else {
        $("#scroll-to-top-button-container").hide();
    }
}
