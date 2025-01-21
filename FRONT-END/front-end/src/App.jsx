import Layout from "./Layout/Layout";
import AddPage from "./Pages/AddPage/AddPage";
import HomePage from "./Pages/HomePage/HomePage";
import NoPage from "./Pages/NoPage/NoPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="add" element={<AddPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
   
  );
}
