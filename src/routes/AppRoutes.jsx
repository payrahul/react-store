import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryList from "../pages/category/CategoryList";

export default function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoryList />}/>
            </Routes>
    );
}