import { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'

import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

    // Extraer proyectos
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, [])

    // revisar si proyectos tiene contenidos
    if ( proyectos.length === 0 ) return null        

    return (
        <ul className='listado-proyectos'>
            {
                proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
    );
}
 
export default ListadoProyectos;