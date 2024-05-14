// TWITTER SHARER
export function tweet(candidateName) {
    var text = "Ulkopolitistin vaalikoneen mukaan minulle parhain ehdokas on " + candidateName + ". Löydä oma ulkopoliittinen ehdokkaasi osoitteesta https://www.ulkopolitist.fi/vaalikone/";
    document.getElementById("twitter-sharer").href = "https://twitter.com/intent/tweet?text=" + text;
}
