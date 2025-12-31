import FormularioTarea from "./components/FormularioTarea"
import ListaTareas from "./components/ListaTareas"


function App() {


  return (
    <>
      <div className="container mx-auto mt-20 bg-red-100 " >
        <h1 className=" font-bold text-center md:w-2/3 md:mx-auto " >Mis Tareas</h1>


        <div className="mt-12 md:flex  " >

          <FormularioTarea />
          <ListaTareas />
        </div>



      </div>

    </>
  )
}

export default App
