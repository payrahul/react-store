import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default  function MainLayout( { children } ){
    return (
        <>
        <Header />
        <div className="flex min-h-screen" >
            <Sidebar />

            <main className="flex-1 p-8 bg-gray-50">
                {children}
            </main>

        </div>
        <Footer />
        </>
    );
}