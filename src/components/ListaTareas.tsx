import { useTareaStore } from "../store"


export default function ListaTareas() {

  const {tareas} = useTareaStore()
  console.log("tareas con id's en ListaTareas", tareas)

  return (
    <div>ListaTareas</div>
  )
}
