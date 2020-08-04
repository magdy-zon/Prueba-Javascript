



// La suma de consecutivos tal que m < n sólo debemos elegir cuál es el número con el que
// se inicia para proceder a sumar los n consecutivos.
// Paramos cuando alcancemos al número mayor m
// La complejidad del problema queda en el peor de los casos en tiempo lineal |m-n|


const sumaConsecutivos = function sumaConsecutivos(n, m) {
	if(n<0 || m <0) {
		throw Error("parámetros inc");
	} else {
		if(n < m) {
			init 	= n;
			end 	= m;
		}	else {
			init	= m;
			end		= n;
		}

		r = init;
		for (; init < end; init++) {
			r = r + (init+1);
		}

		return r;
	}
}




module.exports = { sumaConsecutivos }
