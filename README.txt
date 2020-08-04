EJ 2
// La suma de consecutivos tal que m < n sólo debemos elegir cuál es el número con el que
// se inicia para proceder a sumar los n consecutivos.
// Paramos cuando alcancemos al número mayor m
// La complejidad del problema queda en el peor de los casos en tiempo lineal |m-n|


EJ 3 
// Este problema busca devolver el k elemento más grande,
// Primeor necesitamos ordenar el array, se utilizará para esto mergesort que en el peor de los casos tiene una complejidad
// nlog(n), ya que el al dividir todo el tiempo el ordenamiento en 2 partes, izq y der nos ahorramos tiempo de cómputo.
// Después de ello tomamos el k elemento del array ordenado y lo devolvemos.


EJ 4
// Para resolver el problema se hace uso de un array asoc para que el id de un valor
// repetido sobreescriba un valor nuevo si no existe.
// En el peor de los casos tenemos que la complejidad es n, en donde n es la longitud
// del array, cuando todos son diferentes



EJ 5
// Para saber si es una cadena balanceada metemos en una pila los valores '(', '['.
// Cuando se encuentra con un ')', ']'  hay que sacar un '(','[' respectivamente.
// Siempre que el array resultante sea vacío, significa que es balanceado la cadena ingresada
// La complejidad es de n, donde n es el tamaño de la cadena.
