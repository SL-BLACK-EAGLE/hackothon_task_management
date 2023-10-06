import React, {useEffect, useMemo} from "react";
import {
    Tabs,
    Tab,
    Input,
    Link,
    Button,
    Card,
    CardBody,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {BiSolidLock} from "react-icons/bi";
import {FaUser, FaMobile, FaUserCircle} from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import axios from "axios";
import Loading from "../../components/Loading/loading";
// import Loading from "../../components/Loading/loading";

const Index = () => {

    const [selected, setSelected] = React.useState("login");
    const [isSelected, setIsSelected] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const variants = ["bordered"];
    const [genderType, setGenderType] = React.useState([]);
    const [selectedKeys, setSelectedKeys] = React.useState([1]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    // registration form
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [password, setPassword] = React.useState("");

    const   [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");

// console.log(selectedKeys);


    const toggleVisibility = () => setIsVisible(!isVisible);


    const selectedValue = React.useMemo(() => {
        console.log(selectedKeys);
        const obj = genderType.find(item => item.id === Array.from(selectedKeys)[0]);
        return obj ? obj.name : "Select Type"
    }, [selectedKeys]);


    useEffect(() => {
        getAllType();
    }, []);

    var keys = "";
//signup request with axios
    const SignUpRequest = async () => {
        // const response = await axios.POST('http://localhost/task_managment/signupprocess.php');
        // const data = response.data;
        //xmlhttprequest with formdata

        if (selectedValue === "Male") {
            keys = 1;
        } else if (selectedValue === "Female") {
            keys = 2;
        } else {

        }


        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('username', userName);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('password', password);
        formData.append('gender_id', keys);

        const response = await axios.post('http://localhost/task_managment/signupprocess.php', formData);
        const data = response.data;
        if (data.status === 200) alert("data inserted successfully")
        alert("data not inserted")
        if (data === "success") {
            alert("data inserted successfully")
            window.location.href = "http://localhost:3000/";
        } else {

        }

    };


    //login request with axios
    const LoginRequest = async () => {

        const formData = new FormData();
        formData.append('email', loginEmail);
        formData.append('password', loginPassword);

        const response = await axios.post('http://localhost/task_managment/loginprocess.php', formData);
        const data = response.data;

        if (data === "success") {
            console.log(data);

            if (data === "success") {
                alert("successfully");
                window.location.href = "http://localhost:3000/";
            } else {
                alert(data);
            }
        }
    }


    const getAllType = async () => {
        const response = await axios.get('http://localhost/task_managment/genderload.php');
        const data = response.data;
        setGenderType(data);
        setIsLoaded(true);
    };
    if (!isLoaded) {
        //loading screen if data is not loaded
        return (
            <div className="flex items-center justify-center h-screen">
                <Loading/>
            </div>
        );

    }


    return (


        <div className="bg-authImage w-[100vw] h-[100vh] bg-cover bg-center relative justify-center items-center flex flex-col ">
            <Card className="w-[550px] h-[650px] overflow-hidden rounded-[20px] border-solid border-gray-400 border-[3px]  backdrop-blur-[50px] bg-red bg-opacity-[0.1]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab
                            key="login"
                            title="Login"
                            className="w-full flex items-center justify-center h-full"
                        >
                            <form className="flex flex-col gap-4 min-h-[60vh] w-[450px] items-center justify-center">
                                <div className="flex items-center w-full mb-7">
                                    <IoMail className="text-[1.5rem] mr-2"/>
                                    <Input
                                        isClearable
                                        type="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        // isRequired
                                        // isInvalid={true}
                                        errorMessage="Please enter a valid email"
                                        variant="underlined"
                                        color="danger"
                                        value={loginEmail}
                                        onValueChange={setLoginEmail}
                                    />
                                </div>
                                <div className="flex items-center w-full flex-col mt-5">
                                    <div className="w-full flex items-center">
                                        <BiSolidLock className="text-[1.5rem] mr-2"/>
                                        <Input
                                            isRequired
                                            label="Password"
                                            variant="underlined"
                                            placeholder="Enter your password"
                                            value={loginPassword}
                                            onValueChange={setLoginPassword}
                                            endContent={
                                                <button
                                                    className="focus:outline-none"
                                                    type="button"
                                                    onClick={toggleVisibility}
                                                >
                                                    {isVisible ? (
                                                        <EyeSlashFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <EyeFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </button>
                                            }
                                            type={isVisible ? "text" : "password"}
                                            color="danger"
                                        />
                                    </div>
                                    <div className="w-full text-end">
                                        <text
                                            className="text-[0.8rem] hover:text-red-600 hover:cursor-pointer hover:underline mt-1 w-full">
                                            Forgot password?
                                        </text>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 w-full mb-2">
                                    <Checkbox
                                        isSelected={isSelected}
                                        onValueChange={setIsSelected}
                                        size="sm"
                                    >
                                        Remember Password?
                                    </Checkbox>
                                </div>

                                <p className="text-center text-small">
                                    Need to create an account?{" "}
                                    <Link
                                        size="sm"
                                        onPress={() => setSelected("sign-up")}
                                        className="cursor-pointer"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-center w-full h-[50px] items-center">
                                    <Button
                                        variant="shadow"
                                        color="primary"
                                        className="w-[20rem] text-[1.5rem] font-semibold hover:bg-green-500 hover:text-black  ease hover:ease-in hover:duration-500"
                                        onClick={LoginRequest}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>

                        <Tab key="sign-up" title="Registration">
                            <form className="flex flex-col gap-4 h-[300px] w-full">
                                <div className="  flex  w-full">
                                    <FaUser className=" mt-4 text-[1.5rem]"/>
                                    {/* <Input isRequired label="First Name" placeholder="Enter First name" type="text" className="pr-1" /> */}
                                    <Input
                                        isClearable
                                        type="text"
                                        label="First Name"
                                        variant="underlined"
                                        placeholder="Enter your First Name"
                                        onClear={() => console.log("input cleared")}
                                        isRequired
                                        className=" w-full ml-5"
                                        color="danger"
                                        value={firstName}
                                        onValueChange={setFirstName}
                                    />
                                    {/* <Input isRequired label="Last Name" placeholder="Enter Last name" type="text" className="pl-1" /> */}
                                </div>
                                {/* <Input isRequired label="Email" placeholder="Enter your email" type="email" /> */}

                                <div className="flex w-full">
                                    <FaUser className=" mt-4 text-[1.5rem]"/>
                                    <Input
                                        isClearable
                                        type="text"
                                        label="Last Name"
                                        variant="underlined"
                                        placeholder="Enter your Last Name"
                                        onClear={() => console.log("input cleared")}
                                        isRequired
                                        className="w-full ml-5"
                                        color="danger"
                                        value={lastName}
                                        onValueChange={setLastName}
                                    />
                                </div>
                                <div className="flex w-full">
                                    <FaUserCircle className=" mt-4 text-[1.5rem]"/>
                                    <Input
                                        isClearable
                                        type="text"
                                        label="Username"
                                        variant="underlined"
                                        placeholder="Enter your username"
                                        onClear={() => console.log("input cleared")}
                                        isRequired
                                        className="w-full ml-5"
                                        color="danger"
                                        value={userName}
                                        onValueChange={setUserName}
                                    />
                                </div>

                                <div className="flex w-full">
                                    <IoMail className=" mt-4 text-[1.5rem]"/>
                                    <Input
                                        isClearable
                                        type="email"
                                        label="Email"
                                        variant="underlined"
                                        placeholder="Enter your email"
                                        onClear={() => console.log("input cleared")}
                                        isRequired
                                        className="w-full ml-5"
                                        color="danger"
                                        value={email}
                                        onValueChange={setEmail}
                                    />
                                </div>

                                <div className="flex w-full">
                                    <FaMobile className=" mt-4 text-[1.5rem]"/>
                                    <Input
                                        isClearable
                                        type="text"
                                        label="Mobile"
                                        variant="underlined"
                                        placeholder="Enter your Mobile"
                                        onClear={() => console.log("input cleared")}
                                        isRequired
                                        className="w-full ml-5"
                                        color="danger"
                                        value={mobile}
                                        onValueChange={setMobile}
                                    />
                                </div>

                                <div className="flex w-full">
                                    <BiSolidLock className=" mt-4 text-[1.5rem]"/>
                                    <Input
                                        label="Password"
                                        variant="underlined"
                                        placeholder="Enter your password"
                                        isRequired
                                        color="danger"
                                        value={password}
                                        onValueChange={setPassword}
                                        endContent={
                                            <button
                                                className="focus:outline-none"
                                                type="button"
                                                onClick={toggleVisibility}
                                                color="danger"
                                            >
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon
                                                        className="text-2xl text-default-400 pointer-events-none"/>
                                                ) : (
                                                    <EyeFilledIcon
                                                        className="text-2xl text-default-400 pointer-events-none"/>
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                        className="w-full ml-5"
                                    />
                                </div>

                                <div className="flex w-full  gap-2 justify-center">

                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                variant="bordered"
                                                className="capitalize w-[15rem] h-full ml-1"
                                                color="primary"
                                                // onClick={getAllType}
                                                size="lg"

                                            >
                                                {selectedValue}
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            aria-label="Single selection example"
                                            variant="flat"
                                            disallowEmptySelection
                                            selectionMode="single"
                                            selectedKeys={selectedKeys}
                                            onSelectionChange={setSelectedKeys}
                                        >
                                            {genderType.map((item) => {
                                                return (
                                                    <DropdownItem key={item.id}>{item.name}</DropdownItem>
                                                );
                                            })}

                                        </DropdownMenu>
                                    </Dropdown>
                                </div>

                                <p className="text-center text-small">
                                    Already have an account?{" "}
                                    <Link
                                        size="sm"
                                        onPress={() => setSelected("login")}
                                        className="cursor-pointer"

                                    >
                                        Login
                                    </Link>
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <Button fullWidth variant="shadow" color="secondary" className="hover:bg-red-600"
                                            onClick={SignUpRequest}
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );

};
export default Index;
