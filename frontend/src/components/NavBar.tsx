import { useNavigate } from "react-router";
import { authClient } from "../services/auth-client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const { data: currentUser } = authClient.useSession();
  const [userName, setUserName] = useState("");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (currentUser) setUserName(currentUser.user.name);
  }, [currentUser]);

  return (
    <div className="flex justify-between items-center pt-[12px] pb-[12px] pl-[50px] pr-[50px] bg-[#0C3B2E]">
      <h2 onClick={() => handleHomeClick()} className="text-white">
        WhatToEat
      </h2>

      <div className="flex gap-[10px]">
        {userName ? (
          <button
            onClick={() => handleProfileClick()}
            className="border-2 border-[#FFBA00] rounded-[10px] px-[20px] py-[6px] bg-[#FFBA00]"
          >
            {userName}
          </button>
        ) : (
          <>
            <button
              onClick={() => handleLoginClick()}
              className="border-2 border-[#FFBA00] rounded-[10px] px-[20px] py-[6px] bg-[#FFBA00] "
            >
              <p className="text-[16px] p-0 m-0 text-white font-medium">
                Login
              </p>
            </button>
            <button
              onClick={() => handleRegisterClick()}
              className="border-2 border-[#FFBA00] rounded-[10px] px-[20px] py-[6px]"
            >
              <p className="text-[16px] p-0 m-0 text-white font-medium">
                Register
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
