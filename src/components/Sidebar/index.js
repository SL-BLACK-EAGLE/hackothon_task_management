import {Menu} from "antd";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {GrProjects} from "react-icons/gr";
import {HiOutlineUserGroup} from "react-icons/hi";
import {GrUserSettings} from "react-icons/gr";
import Company from "../Company";
import {Divider} from "@nextui-org/react";


function SideMenu() {

    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);

    const navigate = useNavigate();
    return (
        <div className="SideMenu w-52 ">
            <div className="pt-1">
                <Company />
            </div>
            <Divider className="my-1" />
            <Menu
                className="SideMenuVertical rounded"
                mode="vertical"
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                }}
                selectedKeys={[selectedKeys]}
                items={[
                    {
                        label: "Dashboard",
                        icon: <AiOutlineHome/>,
                        key: "/",
                    },
                    {
                        label: "Tasks",
                        key: "/tasks",
                        icon: <GrProjects/>,
                    },
                    {
                        label: "Employees",
                        key: "/employee",
                        icon: <HiOutlineUserGroup/>,
                    },
                    {
                        label: "Settings",
                        key: "/settings",
                        icon: <GrUserSettings/>,
                    },
                ]}
            ></Menu>
        </div>
    );
}

export default SideMenu;