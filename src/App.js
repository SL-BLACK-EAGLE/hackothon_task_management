import './App.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="SideMenuAndPageContent">
                <Sidebar></Sidebar>
                <PageContent></PageContent>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
