import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import { useParams } from "react-router-dom"

const EditarCliente = () => {
    const [cliente, setCliente] = useState({})

    const [cargando, setCargando] = useState(true)

    const { nombre } = cliente

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando)
        }
        obtenerClienteAPI()
    }, [])
    
    return (
        Object.keys(cliente).length === 0 ? /* Con el proposito de verificar si el usuario introduce una direccion id de cliente inexistente, mostrar mensaje alusivo */
                <p className="font-black text-6xl text-blue-900 m-2">El Registro Solicitado no Existe</p> :
        <>
            <h1 className="font-black text-4xl text-blue-900 m">Editar Cliente</h1>
            <p className="mt-3">{`Revisa los Siguientes Campos Para Editar el registro del Cliente ${nombre}`}</p>

            <Formulario
                cliente={cliente}
                cargando={cargando}
            />

        </>
    )
}

export default EditarCliente
