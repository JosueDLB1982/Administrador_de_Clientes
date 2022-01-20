import { Formik, Form, Field, validateYupSchema } from "formik"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import Alerta from "./Alerta"

const Formulario = () => {
    const navigate = useNavigate() /* Función para redirigir a otra pagina */

    const phoneExpReg = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('Debe Ingresar el Nombre Completo del Cliente')
            .min(8, 'El nombre ingresado es muy corto. Por favor ingrese nombre completo.')
            .max(40, 'El nombre ingresado es muy largo.'),

        telefono: Yup.string()
            .typeError('el número telefónico debe tener un formato válido')
            .matches(phoneExpReg, 'el número telefónico debe tener un formato válido'),

        email: Yup.string()
            .required('debe ingresar el email de contacto del cliente')
            .email('por favor introduzca un email con un formato válido'),

        empresa: Yup.string()
            .required('Debe Ingresar el nombre de la empresa a la que pertenece el cliente')
    })

    const handleSubmit = async (val) => { /* la llamada es async asincrona */
        try {
            const url = 'http://localhost:4000/clientes' /* Aquí se enviará la petición. Esta es la dirección y puerto escogidos para la Rest API */
            const respuesta = await fetch(url, { /* Puesto que se hará un registro, envio de información, se pasan mas datos ademas de la url */
                method: 'POST',  /* Hay que enviar los datos, se usa por eso el method post y se pasa el object con los datos, el object incluye */
                body: JSON.stringify(val), /* el method post segun las reglas de Rest es para crear un registro. En body se guardará un object, este */
                headers: { /* debe ser convertido a string con JSON.stringify. Por último, uno de los valores del object, es otro object, headers, */
                    'Content-Type': 'application/json' /* ahí declaramos que el tipo de contenido es una app para JSON */
                }
            })

            console.log(respuesta)
            const resultado = await respuesta.json() /* pasamos el resultado a formato JSON */
            console.log(resultado)
            navigate('/clientes') /* A esta dirección queremos redirigir al usuario una vez que complete un registro */

        } catch (error) {
            console.log(error)
        }

      
       
    }

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    telefono: '',
                    email: '',
                    empresa: '',
                    notas: ''
                }}

                onSubmit={ async (values, {resetForm}) => { /* Añadimos el async await para asegurarnos que se complete la petición de envío, antes */
                    await handleSubmit(values) /* de resetear el formulario */

                    resetForm() /* Una vez que cumpla con todo el proceso de envío de los datos, resetea el formulario */
                }}

                validationSchema={nuevoClienteSchema}
            >

                {({ errors, touched }) => {
                    return (

                        <Form
                            className="mt-10"
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="nombre"
                                    className="text-gray-800 "
                                >
                                    Nombre
                                </label>
                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Ingresa el Nombre Completo del Cliente"
                                    name="nombre"
                                />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="telefono"
                                    className="text-gray-800 "
                                >
                                    Teléfono
                                </label>
                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Ingresa el Teléfono del Cliente"
                                    name="telefono"
                                />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 "
                                >
                                    Email
                                </label>
                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Ingresa el email del Cliente"
                                    name="email"
                                />
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="empresa"
                                    className="text-gray-800 "
                                >
                                    Empresa
                                </label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Ingresa el Nombre de la Empresa del Cliente"
                                    name="empresa"
                                />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="notas"
                                    className="text-gray-800 "
                                >
                                    Notas
                                </label>
                                <Field
                                    id="notas"
                                    as="textarea"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                    placeholder="Aspectos a destacar del Nombre del Cliente"
                                    name="notas"
                                />
                            </div>

                            <input
                                type="submit"
                                value="Agregar Cliente"
                                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md"
                            />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Formulario
