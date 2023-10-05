import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";


import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

const Index = () => {
    return (
        <div className="w-full bg-[#0e1217]">
            <Navbar className="bg-[#0e1217] w-full">
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit text-white">ACME</p>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4 w-full" justify="start">
                    <NavbarItem isActive>
                        <Link href="#" className="text-white text-[1.2rem]">
                            Features
                        </Link>
                    </NavbarItem>



                </NavbarContent>

                <NavbarContent as="div" justify="end" className=" w-full  md:flex" >
                    <Input
                        isClearable
                        radius="lg"      
                        className="placeholder-white w-[20rem]"
                        placeholder="Type to search..."
                        startContent={
                            <SearchIcon className=" dark:text-white text-[1rem] text-black pointer-events-none flex-shrink-0" />
                        }
                    />

                    <Dropdown placement="bottom-end" className="bg-[#0e1217] shadow-2xl shadow-white ">
                        <DropdownTrigger className="mr-5">
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat" className=" text-white">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
        </div>
    )
}
export default Index;
