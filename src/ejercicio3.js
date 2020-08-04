

// Este problema busca devolver el k elemento más grande,
// Primeor necesitamos ordenar el array, se utilizará para esto mergesort que en el peor de los casos tiene una complejidad
// nlog(n), ya que el al dividir todo el tiempo el ordenamiento en 2 partes, izq y der nos ahorramos tiempo de cómputo.
// Después de ello tomamos el k elemento del array ordenado y lo devolvemos.


function ordenaArray(aOrdenar) {
  if(aOrdenar.length === 1)
    return aOrdenar;

  const t = Math.floor(aOrdenar.length / 2);
  const mitadI = aOrdenar.slice(0,t);
  const mitadD = aOrdenar.slice(t);

  return orden(ordenaArray(mitadI), ordenaArray(mitadD));
}

function orden(izq, der) {
  temp = [];
  lind = 0;
  rind = 0;

  while (lind < izq.length && rind < der.length) {
    if(izq[lind] < izq[rind]) {
      temp.push(izq[lind]);
      lind++;
    } else {
      temp.push(der[rind]);
      rind++;
    }
  }

  return temp.concat(izq.slice(lind)).concat(der.slice(rind));
}


const dameElemPosX = function dameElemPosX(pendienteOrden, x) {
  ordenado = ordenaArray(pendienteOrden);
  pos = ordenado.length - x;

  return ordenado[pos];
}




module.exports = { dameElemPosX }
