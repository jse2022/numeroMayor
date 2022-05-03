import "./styles.css";

let contador: number = 0;
let numeroMayor = 0;
let numero = Number(prompt("Ingrese numero: "));
while (contador < 3) {
  if (numero > numeroMayor) {
    numeroMayor = numero;
  }
  contador = contador + 1;
  numero = Number(prompt("Ingrese numero: "));
}
alert("El numero mayor es: " + numeroMayor);
