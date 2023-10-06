import { AiOutlineCheck } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import CardDiv from './task';
import { ScrollShadow } from "@nextui-org/react";

const Index = () => {

    return (
        <div className='w-full h-full bg-white'>
            <div className='w-full relative bg-white text-center h-[180px] flex flex-col items-center justify-center'>
                <text className='text-center font-sans text-black font-semibold text-[1rem] mb-3'>Thursday, October 5</text>
                <text className='mb-2 text-[#004225] text-[1.5rem] font-semibold'>Good evening, <span className='text-[#F86F03] font-semibold text-[1.15rem]'>Chathuranga</span></text>
                <div className='flex gap-6 bg-[#001524] p-[10px] px-10 rounded-[30px] shadow-2xl border-solid border-gray-400 border-[1px] backdrop-blur-lg bg-opacity-[0.9]'>
                    <div className='flex items-center text-white gap-2 border-r-1 border-gray-500 pr-3'>
                        <AiOutlineCheck className='font-semibold' />
                        <text className='font-semibold'>0</text>
                        <text>tasks completed</text>
                    </div>
                    <div className='flex text-white items-center gap-2'>
                        <FiUsers className='font-semibold' />
                        <text className='font-semibold'>0</text>
                        <text>Collaboration</text>
                    </div>
                </div>
            </div>

            <div className='flex  justify-center'>

                <div className='bg-white pl-10 border-[2px] w-full h-[28rem] shadow-lg mb-1 overflow-y-auto flex items-center justify-center grid-cols-3 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3'>
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                    <CardDiv />
                </div>
            </div>
        </div>
    );
}
export default Index;
