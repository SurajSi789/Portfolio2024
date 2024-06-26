import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, Experience, Projects, Contact } from "./pages"

const App = () => {
    return(
        <main className="bg-slate-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </main>
    )
}

export default App