import { useTareaStore } from "../store"


export default function ListaTareas() {

  const { tareas } = useTareaStore()
  console.log("tareas con id's en ListaTareas", tareas)

  return (
    <div className="md:w-2/3 lg:3/5 md:h-screen overflow-auto " >
      {/* si hay tareas, las mapeamos y mostramos, si no hay tareas mostramos un mensaje indicandolo */}
      {tareas.length ? (
        <div>
          <h2 className="text-center text-lg mt-5 font-black mb-10">Listado de <span className="text-blue-800 font-bold">Tareas</span>  para Gestionar </h2>

          {tareas.map(tarea =>
            <div className="mx-5 my-10 py-10 bg-slate-300 rounded-xl shadow-xl">
              <p className="ml-5"><span className="font-bold">Nombre de la Tarea</span> {tarea.tarea}</p>
              <p className="ml-5"><span className="font-bold">Fecha de la Tarea:</span> {tarea.fecha.toString()}</p>
              <p className="ml-5"><span className="font-bold">Descripción de la Tarea:</span> {tarea.descripcion}</p>


              <div className=" flex flex-col lg:flex-row gap-3 justify-between mt-10 px-5 " >

                <button
                  type="button"
                  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                >
                  Eliminar
                </button>
              </div>

            </div>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-center text-lg mt-5 font-black mb-10">No hay <span className="text-blue-800 font-bold">Tareas</span> registradas</h2>
          <p className="text-center">Agrega tu primera tarea para que aparezca en este lugar</p>
        </div>

      )}


    </div>
  )
}
