
import UserContextProvider from "./Context/UserContextProvider"
import { Login } from "./components/Login"
import { Profile } from "./components/profile"

function App() {
 

  return (
    <UserContextProvider>
      <h1>hi this is chai or react </h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
