/* 1) Observe o trecho de código abaixo:

 int INDICE = 13, SOMA = 0, K = 0;

 enquanto K < INDICE faça

 {

 K = K + 1;

 SOMA = SOMA + K;

 }

 imprimir(SOMA);

 Ao final do processamento, qual será o valor da variável SOMA? */
class TesteOne {
  static indice = 13;
  static k = 0;
  static soma = 0;

  static metod() {
    while (TesteOne.k < TesteOne.indice) {
      TesteOne.k += 1;
      TesteOne.soma += TesteOne.k;
      console.log(
        `O valor de K: ${TesteOne.k} e o valor da Soma: ${TesteOne.soma}`
      );
    }
  }

  /*    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

   IMPORTANTE:

   Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/
  static FiBonacci(valueNumber) {

    let FiBonacciArr = [0,1]


    while (FiBonacciArr[FiBonacciArr.length - 1] < valueNumber) {
      let newValue = FiBonacciArr[FiBonacciArr.length - 1] + FiBonacciArr[FiBonacciArr.length - 2];
      FiBonacciArr.push(newValue);

      if (valueNumber === newValue) {
        console.log(`${valueNumber} está dentro da sequência de Fibonacci`);
        break;
      } else {
        console.log(`value de index ${newValue}`);
      }
    }
    
  }
  /*
  3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___  -> (9) incrementando de 2 em 2

b) 2, 4, 8, 16, 32, 64, ____ -> (128) multiplicando por 2

c) 0, 1, 4, 9, 16, 25, 36, ____ -> (49) Cada numero corresponde ao de sua sequencia ao quadrado, ex: onde seria 5 esta 5 ao quadrado

d) 4, 16, 36, 64, ____ -> (100) O mesmo esquema da letra C so que apenas os numeros pares, no caso o proximo seria 10 que ao quadrado é 100

e) 1, 1, 2, 3, 5, 8, ____ -> (13) Sequencia FiBonacci da questão anterior onde o é somado os dois numeros anteriores para gerar o proximo

f) 2,10, 12, 16, 17, 18, 19, ____ (22) Seguindo a sequencia de 19 + (1*2+1) -> 19 + 3 = 22
 */

/* 

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

 Resposta: Acenderia dois interruptores e iria em uma sala, caso ela tenha ligado a lampada, eu saberia que uma das duas é para aquela sala ai voltaria e apagaria um deles para identicar de qual sala é, caso o contrario, a que não liguei era da outra sala, então repetiria essa ação ate identificar todas

*/
static ReverseString(str) {
  let reverseArr = []

  for (let index = str.length - 1; index >= 0 ; index--) {
    console.log(str[index])
    reverseArr.push(str[index])
    
  }
}
}

TesteOne.metod();
TesteOne.FiBonacci(34)
TesteOne.ReverseString("Rafael")