import {Route, Routes} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Auth from "../../pages/Auth";
import Employee from "../../pages/Employee";
import Tasks from "../../pages/Tasks";
import Settings from "../../pages/Settings";
import AddNewProject from "../../pages/AddNewProject";

function AppRoutes() {
    return (

        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/tasks" element={<Tasks/>}></Route>
            <Route path="/employee" element={<Employee/>}></Route>
            <Route path="/auth" element={<Auth/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/addnew" element={<AddNewProject/>}></Route>
        </Routes>

    );
}

export default AppRoutes;