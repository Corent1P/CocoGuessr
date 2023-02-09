console.log("c'est ok");
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    if (url.includes("geoguessr") == false) {
        document.getElementById("img").src = 'assets/NoGeo.png';
    } else if (url.includes("geoguessr") == true && url.includes("game") == false) {
        document.getElementById("img").src = 'assets/PlayNow.png';
    } else {
        document.getElementById("img").style.visibility = 'hidden';
    }
});

