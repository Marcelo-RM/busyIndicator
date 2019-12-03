/* DESENVOLVIDO POR: MARCELO MONTALVAO */
// github.com/marcelo-rm

// METHODS
/**
 * 
 * @param {Number} delay seconds to wait
 */
function open(delay, color, type){
    var type = type ? type : "busy";
        type = type == "circle" ? "busy" : type;
    var time = delay ? _convetTime(delay) : 0;
    var color = color ? color : 'black';

    setTimeout(function() {
        var busy = document.getElementById(type);
        
        if(type == "busy") {
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainer);
            }
            busyContainer.children[0].style.borderColor = color;
            busyContainer.children[0].style.borderRightColor = 'transparent';
        }
        if(type == "bubble"){
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainerBubble);
                //document.getElementsByTagName("body")[0].append(busyContainer);
            }
            document.getElementsByClassName("bubbles01")[0].style.backgroundColor = color;
            document.getElementsByClassName("bubbles02")[0].style.backgroundColor = color;
            document.getElementsByClassName("bubbles03")[0].style.backgroundColor = color;
        } 
        if(type == "bars") {
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainerBar);
            }
            busyContainerBar.children[0].style.backgroundColor = color;
            busyContainerBar.children[1].style.backgroundColor = color;
            busyContainerBar.children[2].style.backgroundColor = color;
        }
    }, time);
}

function close(){
    var itens = document.getElementsByClassName("busy");
    itens = Array.from(itens);

    itens.forEach(function(e) {
        e.style.display = "none";
    });
}

function _convetTime(nTime){
    nTime = nTime ? nTime.match(/\d/g).join("") : 0;
    return (nTime * 1000);
}

//STYLES
var style = document.createElement('style');
style.type = 'text/css';
var keyFrames = "" +
"@-webkit-keyframes busy {" +
    "100% {" +
        "transform: rotateZ(360deg);" +
    "}" +
"} " +
"@-moz-keyframes busy {" +
    "100% {" +
        "transform: rotateZ(360deg);" +
    "}" +
"} " +
"@-webkit-keyframes bubble {" +
    "0% {" +
        "width: 10px;" +
        "height: 10px;" +
        "opacity: 1; " +
    "}" +
    "50% {" +
        "width: 25px;" +
        "height: 25px;" +
        "opacity: 0.3;" +
    "}" +
    "100% {" +
        "width: 10px;" +
        "height: 10px;" +
        "opacity: 1;" +
    "}" +
"} " +
"@-moz-keyframes bubble {" +
    "0% {" +
        "width: 10px;" +
        "height: 10px;" +
        "opacity: 1; " +
    "}" +
    "50% {" +
        "width: 25px;" +
        "height: 25px;" +
        "opacity: 0.3;" +
    "}" +
    "100% {" +
        "width: 10px;" +
        "height: 10px;" +
        "opacity: 1;" +
    "}" +
"}" +
"@-webkit-keyframes barResize {" +
    "0% {" +
        "height: 5px;" +
    "}" +
    "50% {" +
        "height: 30px;" +
    "}" +
    "100% {" +
        "height: 5px;" +
    "}" +
"} " +
"@-moz-keyframes barResize {" +
    "0% {" +
        "height: 5px;" +
    "}" +
    "50% {" +
        "height: 30px;" +
    "}" +
    "100% {" +
        "height: 5px;" +
    "}" +
"}";
style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);

var busyStyle = "" +
    "z-index: 1000;" +
    "display: flex;" +
    "justify-content: center;" +
    "text-align: center;" +
    "align-items: center;" +
    "position: fixed;" +
    "left: 0px;" +
    "top: 0px;" +
    "margin: 0px;" +
    "width: 100vw;" +
    "height: 100vh;" +
    "background-color: rgba(0, 0, 0, 0.2);" +
    "font-size: 5rem;" +
    "color: blue;"
;
var iconStyle = "" +
    "width: 60px;" +
    "height: 60px;" +
    "animation: busy 1.5s linear infinite;" +
    "margin: 0;" +
    "border: 6px solid #1d262d;" +
    "border-right-color: transparent;" +
    "border-radius: 100%;" +
    "vertical-align: middle;"
;

//  STYLES PARA TODOS OS INDICADORES
var busyStyle = "" +
".busy { " +
    "z-index: 1000; " +
    "position: fixed; " +
    "left: 0px; " +
    "top: 0px; " +
    "margin: 0px; " +
    "width: 100vw; " +
    "height: 100vh; " +
    "background-color: rgba(0, 0, 0, 0.2);" +
    "font-size: 5rem;" +
    "display: flex;" +
    "justify-content: center;" +
    "align-items: center;" +
"}" +
".bubbles01 {" +
    "background-color: black;" +
    "margin-left: -25px;" +
    "position: absolute;" +
    "border-radius: 50%;" +
    "animation-name: bubble;" +
    "animation-duration: 1.5s;" +
    "animation-delay: 0.1s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}" +
".bubbles02 {" +
    "background-color: black;" +
    "position: absolute;" +
    "border-radius: 50%;" +
    "animation-name: bubble;" +
    "animation-duration: 1.5s;" +
    "animation-delay: 0.4s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}" +
".bubbles03 {" +
    "margin-left: 25px;" +
    "background-color: black;" +
    "position: absolute;" +
    "border-radius: 50%;" +
    "animation-name: bubble;" +
    "animation-duration: 1.5s;" +
    "animation-delay: 0.6s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}" +
".bars {" +
    "width: 10px;" +
    "height: 5px;" +
    "margin: 2px;" +
    "background-color: orangered;" +
    "animation-name: barResize;" +
"}" +
"#bar001 {" +
    "animation-duration: 1s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}" +
"#bar002 {" +
    "animation-duration: 1s;" +
    "animation-delay: 0.3s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}" +
"#bar003 {" +
    "animation-duration: 1s;" +
    "animation-delay: 0.5s;" +
    "animation-iteration-count: infinite;" +
    "animation-timing-function: ease-out;" +
"}";

var styleBubble = document.createElement('style');
styleBubble.type = 'text/css';
styleBubble.innerHTML = busyStyle;
document.getElementsByTagName('head')[0].appendChild(styleBubble);

/*
############################################################
#      BUSY CIRCLE INDICATOR                               #
############################################################
*/
var icon = document.createElement("i");
icon.style = iconStyle;

var busyContainer = document.createElement("div");
busyContainer.appendChild(icon);

busyContainer.id = "busy";
busyContainer.classList.add("busy");

/*
############################################################
#      BUSY BUBBLE INDICATOR                               #
############################################################
*/
var busyContainerBubble = document.createElement("div");
busyContainerBubble.id = "bubble";
busyContainerBubble.classList.add("busy");

var bubbles01 = document.createElement("div");
bubbles01.classList.add("bubbles01");
busyContainerBubble.appendChild(bubbles01);

var bubbles02 = document.createElement("div");
bubbles02.classList.add("bubbles02");
busyContainerBubble.appendChild(bubbles02);

var bubbles03 = document.createElement("div");
bubbles03.classList.add("bubbles03");
busyContainerBubble.appendChild(bubbles03);

/*
############################################################
#      BUSY BARS INDICATOR                                 #
############################################################
*/
var busyContainerBar = document.createElement("div");
busyContainerBar.id = "bars";
busyContainerBar.classList.add("busy");

var bar01 = document.createElement("div");
bar01.id = "bar001"
bar01.classList.add("bars");
busyContainerBar.appendChild(bar01);

var bar02 = document.createElement("div");
bar02.id = "bar002"
bar02.classList.add("bars");
busyContainerBar.appendChild(bar02);

var bar03 = document.createElement("div");
bar03.id = "bar003"
bar03.classList.add("bars");
busyContainerBar.appendChild(bar03);

/*
############################################################
#      MASTER OBJECT TO EXPORTS                            #
############################################################
*/
var busyIndicator = {
    open: open,
    close: close
}