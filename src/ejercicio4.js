

// Para resolver el problema se hace uso de un array asoc para que el id de un valor
// repetido sobreescriba un valor nuevo si no existe.
// En el peor de los casos tenemos que la complejidad es n, en donde n es la longitud
// del array, cuando todos son diferentes

const eliminaDups = function eliminaDups(aEliminar) {

    elemsSinDup = [];

    for(i=0; i<aEliminar.length; i++) {
      elemsSinDup[aEliminar[i]] = aEliminar[i];
    };

    return elemsSinDup;
}



module.exports = { eliminaDups }
