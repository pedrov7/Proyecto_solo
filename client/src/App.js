
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepg } from './pages/Homepg'
import { LogIn } from './layout/LogIn';
import { Signin } from './layout/Signin';
import { Chart } from './layout/Chart';
import { Sidebar } from './pages/Sidebar';
import { Orders } from './layout/Orders';
import { useState } from 'react';
import { Mycontext } from './context/Mycontext';



function App() {

  const [showSidebar, setShowSidebar] = useState(true);
  

  return (
    <div className="App">

      <BrowserRouter>
      <Mycontext>
        {showSidebar && <Sidebar/>}

        <Routes>
        
          <Route path='/' element={<Homepg />} />
          <Route path='login' element={<LogIn />} />
          <Route path='signin' element={<Signin />} />
          {/* <Route path='logged' element={<Sidebar/>}/> */}
          <Route path='chart' element={<Chart />} />
          <Route path='orders' element={<Orders />} />
        </Routes>


        </Mycontext>
      </BrowserRouter>





    </div>
  );
}

export default App;
