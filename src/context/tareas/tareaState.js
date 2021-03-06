import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import tareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types'

const TareaState = props => {

    const initialState = {
        tareas: [
            { id: 1, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { id: 2, proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { id: 3, proyectoId: 3, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 4, proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { id: 5, proyectoId: 1, nombre: 'Elegir Colores', estado: false },
            { id: 6, proyectoId: 2, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 7, proyectoId: 3, nombre: 'Elegir Hosting', estado: true },
            { id: 8, proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { id: 9, proyectoId: 4, nombre: 'Elegir Colores', estado: false },
            { id: 10, proyectoId: 3, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 11, proyectoId: 2, nombre: 'Elegir Hosting', estado: true },
            { id: 12, proyectoId: 1, nombre: 'Elegir Hosting', estado: true },
            { id: 13, proyectoId: 3, nombre: 'Elegir Hosting', estado: true },
        ],
        tareasproyecto: null
    }

    // Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState)

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            { props.children }
        </tareaContext.Provider>
    );
}
 
export default TareaState;