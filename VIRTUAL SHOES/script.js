function randomColour(gray = false) {
    randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    r = randomBetween(0, 055);
    if (gray) {
        g = b = r
    } else {
        g = randomBetween(0, 155);
        b = randomBetween(200, 255);
    }
    rgb = `rgb(${r},${g},${b})`;
    return rgb
}

function backgrounds(j=1) {
    var div = document.getElementById('container');
    var divs = div.getElementsByTagName('div');
    for (var i = j; i < divs.length; i += 1) {
        if ((!divs[i].id) || (divs[i].id.indexOf("content") === -1)) {
            divs[i].style.backgroundColor = randomColour(true);
        }
    }
}

function show(id){
    document.getElementById(id).style.display = "block"
}

function hide(id){
    document.getElementById(id).style.display = "none"
}



