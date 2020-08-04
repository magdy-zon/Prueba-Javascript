





function getSubArray(elems) {
    masGrande = [];
    for(i=0; i<elems.lenght; i++) {
        n = elems[i];
        for(j=i+1; j<elems.length; j++) {
            if(elems[j] > n)
              masGrande[] = n;
        }
    }
}
