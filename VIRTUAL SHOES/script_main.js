backgrounds(1);

window.addEventListener('touchstart', {});

var wv = document.getElementsByClassName("viewer_iframe");
wv[0].addEventListener("touchstart", function(e) {
    hide("m1")
}, true);
wv[1].addEventListener("touchstart", function(e) {
    hide("m3")
}, true);

var tempFrame = 1;
function gotoanim(id, toFrame, v){
    if (toFrame != tempFrame) {
        newFrame = (toFrame > tempFrame) ? tempFrame++ : tempFrame--;
        id.src = "anim/"+v+newFrame+".jpg";
        gotoanim(id, toFrame, v);
    } else {
        id.src = "anim/"+v+toFrame+".jpg";
    }
}
function animate(anim, x, width, cnt, v){
    xp = Math.round(x*100/width);
    i = Math.round(xp*cnt/100);
    i = i == 0 ? 1 : i > cnt ? cnt : i;
    gotoanim(anim, i, v, 1)
}
// dress anim
var dresses = document.getElementById("dresses"); 
var dress = document.getElementById("dress");
dresses.onmousemove = function(e) { 
    var x = e.pageX - this.offsetLeft;
    tempFrame = 1;
    animate(dress, x, dresses.offsetWidth, 3, "b")
}
dresses.addEventListener("touchmove", function(e) {
    var touch = e.touches[0];
    var x = touch.clientX;
    tempFrame = 1;
    animate(dress, x, dresses.offsetWidth, 3, "b");
});