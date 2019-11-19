/* DESENVOLVIDO POR: MARCELO MONTALVAO */
// github.com/marcelo-rm

// METHODS
/**
 * 
 * @param {Number} delay seconds to wait
 */
function open(delay){
    var time = delay ? _convetTime(delay) : 0;
    setTimeout(() => {
        var busy = document.getElementById("busy");
        if(busy){
            busy.style.display = 'flex';
        } else {
            document.getElementsByTagName("body")[0].append(busyContainer);
        }
    }, time);
}

function close(){
    document.getElementById("busy").style.display = "none";
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
}\
@-moz-keyframes busy {\
    100% {\
        transform: rotateZ(360deg);\
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
    width: 100px;
    height: 100px;
    animation: busy 1.5s linear infinite;
    margin: 0;
    border: 6px solid #1d262d;
    border-right-color: transparent;
    border-radius: 100%;
    vertical-align: middle;
`;

//<i class="fas fa-circle-notch"></i>
//HTML OBJECTS
var icon = document.createElement("i");
icon.class = "fas fa-circle-nortch";
icon.style = iconStyle;

var busyContainer = document.createElement("div");
busyContainer.appendChild(icon);

busyContainer.id = "busy";
busyContainer.style = busyStyle;

//MASTER OBJECT
var busyIndicator = {
    open: open,
    close: close
}