import { Button } from "@nextui-org/button";
import React from "react";
import { Link } from "react-router-dom";
import { FiEdit2, FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { BiPlus } from "react-icons/bi";
import { BsInstagram, BsLink45Deg } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { Progress } from "@nextui-org/progress";
import { Checkbox, User, Chip, cn } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon.js";
import { PlusIcon } from "./PlusIcon.js";

const ProfilePage = () => {
  const [isSelected, setIsSelected] = React.useState(false);

  const user = {
    name: "Junior Garcia",
    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
    username: "jrgarciadev",
    url: "https://twitter.com/jrgarciadev",
  };

  return (
    <div className="w-full h-full overflow-hidden flex grid-cols-3">
      <div className="h-[38rem] w-[13rem] overflow-hidden">
        <div className="relative pt-[2rem] ">
          <img className="bg-profile h-[6rem] w-[6rem] bg-cover bg-center rounded-full ml-[3.5rem] " />
          <div className="bg-white h-[2rem] border-2 border-black w-[2rem]  rounded-full flex justify-center items-center cursor-pointer  absolute top-10 left-32">
            <FiEdit2 />
          </div>
        </div>
        <div className=" text-center">
          <p className=" font-bold text-[1.2rem] mt-[0.5rem]">
            Ishara Deshan
          </p>
        </div>
        <div className="text-center">
          <p className="font-bold text-[0.70rem] mt-[0.5rem]">
            Pasionate UIXXL Developer from Setproduced Inc.
          </p>
        </div><br/>
        <div>
          <p className="font-bold  ml-2">About</p>
        </div>
        <div className="text-center">
          <p className="text-[#969696] font-bold text-[0.80rem] mt-[0.5rem]">
            Head of design at Setproduct Aimed to love evety pixel and build
            awesome.
          </p>
        </div>
        <hr class="w-64 h-px my-2 bg-gray-500 border-0 dark:bg-gray-700" />
        <div className="flex gap-4 justify-center items-center">
          <div className="font-bold text-[2rem]">185</div>
          <div className="font-bold text-[2rem]">26</div>
          <div className="font-bold text-[2rem]">8K</div>
        </div>
        <div className="flex   gap-2 justify-center items-center ">
          <div className="text-[0.8rem]">Followers</div>
          <div className="text-[0.8rem]">Updates</div>
          <div className="text-[0.8rem]">Following</div>
        </div>
        <hr class="w-64 h-px my-4 bg-gray-500 border-0 dark:bg-gray-700" />
        <div className="mt-2">
          <p className="font-extrabold text-[1rem] ml-2">
            ElSEWHERE
          </p>
          <div className="flex mt-5 ml-4">
            <FiFacebook className="text-[1.2rem] ml-2 mt-1" />
            <Link className="ml-6 text-black text-sm">Facebook</Link>
          </div>
          <div className="flex mt-2 ml-4">
            <SlSocialGoogle className="text-[1.2rem] ml-2  mt-1" />
            <Link className="ml-6 text-black text-sm">Google</Link>
          </div>
          <div className="flex mt-2 ml-4">
            <FiTwitter className="text-[1.2rem] ml-2 mt-1" />
            <Link className="ml-6 text-black text-sm">Twitter</Link>
          </div>
          <div className="flex mt-2 ml-4">
            <TfiWorld className="text-[1.2rem] ml-2  mt-1" />
            <Link className="ml-6 text-black text-sm">Website</Link>
          </div>
        </div>
      </div>
      <div className=" h-[38rem] w-[50rem] overflow-hidden pl-4">
        <div>
          <p className="font-sans text-[2.5rem] font-bold ml-2">
            Desktop Profile
          </p>
        </div>
        <div>
          <p className="ml-2 font-mono font-bold text-[1.2rem]">
            Personal Informations
          </p>
        </div>
        <div className="">
          <p className="font-rubic font-bold text-[1rem] mt-[0.5rem] ml-2">
            Don't worry your informations will be kept in safe and we will not
            share this info with anyone outside. tiphic web application with SB
            system.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full mt-4">
          <div className="">
            <p className="ml-2 font-sans">Introduce your Self</p>
            <div className="mt-2">
              <input
                placeholder="Display Name"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
            </div>
            <div className="mt-4">
              <input
                placeholder="Location"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Short Bio"
                className="w-[18rem] h-[8.9rem]  ml-2 rounded-lg pl-4"
              ></textarea>
            </div>
          </div>

          <div className="w-full">
            <p className="ml-2 font-sans">Your Social media profiles</p>
            <div className="mt-2 flex">
              <input
                placeholder="Facebook profile"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
              <FiFacebook className="text-[1.2rem] ml-[-2rem] mt-4" />
            </div>
            <div className="mt-2 flex">
              <input
                placeholder="Twitter Account"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
              <FiTwitter className="text-[1.2rem] ml-[-2rem] mt-3" />
            </div>
            <div className="mt-2 flex">
              <input
                placeholder="Instagram Page"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
              <BsInstagram className="text-[1.2rem] ml-[-2rem] mt-3" />
            </div>
            <div className="mt-2 flex">
              <input
                placeholder="Youtube Channel"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
              <AiOutlineYoutube className="text-[1.5rem] ml-[-2rem] mt-3" />
            </div>
            <div className="mt-2 flex">
              <input
                placeholder="Google + Link"
                className="w-[18rem] h-[3rem] rounded-lg ml-2 pl-4 "
              />
              <BsLink45Deg className="text-[1.5rem] ml-[-2rem] mt-3" />
            </div>
          </div>
        </div>
        <div className="flex items-center ms-2 w-full mt-9">
          <Button
            color="primary"
            className="w-[43rem] h-[3rem] font-mono text-[1.2rem] hover:bg-[#03C988]"
          >
            Save Changes
          </Button>
        </div>
      </div>

      <div className=" h-[38rem] w-[20rem] overflow-hidden">
        <div className="bg-white w-[17rem] h-[18rem] mt-[2rem] shadow-sm rounded-lg ml-[2rem]">
          <p className="text-start font-sans text-[1.2rem] pt-2 font-bold ml-2">
            Skills & Knowledge
          </p>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={80}
              className="max-w-md w-[17rem] rounded-[5px]"
              size="lg"
            />
            <p className="absolute w-[17rem] pl-[3rem] text-red-100-600 text-xs">
              Self-Management
            </p>
          </div>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={50}
              className="max-w-md w-[17rem]  rounded-[5px]"
              size="lg"
            />
            <p className="absolute w-[17rem] pl-[3rem] text-red-100-600 text-xs">
              Desgin
            </p>
          </div>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={70}
              className="max-w-md w-[17rem] rounded-[5px]"
              size="lg"
            />
            <p className="absolute w-[17rem] pl-[4rem] text-red-100-600 text-xs">
              Java Script
            </p>
          </div>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={20}
              className="max-w-md w-[17rem] rounded-[5px]"
              size="lg"
            />
            <p className="absolute w-[17rem] pl-[2rem] text-red-100-600 text-xs">CSS</p>
          </div>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={60}
              className="max-w-md w-[17rem] rounded-[5px]"
              size="lg"
            />
            <p className="absolute pl-[5rem] w-[17rem]  text-red-100-600 text-xs">
              Java
            </p>
          </div>
          <div className="flex  w-[15rem] ml-4 h-[40px] text-white items-center justify-center">
            <Progress
              aria-label="Loading..."
              value={40}
              className="max-w-md w-[17rem]  rounded-[5px]"
              size="lg"
            />
            <p className="absolute w-[17rem] pl-[3rem] text-red-100-600 text-xs">
              HTML
            </p>
          </div>
        </div>
        <div className=" h-[400px] ">
          <div className="p-2 bg-white w-[17rem] h-[14rem] mt-[2rem] shadow-sm rounded-lg ml-[2rem]">
            <p className="text-[1.2rem] font-bold">Suggested People</p>
            <p className="text-xs mt-1">Based on your search results</p>
            <div className="w-full flex justify-between gap-2 pt-4">
              <User
                avatarProps={{ size: "md", src: user.avatar }}
                description={
                  <Link isExternal href={user.url} size="sm">
                    @{user.username}
                  </Link>
                }
                name={user.name}
              />
              <div className="flex gap-4">
                <Checkbox defaultSelected icon={<PlusIcon />} color="primary">
                  
                </Checkbox>
              </div>
            </div>
            <div className="w-full flex justify-between gap-2 pt-2">
              <User
                avatarProps={{ size: "md", src: user.avatar }}
                description={
                  <Link isExternal href={user.url} size="sm">
                    @{user.username}
                  </Link>
                }
                name={user.name}
              />
              <div className="flex gap-4">
                <Checkbox defaultSelected icon={<PlusIcon />} color="primary">
                  
                </Checkbox>
              </div>
            </div>
            <div className="w-full flex justify-between gap-2 pt-2">
              <User
                avatarProps={{ size: "md", src: user.avatar }}
                description={
                  <Link isExternal href={user.url} size="sm">
                    @{user.username}
                  </Link>
                }
                name={user.name}
              />
              <div className="flex gap-4">
                <Checkbox defaultSelected icon={<PlusIcon />} color="primary">
                  
                </Checkbox>
              </div>
            </div>
          </div>
            
          
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
