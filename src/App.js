import './App.css';
import {Space} from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";


function App() {
  return (
    <div className="App">
        <div className="App">
            <Navbar />
            <div className="SideMenuAndPageContent">
                <Sidebar></Sidebar>
                <PageContent></PageContent>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default App;
