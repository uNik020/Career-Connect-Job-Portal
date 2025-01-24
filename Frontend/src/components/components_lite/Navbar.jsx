import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function Navbar() {
  const { user} = useSelector((store)=>store.auth); // Replace with actual user authentication logic

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Career<span className="text-[#512b95]">Connect</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            <li><Link to={"/Home"}>Home</Link></li>
            <li>
            <Link to={"/Browse"}>Browse</Link>
            </li>
            <li><Link to={"/Jobs"}>Jobs</Link></li>
          </ul>
          {!user ? (
            <div className=" flex items-center gap-2">
            <Link to={"/login"}>
              {" "}
              <Button variant="outline">Login</Button>
            </Link>
            <Link to={"/register"}>
              {" "}
              <Button className="bg-[#512b95]  hover:bg-[#522b959d]">
                Register
              </Button>
            </Link>
          </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex items-center gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium">User</h1>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex items-center gap-2 w-fit cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to={"/Profile"}>View Profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-2 w-fit cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
