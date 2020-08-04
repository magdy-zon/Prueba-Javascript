


// Para saber si es una cadena balanceada metemos en una pila los valores '(', '['.
// Cuando se encuentra con un ')', ']'  hay que sacar un '(','[' respectivamente.
// Siempre que el array resultante sea vacío, significa que es balanceado la cadena ingresada
// La complejidad es de n, donde n es el tamaño de la cadena.

const verificaSimbols = function verificaSimbols(entrada) {

  symbols = [];
  isBalanced = true;

  for (var i=0; i<entrada.length; i++) {
    var caracter = entrada.charAt(i);

    switch (caracter) {
      case '(':
        symbols.push(caracter);
        break;
      case ')':
        if(symbols.length == 0)
          isBalanced = false;

        if(symbols[symbols.length-1] == '(')
          symbols.pop();
        break;
      case '[':
        symbols.push(caracter);
        break;
      case ']':
        if(symbols.length == 0)
          isBalanced = false;

        if(symbols[symbols.length-1] == '[')
         symbols.pop();
        break;
    }
  }

  if(isBalanced && symbols.length == 0)
    return true;
  else
    return false;
}



module.exports = { verificaSimbols }
