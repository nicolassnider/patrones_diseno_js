const suma = (a, b) => a + b;

//si solamente conocemos el valor de a.

const sumaCurrying = (a) => (b) => a + b;

sumaCurrying(1)(2)

const sumaUno = sumaCurrying(1);
sumaUno(2)