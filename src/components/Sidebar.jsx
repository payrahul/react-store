import { Link } from "react-router-dom";
export default function Sidebar(){
    return (
        <aside className="w-64 min-h-screen bg-white shadow" >
            <ul className="space-y-4">
                <li className="p-2 rounded hover:bg-blue-100 cursor-pointer">
                    <Link to="/">Dashboard </Link>
                </li>
                <li className="p-2 rounded hover:bg-blue-100 cursor-pointer">
                    <Link to="/categories">Category</Link>
                    
                </li>
                <li className="p-2 rounded hover:bg-blue-100 cursor-pointer">Product</li>
            </ul>
        </aside>
    );
}