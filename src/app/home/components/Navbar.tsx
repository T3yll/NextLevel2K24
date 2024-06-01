"use client";
import { useRouter } from "next/navigation";
import DropDownMenu from "../components/DropDownMenu";
import NavSearch from "../components/NavSearch";
import Image from "next/image";

export default function Navbar({ user }: { user: any }) {
  const router = useRouter();
  return (
    <nav className="flex h-[15%] flex-row bg-[#000000] bg-opacity-[20%] items-center justify-between">
      <div className="ml-16">
        <Image
          onClick={() => {
            router.push("/home");
          }}
          alt="NextLevelLogoMalaisant"
          src="/NextLevelLogoMalaisant.png"
          // fill
          width={80}

          height={80}
          className="h-[80px] w-[80px] cursor-pointer"
        />
      </div>

      {/* <button onClick={handleClick}>add</button> */}

      <div className="flex flex-row gap-8 mr-16 items-center">
        {/* <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.8125 21.875V12.5C32.8125 10.428 31.9894 8.44086 30.5243 6.97573C29.0591 5.5106 27.072 4.6875 25 4.6875C22.928 4.6875 20.9409 5.5106 19.4757 6.97573C18.0106 8.44086 17.1875 10.428 17.1875 12.5V21.875M40.8458 17.7229L43.4771 42.7229C43.6229 44.1083 42.5396 45.3125 41.1458 45.3125H8.85417C8.52543 45.3129 8.2003 45.244 7.89989 45.1105C7.59948 44.9771 7.33052 44.7819 7.11046 44.5376C6.89041 44.2934 6.7242 44.0056 6.62261 43.693C6.52103 43.3804 6.48635 43.0498 6.52083 42.7229L9.15417 17.7229C9.21491 17.147 9.48672 16.614 9.91719 16.2266C10.3477 15.8392 10.9063 15.6249 11.4854 15.625H38.5146C39.7146 15.625 40.7208 16.5312 40.8458 17.7229ZM17.9687 21.875C17.9687 22.0822 17.8864 22.2809 17.7399 22.4274C17.5934 22.5739 17.3947 22.6562 17.1875 22.6562C16.9803 22.6562 16.7816 22.5739 16.6351 22.4274C16.4886 22.2809 16.4062 22.0822 16.4062 21.875C16.4062 21.6678 16.4886 21.4691 16.6351 21.3226C16.7816 21.1761 16.9803 21.0937 17.1875 21.0937C17.3947 21.0937 17.5934 21.1761 17.7399 21.3226C17.8864 21.4691 17.9687 21.6678 17.9687 21.875ZM33.5937 21.875C33.5937 22.0822 33.5114 22.2809 33.3649 22.4274C33.2184 22.5739 33.0197 22.6562 32.8125 22.6562C32.6053 22.6562 32.4066 22.5739 32.2601 22.4274C32.1136 22.2809 32.0312 22.0822 32.0312 21.875C32.0312 21.6678 32.1136 21.4691 32.2601 21.3226C32.4066 21.1761 32.6053 21.0937 32.8125 21.0937C33.0197 21.0937 33.2184 21.1761 33.3649 21.3226C33.5114 21.4691 33.5937 21.6678 33.5937 21.875Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            // stroke-strokeLinejoin="round"
            // stroke-
          />
        </svg> */}
        <span className="text-xl">
          Balance : {Number(user.balance).toFixed(2)}$
        </span>

        <DropDownMenu isAdmin={user.isAdmin} name={"base"} />
      </div>
    </nav>
  );
}
