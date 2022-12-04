import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./component/pages/Layout";
import Login from "./component/pages/Login";
import Events  from "./component/pages/Events";
import Tickets from "./component/pages/Tickets";
import Order  from "./component/pages/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<Login />} />
             <Route path="Events" element={<Events />} />
             <Route path="Tickets" element={<Tickets />} />
             <Route path="Order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
