import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; // para generar IDs únicos
import type { DraftTarea, Tarea } from "./types";
import { devtools, persist } from "zustand/middleware";

type TareaState = {
    tareas: Tarea[]
    activarId: Tarea['id']  //para almacenar el id de la tarea que se está editando
    agregarTarea: (data: DraftTarea) => void  // recibe data del formulario
    eliminarTarea: (id: Tarea['id']) => void
    obtenerTareaporId: (id: Tarea['id']) => void
    actualizarTarea: (data: DraftTarea) => void
}

// función para crear una nueva tarea con un id único
const crearTarea = (tarea: DraftTarea): Tarea => {
    return {
        ...tarea,
        id: uuidv4()
    }
}
// creación del store usando zustand
export const useTareaStore = create<TareaState>()(
    devtools( 
        persist((set) => ({
        tareas: [],
        activarId: '',
        agregarTarea: (data) => {
            console.log("llega la data del formulario al store", data)

            const nuevaTarea = crearTarea(data) // crear la tarea con id único 
            set((state) => ({
                tareas: [
                    ...state.tareas,
                    nuevaTarea
                ]
            }))
        },

        eliminarTarea: (id) => {
            console.log("el id que llega para eliminar la tarea es", id)

            set((state) => ({
                tareas: state.tareas.filter((tarea) => tarea.id !== id)
            }))
        },

        obtenerTareaporId: (id) => {
            console.log("Verificamos que este llegando el id al store para editarlo", id)

            set(() => ({
                activarId: id
            }))
        },

        actualizarTarea: (data) => {
            set((state) => ({
                tareas: state.tareas.map((tarea) =>
                    tarea.id === state.activarId ? { id: state.activarId, ...data } : tarea
                ),
                activarId: '',// resetear el id activo después de actualizar
            }))
        }

    }), {
        name: "tarea-storage", // nombre del almacenamiento
    })
    ))


/*tarea en el listaTareas =>
    editar =>
    1 - envia el id en activar id / 2- envia la tarea a borrador/draft  (el borrador no lleva el id)  =>
    una vez es editado y guardado el borrador => 
    ActivarId y Draft se juntan y modifican la tarea en la lista de tareas */