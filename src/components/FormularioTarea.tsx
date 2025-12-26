import { useForm } from "react-hook-form"
import Error from "./Error"
import type { DraftTarea } from "../types"
import { useTareaStore } from "../store"


export default function FormularioTareas() {

  const {agregarTarea} = useTareaStore()

  const { register, handleSubmit, formState: { errors } } = useForm <DraftTarea>()

  const registroTarea = (data: DraftTarea) => {
    console.log("Tarea registrada", data )
    agregarTarea(data)
  }


  return (


    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <p className="font-black text-lg mt-5 text-center mb-10">Añadir Tareas</p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registroTarea)}
      >
        <div className="mb-5">
          <label htmlFor="tarea" className="text-sm uppercase font-bold">
            Nombre de la Tarea
          </label>
          <input
            id="tarea"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre de la Tarea"
            {...register('tarea', {
              required: "Falta el nombre de la tarea",
              maxLength: {
                value: 15,
                message: "Maximo 15 caracteres"
              }
            })}
          />
          {errors.tarea && <Error>{errors.tarea?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="text-sm uppercase font-bold">
            Fecha de la Tarea
          </label>
          <input
            id="fecha"
            className="w-full p-3 border border-gray-100"
            type="date"
            {...register('fecha', {
              required: "falta la fecha de la tarea"
            })}
          />
          {errors.fecha && <Error>{errors.fecha?.message?.toString()}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="descripcion" className="text-sm uppercase font-bold">
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="w-full p-3 border border-gray-100"
            placeholder="Descripción de la Tarea"
            {...register('descripcion', {
              required: "falta la descripcion de la tarea",
              maxLength: {
                value: 50,
                message: "Maximo 50 caracteres"
              }
            })}
          />
          {errors.descripcion && <Error>{errors.descripcion?.message?.toString()}</Error>}
        </div>

        <input
          type="submit"
          className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors rounded"
          value="Guardar Tarea"
        />
      </form>
    </div>
  )
}