
export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    //75%
    if( (presupuesto / 4 ) > restante ) {
       clase = 'alert alert-danger' ;
    } 
    //50%
    else if( (presupuesto / 2 ) > restante ) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    
    return clase;

}