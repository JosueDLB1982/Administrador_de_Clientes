import { useNavigate } from "react-router-dom"

const Cliente = ({cliente}) => {
    const navigate = useNavigate()

    const {nombre, telefono, email, empresa, notas, id} = cliente

    return (
        <tr className="border-3 hover:bg-green-100">
            <td className="p-3 text-center font-bold">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">
                <button
                    type="button"
                    className="bg-purple-600 hover:bg-purple-900 block w-full text-white p-2 rounded-md uppercase font-bold text-xs m-2"
                    onClick={() => navigate(`/clientes/${id} ${nombre}`)}
                >
                    Ver
                </button>

                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-900 block w-full text-white p-2 rounded-md uppercase font-bold text-xs m-2"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 rounded-md uppercase font-bold text-xs m-2"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente
