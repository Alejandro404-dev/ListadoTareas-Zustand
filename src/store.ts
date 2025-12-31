import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; // para generar IDs únicos
import type { DraftTarea, Tarea } from "./types";

type TareaState = {
    tareas: Tarea[]
    agregarTarea: (data: DraftTarea) => void  // recibe data del formulario
}

// función para crear una nueva tarea con un id único
const crearTarea = (tarea: DraftTarea): Tarea => {
    return {
        ...tarea,
        id: uuidv4()
    }
}
// creación del store usando zustand
export const useTareaStore = create<TareaState>((set) => ({
    tareas: [],
    agregarTarea: (data) => {
        console.log("llega la data del formulario al store", data)

        const nuevaTarea = crearTarea(data) // crear la tarea con id único 
        set((state) => ({
            tareas: [
                ...state.tareas,
                nuevaTarea
            ]
        }))
    }



}))