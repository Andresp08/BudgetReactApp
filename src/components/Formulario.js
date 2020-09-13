
import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({establecerGasto,guardarCrearGasto}) => {

    const [gasto, guardarGasto] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Cuanso el user agregar un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || gasto.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //construir el gasto
        const construitGasto = {
            gasto, 
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        establecerGasto(construitGasto);
        guardarCrearGasto(true);

        //resetear el form
        guardarGasto('');
        guardarCantidad(0);
    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje='Ambos campos son obligatorios o Prespuesto Incorrecto'/> :  null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={gasto}
                    onChange={e => guardarGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. $ 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    establecerGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired,
}
 
export default Formulario;
