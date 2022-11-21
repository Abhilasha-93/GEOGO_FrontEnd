import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./component/pages/Layout"
import Home from "./component/pages/Home"
import Dashboard  from "./component/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
