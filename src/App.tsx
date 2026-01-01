import { ToastContainer } from "react-toastify"
import FormularioTarea from "./components/FormularioTarea"
import ListaTareas from "./components/ListaTareas"
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      <div className="container mx-auto mt-20 bg-slate-500 shadow-lg " >
        <h1 className=" font-bold text-2xl text-center md:w-2/3 md:mx-auto  " >Mis Tareas!</h1>


        <div className="mt-12 md:flex  " >

          <FormularioTarea />
          <ListaTareas />
        </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default App
