import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";


//The application starts with a page spinner (loadingpage)
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false);},4000)   //loading set to stop after 4 sec
    }, []);

 //The Application, return a pageloader (4 sec) the navigation Bar and the footer and loads the HomePage   
    return (
    <div>
      <div className="App">
        {loading ?  
        <div className="Loadingspinner">     
        <CircleLoader color={"#50e22b"} loading={loading} size={300}/> </div> //cond. ternery operator condition ? exp2 : expres2
           :            
        <div className="Navbar-route"> 
        <Nav />                         
        <main>
          <Routes>
            <Route path="About" element={<AboutPage />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="create" element={<CreatePage />} />
            <Route path="update" element={<UpdatePage />} />
            <Route path="/posts/:postId" element={<UpdatePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main><Footer />
        </div>
        }      
        </div>
      </div>
    
    );
}

export default App;