import { Formik, Form, Field, validateYupSchema } from "formik"
import * as Yup from 'yup'
import Alerta from "./Alerta"

const Formulario = () => {
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                   .required('Debe Ingresar el Nombre Completo del Cliente')
                   .min(8, 'El nombre ingresado es muy corto. Por favor ingrese nombre completo.')
                   .max(40, 'El nombre ingresado es muy largo.'),

        telefono: Yup.number()
                     .typeError('el número telefónico debe tener un formato válido')
                     .integer('el número telefónico debe tener un formato válido')
                     .positive('el número telefónico debe tener un formato válido'),

        email: Yup.string()
                  .required('debe ingresar el email de contacto del cliente')
                  .email('por favor introduzca un email con un formato válido'),

        empresa: Yup.string()
                    .required('Debe Ingresar el nombre de la empresa a la que pertenece el cliente')
    })

    const handleSubmit = (val) => {
        console.log(val)
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

                onSubmit={(values) => (
                    handleSubmit(values)
                )}

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
