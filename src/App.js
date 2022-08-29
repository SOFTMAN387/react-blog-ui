//import './App.css';
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const current_user=true;
  return (<>

    <div className="App">
      <Topbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/about' element={ <About/>} /> */}
        {/* <Route exact path='/contact' element={ <Contact/>} /> */}
        <Route exact path='/write' element={current_user?<Write />:<Register />} />
        <Route exact path='/login' element={current_user?<Home />:<Login />} />
        <Route exact path='/register' element={current_user?<Home />:<Register />} />
        <Route exact path='/post/:postId' element={current_user?<Single />:<Register />} />
        <Route exact path='/setting' element={current_user?<Setting />:<Register />} />
       

      </Routes>

    </div>
  </>

  );
}

export default App;
