import { ToDoContextProvider } from "./contexts/ToDo"
import { ToastProvider } from "./contexts/Toast"
import { Content } from "./components/Content"
import { Header } from "./components/Header"


function App() {

  return (
    
      <ToastProvider>
        <ToDoContextProvider>
          <Header />
          <Content />
        </ToDoContextProvider>
      </ToastProvider>
  )
}

export default App
