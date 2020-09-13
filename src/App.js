
import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListarGastos from './components/ListarGastos';
import ControlPrespuesto from './components/ControlPrespuesto';
import Error from './components/Error';

function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, establecerGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);
  //const [montoRestante, validarMontoRestante] = useState(0);

  //useEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
      //validarMontoRestante(presupuestoRestante);

      //reset a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">

        {/*validar el presupuesto restante para agregar error*/}
        {restante < 0 ? <Error 
          mensaje='Atención!!, Has sobrepasado el presupuesto estimado para tus gastos, ahora debes $'
          presupuesto={restante}
        />: null}

          {mostrarPregunta ?
            (
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) :
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    establecerGasto={establecerGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListarGastos
                    gastos={gastos}
                  />
                  <ControlPrespuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;