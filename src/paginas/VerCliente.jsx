import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import { useParams } from "react-router-dom"

const VerCliente = () => {
    const [cliente, setCliente] = useState({})

    const [cargando, setCargando] = useState(true)

    const { nombre, telefono, email, empresa, notas } = cliente

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
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
        cargando ? <Spinner /> :
            Object.keys(cliente).length === 0 ? /* Con el proposito de verificar si el usuario introduce una direccion id de cliente inexistente, mostrar mensaje alusivo */
                <p className="font-black text-6xl text-blue-900 m-2">El Cliente no Existe</p> :
                (
                    <div>
                        <h1 className="font-black text-6xl text-blue-900 m-2">Detalle de Cliente</h1>
                        <p className="m-3 text-xl">{`Información Detallada del Cliente ${nombre}`}</p>

                        <p className="text-4xl p-2">
                            <span className="uppercase font-bold">Nombre: </span>
                            <span className="text-gray-900 ">{nombre}</span>
                        </p>

                        {telefono && (
                            <p className="text-2xl p-2">
                                <span className="uppercase font-bold">Teléfono: </span>
                                <span className="text-gray-900 ">{telefono}</span>
                            </p>
                        )}

                        <p className="text-2xl p-2">
                            <span className="uppercase font-bold">email: </span>
                            <span className="text-gray-900 ">{email}</span>
                        </p>

                        <p className="text-2xl p-2">
                            <span className="uppercase font-bold">Empresa: </span>
                            <span className="text-gray-900 ">{empresa}</span>
                        </p>

                        {notas && (
                            <p className="text-2xl p-2">
                                <span className="uppercase font-bold">Notas: </span>
                                <span className="text-gray-900 ">{notas}</span>
                            </p>
                        )}
                    </div>
                )
    )
}

export default VerCliente
