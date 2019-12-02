# busyIndicator
Busy indicator to use in web sites and web apps


# How to use
To use this in your app is to easy, you only need download script and add him in tag <head> of your html file.
<script src="js/busyIndicator.js"></script>

After this you are able to call him with methods as busyIndicator.open(); to show busy or busyIndicator.close(); to don't show anymore.

You can use time delay in seconds
busyIndicator.open('2s');

you can use colors in busy indicator
busyIndicator.open('2s', 'red');
busyIndicator.open('2s', '#ff0000');
busyIndicator.open('2s', 'rgb(255, 0, 0)');

choose from two indicator options, circle or bubbles
if the third parameter was not passed the indicator will be the default, circle

busyIndicator.open('2s', 'red');             //circle busy
busyIndicator.open('2s', 'red', 'busy');     //circle busy
busyIndicator.open('2s', 'red', 'bubble');   //bubble busy