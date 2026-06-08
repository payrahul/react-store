import { useEffect, useState } from "react";

import { getCategories, deleteCategory } from "../../services/categoryService";

function CategoryList(){
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () =>{
        const response = await getCategories();
        setCategories(response.data.data);
    };

    useEffect(()=>{
        fetchCategories();
    },[]);

    const handleDelete = async (id) =>{
        if(confirm("Delete Category?")){
            await deleteCategory(id)
            fetchCategories();
        }
    };

    return(
        <div className="bg-white shadow rounded-lg p-6">
        
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

                <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Add Category
                </button>
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
                    {categories.map((category) =>(
                        <tr key={category.id}
                            className="border-b hover:bg-gray-50"
                        >
                            <td className="py-4">{category.id}</td>
                            <td className="py-4">{category.name}</td>
                            <td className="py-4">{category.slug}</td>
                            <td className="py-4 space-x-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                >Edit</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                 onClick={()=>handleDelete(category.id)}
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