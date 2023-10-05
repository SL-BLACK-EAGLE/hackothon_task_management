import { AiOutlineCheck } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import CardDiv from './task';
import { ScrollShadow } from "@nextui-org/react";

const Index = () => {

    return (
        <div className='w-full h-full bg-slate-300'>
            <div className='w-full h-[30px]'>
                <text className='font-semibold text-center'>Dashboard</text>
            </div>
            <div className='w-full relative bg-blue-200 text-center h-[140px] flex flex-col items-center justify-center'>
                <text className='text-center mb-3'>Thursday, October 5</text>
                <text className='mb-2'>Good evening, Chathuranga</text>
                <div className='flex gap-6 bg-lime-200 p-[10px] px-10 rounded-[30px]'>
                    <div className='flex items-center gap-2 border-r-1 border-gray-500 pr-3'>
                        <AiOutlineCheck className='font-semibold' />
                        <text className='font-semibold'>0</text>
                        <text>tasks completed</text>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FiUsers className='font-semibold' />
                        <text className='font-semibold'>0</text>
                        <text>Collaboration</text>
                    </div>
                </div>
            </div>
            <div className=' h-[22.5rem] overflow-y-auto max-sm:grid max-sm:grid-cols-1 max-lg:grid max-lg:grid-cols-2 max-xl:grid max-xl:grid-cols-3 p-3'>
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
    );
}
export default Index;
