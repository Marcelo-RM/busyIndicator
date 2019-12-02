/* DESENVOLVIDO POR: MARCELO MONTALVAO */
// github.com/marcelo-rm

// METHODS
/**
 * 
 * @param {Number} delay seconds to wait
 */
function open(delay, color, type){
    var type = type ? type : "busy";
    var time = delay ? _convetTime(delay) : 0;

    setTimeout(() => {
        var busy = document.getElementById(type);
        
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
        } else {
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainer);
            }
            busyContainer.children[0].style.borderColor = color;
            busyContainer.children[0].style.borderRightColor = 'transparent';
        }
    }, time);
}

function close(){
    var itens = document.getElementsByClassName("busy");
    itens = Array.from(itens);

    itens.forEach(e => {
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
var keyFrames = '\
@-webkit-keyframes busy {\
    100% {\
        transform: rotateZ(360deg);\
    }\
} \
@-moz-keyframes busy {\
    100% {\
        transform: rotateZ(360deg);\
    }\
} \
@keyframes pop {\
    0% {\
        width: 10px;\
        height: 10px;\
        opacity: 1; \
    }\
    50% {\
        width: 25px;\
        height: 25px;\
        opacity: 0.3;\
    }\
    100% {\
        width: 10px;\
        height: 10px;\
        opacity: 1;\
    }\
}';
style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);

var busyStyle = `
    z-index: 1000;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 5rem;
    color: blue;
`;
var iconStyle = `
    width: 80px;
    height: 80px;
    animation: busy 1.5s linear infinite;
    margin: 0;
    border: 6px solid #1d262d;
    border-right-color: transparent;
    border-radius: 100%;
    vertical-align: middle;
`;

//  STYLES PARA BUSY DE CIRCULOS
var busyRoundedStyle = "\
.busy { \
    z-index: 1000; \
    position: fixed; \
    left: 0px; \
    top: 0px; \
    margin: 0px; \
    width: 100vw; \
    height: 100vh; \
    background-color: rgba(0, 0, 0, 0.2);\
    font-size: 5rem;\
    display: flex;\
    justify-content: center;\
    align-items: center;\
}\
.bubbles01 {\
    background-color: rgb(76, 0, 130);\
    margin-left: -30px;\
    position: absolute;\
    border-radius: 50%;\
    animation-name: pop;\
    animation-duration: 1.5s;\
    animation-delay: 0.1s;\
    animation-iteration-count: infinite;\
    animation-timing-function: ease-out;\
}\
.bubbles02 {\
    background-color: rgb(76, 0, 130);\
    position: absolute;\
    border-radius: 50%;\
    animation-name: pop;\
    animation-duration: 1.5s;\
    animation-delay: 0.4s;\
    animation-iteration-count: infinite;\
    animation-timing-function: ease-out;\
}\
.bubbles03 {\
    margin-left: 30px;\
    background-color: rgb(76, 0, 130);\
    position: absolute;\
    border-radius: 50%;\
    animation-name: pop;\
    animation-duration: 1.5s;\
    animation-delay: 0.6s;\
    animation-iteration-count: infinite;\
    animation-timing-function: ease-out;\
}";

var styleBubble = document.createElement('style');
styleBubble.type = 'text/css';
styleBubble.innerHTML = busyRoundedStyle;
document.getElementsByTagName('head')[0].appendChild(styleBubble);

//<i class="fas fa-circle-notch"></i>
//HTML OBJECTS
var icon = document.createElement("i");
icon.style = iconStyle;

var busyContainer = document.createElement("div");
busyContainer.appendChild(icon);

busyContainer.id = "busy";
busyContainer.classList.add("busy");

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

//MASTER OBJECT
var busyIndicator = {
    open: open,
    close: close
}