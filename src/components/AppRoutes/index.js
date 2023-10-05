import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Auth from "../../pages/Auth";
import Employee from "../../pages/Employee";
import Projects from "../../pages/Projects";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/employee" element={<Employee/>}></Route>
                <Route path="/auth" element={<Auth/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;