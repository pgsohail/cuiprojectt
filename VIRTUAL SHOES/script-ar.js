function randomColour(gray = false) {
    randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    r = randomBetween(18, 97);
    if (gray) {
        g = b = r
    } else {
        g = randomBetween(31, 177);
        b = randomBetween(236, 249);
    }
    rgb = `rgb(${r},${g},${b})`;
    return rgb
}

function backgrounds() {
    var div = document.getElementById('container');
    var divs = div.getElementsByTagName('div');
    for (var i = 1; i < divs.length; i += 1) {
        if ((!divs[i].id) || (divs[i].id.indexOf("content") === -1)) {
            divs[i].style.backgroundColor = randomColour(false);
        }
    }
}

function show(id){
    document.getElementById(id).style.display = "block"
}

function hide(id){
    document.getElementById(id).style.display = "none"
}

backgrounds(0)

window.addEventListener('touchstart', {});

var wv = document.getElementsByClassName("viewer_iframe");
wv[0].addEventListener("touchstart", function(e) {
    hide("m1")
}, true);
wv[1].addEventListener("touchstart", function(e) {
    hide("m3")
}, true);
wv[2].addEventListener("touchstart", function(e) {
    hide("m2")
}, true);