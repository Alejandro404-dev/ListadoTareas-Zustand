import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { DraftTarea, Tarea } from "./types";

type TareaState = {
    tareas: Tarea[]
    agregarTarea: (data: DraftTarea) => void
}


const crearTarea = (tarea: DraftTarea): Tarea => {
    return {
        ...tarea,
        id: uuidv4()
    }
}

export const useTareaStore = create<TareaState>((set) => ({
    tareas: [],
    agregarTarea: (data) => {
        console.log("llega la data del formulario al store", data)

        const nuevaTarea = crearTarea(data)
        set((state) => ({
            tareas: [
                ...state.tareas,
                nuevaTarea
            ]

        }))
        

    }
}))