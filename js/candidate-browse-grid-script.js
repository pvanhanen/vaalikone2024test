function foldPartyGrid(target, indeksi) {
    var elem = document.getElementById("".concat(target, "-party-number-").concat(indeksi));
    var elemButton = document.getElementById("fold-party-grid-".concat(target, "-").concat(indeksi));
    // console.log(elem);
    // console.log(elem.style);
    if (elem.style.height != "0px") {
        elem.style.height = "0px";
        elemButton.innerHTML = ">";
    }
    else {
        elem.style.height = "auto";
        elemButton.innerHTML = "V";
    }
    // result-${indeksi}
}
