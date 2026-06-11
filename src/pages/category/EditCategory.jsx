import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../../services/categoryService";
import { updateCategory } from "../../services/categoryService";


function EditCategory(){

    const [formData, setFormData] = useState({
        name:"",
        slug:""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () =>{
            const response = await getCategory(id);

            setFormData({
                name: response.data.data.name,
                slug: response.data.data.slug,
            });
        }
        fetchCategory();
    },[id]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            setLoading(true);
            await updateCategory(id, formData);
            navigate('/categories')
        }catch(error){
            if(error.response?.status === 422){
                setErrors(error.response.data.errors);
            }
        }finally{
            setLoading(false);
        }
    }

   

     return(
        <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-6">
                Edit Category
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="">Name</label>

                    <input 
                        type="text"

                        // className="w-full border p-2 rounded mt-2"

                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }

                        className={`w-full border p-2 rounded mt-2 ${errors.name ? "border-red-500" : ""}`}

                        />
                    {
                        errors.name && <p className="text-red-500 text-sm mt-1">
                            {errors.name[0]}
                        </p>
                    }
                </div>
                <div className="mb-4">
                    <label htmlFor="">Slug</label>

                    <input 
                        type="text"
                        // className="w-full border p-2 rounded mt-2"
                        value={formData.slug}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                slug: e.target.value
                            })
                        }
                        className={`w-full border p-2 rounded mt-2 ${errors.name ? "border-red-500" : ""}`}
                        />
                    {
                        errors.slug && <p className="text-red-500 text-sm mt-1">
                            {errors.slug[0]}
                        </p>
                    }
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-600 text-white px-5 py-2 rounded"
                >
                {loading ? "saving": "Save"}
                </button>
            </form>

        </div>
    )

}

export default EditCategory;