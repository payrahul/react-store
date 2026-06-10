import { useState }  from "react";
import axios from "axios";

function CreateCategory(){
    const [formData, setFormData] = useState({
        name:"",
        slug:""
    });

    const [errors, setErrors] = useState({});


    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = ["Name is required"];
        }

        if (!formData.slug.trim()) {
            validationErrors.slug = ["Slug is required"];
        }

        setErrors(validationErrors);

        // Stop here
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        try {

            await axios.post(
                "http://127.0.0.1:8000/api/categories",
                formData
            );

            setErrors({});

            setFormData({
                name: "",
                slug: ""
            });

        } catch (error) {

            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }

        }
    };

    return(
        <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-6">
                Add Category
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
                    className="bg-green-600 text-white px-5 py-2 rounded"
                >
                    Save
                </button>
            </form>

        </div>
    )

}

export default CreateCategory;