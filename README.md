# busyIndicator
Indicador de processamento para web sites e aplicações web.


# Como utilizar
Para utilizar este indicador em sua aplicação é simples, basta fazer o download do arquivo js e instanciá-lo dentro da tag 'head' do seu arquivo html.
Ex.:
<script src="js/busyIndicator.js"></script>

Após adicionar a tag script, basta chamar os métodos de exibição e ocultação, open e close respectivamente.
Ex.:
busyIndicator.open(); para exibir e 
busyIndicator.close(); para ocultar.

Você pode adicionar um tempo de espera, passando o valor em segundos como primeiro parametro
Ex.:
busyIndicator.open('2s');

Você pode escolher as cores para o indicador, passando o valor como segundo parametro. As cores são aceitas em todos os formatos aceitos pelo CSS, como hexadecimal, rgb, hsl, etc...
Ex.:
busyIndicator.open('2s', 'red');
busyIndicator.open('2s', '#ff0000');
busyIndicator.open('2s', 'rgb(255, 0, 0)');

Atualmente há duas opções de indicadores, circulo e bolhas, que são escolhido pelo terceiro parametro. Opções possíveis são: "busy" para exibir o indicador padrão, circulo, e "bubble" para exibir o indicador de bolhas.
Caso o terceiro parametro seja omitido o indicador vai assumir sua forma padrão.
Ex.:
busyIndicator.open('2s', 'red');             //circle busy
busyIndicator.open('2s', 'red', 'busy');     //circle busy
busyIndicator.open('2s', 'red', 'bubble');   //bubble busy