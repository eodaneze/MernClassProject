import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/PostDetails"
import CreatePost from "./pages/CreatePost"
const App = () => {
  return (
      <div>
         <Navbar />
           <Routes>
              <Route index element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/write" element={<CreatePost />}/>
              <Route path="/posts/post/:id" element={<PostDetails />}/>
           </Routes>
         <Footer />
      </div>
  )
}

export default App