import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CategoryList from "../pages/category/CategoryList";
import CreateCategory from "../pages/category/CreateCategory";
import EditCategory from "../pages/category/EditCategory";
export default function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoryList />}/>
                <Route path="/categories/create" element={<CreateCategory />} />
                <Route path="/categories/edit/:id" element={<EditCategory />} />
            </Routes>
    );
}