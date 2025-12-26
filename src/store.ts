import { create } from "zustand";
import type { DraftTarea, Tarea } from "./types";

type TareaState = {
    tareas: Tarea[]
    agregarTarea: (data: DraftTarea) => void
}


export const useTareaStore = create<TareaState>( () => ({
    tareas: [],
    agregarTarea: (data) =>{
        console.log("llega la data del formulario al store", data) 
    }
}))