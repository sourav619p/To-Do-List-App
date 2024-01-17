import Register from "./components/Register"
import { TodoProvider } from "./context/TodoContext"

function App() {
  return (
    <TodoProvider>
<>
<Register />
</>
</TodoProvider>
  )
}

export default App
