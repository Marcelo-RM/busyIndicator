# busyIndicator
Indicador de processamento para web sites e aplicações web.


## Como utilizar
Para utilizar este indicador em sua aplicação é simples, basta fazer o download do arquivo JS e do CSS e instanciá-los dentro da tag 'head' do seu arquivo html.
Os dois arquivos são necessários
Ex.:
```
<link rel="stylesheet" href="css/busyIndicator.css">
<script src="js/busyIndicator.js"></script>
```

Após adicionar a tag script, basta chamar os métodos de exibição e ocultação, open e close respectivamente. <br >
Ex.: <br >
busyIndicator.open(); para exibir e  <br >
busyIndicator.close(); para ocultar.

Você pode escolher as cores para o indicador, passando o valor como segundo parametro. As cores são aceitas em todos os formatos aceitos pelo CSS, como hexadecimal, rgb, hsl, etc... <br >
Ex.:<br >
busyIndicator.open('red');<br >
busyIndicator.open('#ff0000');<br >
busyIndicator.open('rgb(255, 0, 0)');

Atualmente há duas opções de indicadores, circulo e bolhas, que são escolhido pelo terceiro parametro. Opções possíveis são: "busy" para exibir o indicador padrão, circulo, "bubble" para exibir o indicador de bolhas e "bars" para exibir o indicador em barras.
Caso o terceiro parametro seja omitido o indicador vai assumir sua forma padrão.<br >
Ex.:<br >
busyIndicator.open('red');             //circle busy<br >
busyIndicator.open('red', 'circle');   //circle busy<br >
busyIndicator.open('red', 'bubble');   //bubble busy<br >
busyIndicator.open('red', 'bars');     //Bars busy

Você pode adicionar um tempo de espera, passando como parametro um número inteiro ou ponto flutuante que representa o tempo esperado em segundos<br >
Ex.: <br >
busyIndicator.open('red', 'bars', '2s'); <br >
