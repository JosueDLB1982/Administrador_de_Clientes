import { Formik, Form, Field } from "formik"

const Formulario = () => {
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>

            <Formik>
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
                        />
                    </div>

                    <div className="mb-4">
                        <label
                        htmlFor="telefono"
                        className="text-gray-800 "
                        >
                            telefono
                        </label>
                        <Field
                            id="telefono"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Ingresa el Teléfono del Cliente"
                        />
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
                        />
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
                        />
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
                        />
                    </div>

                    <input
                        type="submit"
                        value="Agregar Cliente"
                        className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md"
                    />
                </Form>
            </Formik>
        </div>
    )
}

export default Formulario
