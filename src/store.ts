import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; // para generar IDs únicos
import type { DraftTarea, Tarea } from "./types";
import { devtools } from "zustand/middleware";

type TareaState = {
    tareas: Tarea[]
    activarId: Tarea['id']  //para almacenar el id de la tarea que se está editando
    agregarTarea: (data: DraftTarea) => void  // recibe data del formulario
    eliminarTarea: (id: Tarea['id']) => void
    obtenerTareaporId: (id: Tarea['id']) => void
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
    devtools((set) => ({
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
        }
        
    })
))