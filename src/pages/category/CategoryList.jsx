import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "../../services/categoryService";
import axios from "axios";


function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await getCategories();
            setCategories(response.data.data)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        if ( !confirm("Delete Category?")) {
            // await deleteCategory(id)
            // fetchCategories();
            return;
        }

        try{
            await deleteCategory(id);
            fetchCategories();
        }catch(error){
            console.log(error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    

    

    return (
        <div className="bg-white shadow rounded-lg p-6">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Categories
                </h1>
                <Link to="/categories/create" className="bg-green-600 text-white px-4 py-2 rounded" >
                    Add Category
                </Link>
            </div>



            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-3">ID</th>
                        <th className="text-left py-3">Name</th>
                        <th className="text-left py-3">Slug</th>
                        <th className="text-left py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}
                            className="border-b hover:bg-gray-50"
                        >
                            <td className="py-4">{category.id}</td>
                            <td className="py-4">{category.name}</td>
                            <td className="py-4">{category.slug}</td>
                            <td className="py-4 space-x-2">
                                <Link to={`/categories/edit/${category.id}`} 
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >Edit</Link>
                                {/* <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                >Edit</button> */}
                                <button
                                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    onClick={() => handleDelete(category.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );




}

export default CategoryList;