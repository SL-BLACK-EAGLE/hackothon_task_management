import React from 'react'
import { Input, Button } from "@nextui-org/react";
import '../AddNewProject/AddNewProject.css';
import MainComponent from "../AddNewProject/components/mainComponents";


export default function index() {


  return (
    <div className="body01">
      <div className='body-1-1'>
        <p className="text-start ps-6 text-2xl">New Project</p><br />
        <div className="flex w-[800px] flex-wrap md:flex-nowrap gap-4 h-16 ps-6">
          <Input type="text" label="Project Name" className="w-[800px] drop-shadow-lg" />
        </div>
        <p className="text-start ps-6 text-2xl pt-6">Add Members</p><br />
        <div className="flex w-[800px] flex-wrap md:flex-nowrap gap-4 h-16 ps-6">
          <Input type="text" label="Member Name" className='input01 drop-shadow-lg' />
        </div><br /><br />
        <div className="w-[800px] ms-6">
          <MainComponent />
        </div>
          
        <br />

        <div className="flex flex-wrap items-center ps-6">


        <Button color="primary" variant="ghost" className="items-center w-[200px]">
          Update
        </Button>

      </div><br />
    </div>

    </div >
  )
}

