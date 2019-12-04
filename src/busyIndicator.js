/* DESENVOLVIDO POR: MARCELO MONTALVAO */
// github.com/marcelo-rm

// METHODS
/**
 * 
 * @param {Number} delay seconds to wait
 */
function open(delay, color, type){
    var tipo = !type ? "busy" : type;
    var time = delay ? _convetTime(delay) : 0;
    var cor  = color ? color : 'black';

    setTimeout(function() {
        var busy = document.getElementById(tipo);
        
        if(tipo == "circle") {
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainer);
            }
            busyContainer.children[0].style.borderColor = cor;
            busyContainer.children[0].style.borderRightColor = 'transparent';
        }
        if(tipo == "bubble"){
            if(busy){
                busy.style.display = 'flex';
            } else {
                document.getElementsByTagName("body")[0].append(busyContainerBubble);
                //document.getElementsByTagName("body")[0].append(busyContainer);
            }
            document.getElementsByClassName("bubbles01")[0].style.backgroundColor = cor;
            document.getElementsByClassName("bubbles02")[0].style.backgroundColor = cor;
            document.getElementsByClassName("bubbles03")[0].style.backgroundColor = cor;
        } 
        if(tipo == "bars") {
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

/*
############################################################
#      BUSY CIRCLE INDICATOR                               #
############################################################
*/
var icon = document.createElement("i");
icon.className = "circle";

var busyContainer = document.createElement("div");
busyContainer.appendChild(icon);

busyContainer.id = "circle";
busyContainer.className = "busy";

/*
############################################################
#      BUSY BUBBLE INDICATOR                               #
############################################################
*/
var busyContainerBubble = document.createElement("div");
busyContainerBubble.id = "bubble";
busyContainerBubble.className = "busy";

var bubbles01 = document.createElement("div");
bubbles01.className = "bubbles01";
busyContainerBubble.appendChild(bubbles01);

var bubbles02 = document.createElement("div");
bubbles02.className = "bubbles02";
busyContainerBubble.appendChild(bubbles02);

var bubbles03 = document.createElement("div");
bubbles03.className = "bubbles03";
busyContainerBubble.appendChild(bubbles03);

/*
############################################################
#      BUSY BARS INDICATOR                                 #
############################################################
*/
var busyContainerBar = document.createElement("div");
busyContainerBar.id = "bars";
busyContainerBar.className = "busy";

var bar01 = document.createElement("div");
bar01.id = "bar001";
bar01.className = "bars";
busyContainerBar.appendChild(bar01);

var bar02 = document.createElement("div");
bar02.id = "bar002";
bar02.className = "bars";
busyContainerBar.appendChild(bar02);

var bar03 = document.createElement("div");
bar03.id = "bar003";
bar03.className = "bars";
busyContainerBar.appendChild(bar03);

/*
############################################################
#      MASTER OBJECT TO EXPORTS                            #
############################################################
*/
var busyIndicator = {
    open: open,
    close: close
};

function newFunction() {
    document.getElementsByTagName('head')[0].appendChild(style);
}
