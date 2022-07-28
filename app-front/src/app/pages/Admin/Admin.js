import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChartBarIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";

import { FolderOpenIcon } from "@heroicons/react/solid";
import AdminAnalytics from "./AdminAnalytics";
import AdminUser from "./AdminUser";
import AdminCategory from "./AdminCategory";

function Admin() {
  const [open, setOpen] = useState(false);
  const [analyticOpen, setIsAnalyticOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);

  return (
    <div className="flex ">
      <div
        className={`${
          open ? "w-56" : "w-20"
        } duration-300 p-5 pt-8 h-screen bg-grayDark relative`}
      >
        <ChevronLeftIcon
          onClick={(e) => {
            setOpen(!open);
          }}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full bg-silver ${
            !open && "rotate-180"
          }`}
        />
        <h1
          className={` text-yellow origin-left font-medium text-xl duration-300 pb-8 pl-2 ${
            !open && "scale-0"
          }`}
        >
          My Dashboard
        </h1>

        <ul
          className="pt-5 pb-4 "
          onClick={() => {
            setIsAnalyticOpen(!analyticOpen);
            setIsUserOpen(false);
            setIsCatOpen(false);
          }}
        >
          <li
            className={`text-silver text-sm flex items-center gap-x-4  cursor-pointer p-2 hover:bg-light hover:text-grayDark rounded-md duration-300 `}
          >
            <ChartBarIcon className="w-7" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Analytics
            </span>
          </li>
        </ul>
        {/* ------------------ */}
        <ul
          className="pt-5 pb-4 "
          onClick={() => {
            setIsAnalyticOpen(false);
            setIsUserOpen(!isUserOpen);
            setIsCatOpen(false);
          }}
        >
          <li
            className={`text-silver text-sm flex items-center gap-x-4  cursor-pointer p-2 hover:bg-light hover:text-grayDark rounded-md duration-300 `}
          >
            <UserIcon className="w-7" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Users
            </span>
          </li>
        </ul>
        {/* ------------------ */}

        <ul
          className="pt-5 pb-4 "
          onClick={() => {
            setIsCatOpen(!isCatOpen);
            setIsAnalyticOpen(false);
            setIsUserOpen(false);
          }}
        >
          <li
            className={`text-silver text-sm flex items-center gap-x-4  cursor-pointer p-2 hover:bg-light hover:text-grayDark rounded-md duration-300 `}
          >
            <FolderOpenIcon className="w-7" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Categories
            </span>
          </li>
        </ul>
      </div>

      <div className="p-7  h-screen">
        {analyticOpen && <AdminAnalytics />}
        {isUserOpen && <AdminUser />}
        {isCatOpen && <AdminCategory />}
        {!analyticOpen && !isUserOpen && !isCatOpen && <div>hello Admin</div>}
      </div>
    </div>
  );
}

export default Admin;
