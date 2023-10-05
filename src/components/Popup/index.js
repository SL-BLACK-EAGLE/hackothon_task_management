import React from "react";

import '../Popup/Popup.css';


import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";


import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export default function PopupMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("center");
    const [isSelected, setIsSelected] = React.useState(false);

    const user = {
        name: "Junior Garcia",
        avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
        username: "jrgarciadev",
        url: "https://twitter.com/jrgarciadev",
        role: "Software Developer",
        status: "Active",
    }

    return (
        <div className="flex flex-col gap-2 ">
            <Button onPress={onOpen} className="max-w-fit">Open Modal</Button>
            {/* <RadioGroup
          label="Select modal placement"
          orientation="horizontal"
          value={modalPlacement}
          onValueChange={setModalPlacement}
        >
          <Radio value="center">center</Radio>
        </RadioGroup> */}
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent className="main sm:w-full">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-center">Add Members</ModalHeader>
                            <ModalBody>

                                <Checkbox
                                    aria-label={user.name}
                                    classNames={{
                                        base: cn(
                                            "inline-flex w-full max-w-md bg-content1",
                                            "hover:bg-content2 items-center justify-start",
                                            "cursor-pointer rounded-lg gap-2 p-2 border-1 border-transparent",
                                            "data-[selected=true]:border-white",
                                        ),
                                        label: "w-full",
                                    }}
                                    isSelected={isSelected}
                                    onValueChange={setIsSelected}
                                >
                                    <div className="w-full flex justify-between gap-2">
                                        <User
                                            avatarProps={{ size: "md", src: user.avatar }}
                                            description={
                                                <Link isExternal href={user.url} size="sm">
                                                    @{user.username}
                                                </Link>
                                            }
                                            name={user.name}

                                        />
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-tiny text-default-500">{user.role}</span>
                                            <Chip color="success" size="sm" variant="flat">
                                                {user.status}
                                            </Chip>
                                        </div>
                                    </div>
                                </Checkbox>

                                <Checkbox
                                    aria-label={user.name}
                                    classNames={{
                                        base: cn(
                                            "inline-flex w-full max-w-md bg-content1",
                                            "hover:bg-content2 items-center justify-start",
                                            "cursor-pointer rounded-lg gap-2 p-2 border-1 border-transparent",
                                            "data-[selected=true]:border-white",
                                        ),
                                        label: "w-full",
                                    }}
                                    isSelected={isSelected}
                                    onValueChange={setIsSelected}
                                >
                                    <div className="w-full flex justify-between gap-2">
                                        <User
                                            avatarProps={{ size: "md", src: user.avatar }}
                                            description={
                                                <Link isExternal href={user.url} size="sm">
                                                    @{user.username}
                                                </Link>
                                            }
                                            name={user.name}

                                        />
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-tiny text-default-500">{user.role}</span>
                                            <Chip color="success" size="sm" variant="flat">
                                                {user.status}
                                            </Chip>
                                        </div>
                                    </div>
                                </Checkbox>

                                <Checkbox
                                    aria-label={user.name}
                                    classNames={{
                                        base: cn(
                                            "inline-flex w-full max-w-md bg-content1",
                                            "hover:bg-content2 items-center justify-start",
                                            "cursor-pointer rounded-lg gap-2 p-2 border-1 border-transparent",
                                            "data-[selected=true]:border-white",
                                        ),
                                        label: "w-full",
                                    }}
                                    isSelected={isSelected}
                                    onValueChange={setIsSelected}
                                >
                                    <div className="w-full flex justify-between gap-2">
                                        <User
                                            avatarProps={{ size: "md", src: user.avatar }}
                                            description={
                                                <Link isExternal href={user.url} size="sm">
                                                    @{user.username}
                                                </Link>
                                            }
                                            name={user.name}
                                            
                                        />
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-tiny text-default-500">{user.role}</span>
                                            <Chip color="success" size="sm" variant="flat">
                                                {user.status}
                                            </Chip>
                                        </div>
                                    </div>
                                </Checkbox>

                                <Checkbox
                                    aria-label={user.name}
                                    classNames={{
                                        base: cn(
                                            "inline-flex w-full max-w-md bg-content1",
                                            "hover:bg-content2 items-center justify-start",
                                            "cursor-pointer rounded-lg gap-2 p-2 border-1 border-transparent",
                                            "data-[selected=true]:border-white",
                                        ),
                                        label: "w-full",
                                    }}
                                    isSelected={isSelected}
                                    onValueChange={setIsSelected}
                                >
                                    <div className="w-full flex justify-between gap-2">
                                        <User
                                            avatarProps={{ size: "md", src: user.avatar }}
                                            description={
                                                <Link isExternal href={user.url} size="sm">
                                                    @{user.username}
                                                </Link>
                                            }
                                            name={user.name}
                                            
                                        />
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-tiny text-default-500">{user.role}</span>
                                            <Chip color="success" size="sm" variant="flat">
                                                {user.status}
                                            </Chip>
                                        </div>
                                    </div>
                                </Checkbox>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
