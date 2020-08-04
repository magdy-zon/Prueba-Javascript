


// No se terminó el ejercicio 1

function getSubArray(elems) {
    masGrande = [];
    for(i=0; i<elems.lenght; i++) {
        n = elems[i];
        for(j=i+1; j<elems.length; j++) {
            // if(elems[j] > n)
              // masGrande[] = n;
        }
    }
}


function obtenAScendente(elems) {
    asc = [];
    temp = elems[0];
    for(i=0; i<elems.length; i++) {
      n = elems[i];
      m = elems[i+1];
      if(n>= temp) {
        if( n < m) {
          asc.push(n);
          asc.push(m);
          temp = m;
        } else {
          asc.push(n);
          temp = n;
        }
      }
    }
    console.log(asc);
}


obtenAScendente([2,1,3,4]);
