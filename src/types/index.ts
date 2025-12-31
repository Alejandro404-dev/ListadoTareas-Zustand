export type Tarea = {
    id: string
    tarea: string
    fecha: Date
    descripcion: string

}

export type DraftTarea = Omit<Tarea, 'id'> // traemos la tarea pero omitimos el id

// Formulario => Borrador (DraftTarea) => Listado de Tareas el draft se convierte en la tarea => para editar, la tarea vuelve al formulario=>
//     DraftTarea, el id se guarda en paralelo=> vuelve a unirse al id cuando vuelva a la lista de Tareas
