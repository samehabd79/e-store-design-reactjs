import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        {/* left div */}
        <div className="left flex flex-1 items-center">
          <div className="cursor-pointer text-[16px] mobile:hidden">En</div>
          <div className="searchInput flex border-[2px] focus-within:border-[#007AFF] transition-all border-solid border-lighgrey rounded-md items-center ml-[10px] p-[5px]">
            <input 
                className="input outline-none mobile:w-[50px]" 
                placeholder="Search..." 
                type="text" 
                />
                <Search/>
          </div>
        </div>

        {/* Logo */}
        <div className="center flex-1 text-center mobile:ml-6">
            <div className="logo font-bold mobile:text-sm"><Link to={"/"} className="cursor-pointer">E-Store</Link></div>
        </div>

        {/* Right Div */}
        <div className='right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]'>
            <div className='text-[14px] font-bold cursor-pointer ml-[25px] mobile:ml-[5px] hover:text-[#007AFF]'>
              <Link to={"/Register"}>
                Register
              </Link>
              
            </div>
            <div className='text-[14px] font-bold cursor-pointer ml-[25px] mobile:ml-[5px] hover:text-[#007AFF]'>
              <Link to={'/Login'}>
                <button>Login</button>
              </Link>
            </div>
            <div className='text-[14px] font-bold cursor-pointer ml-[25px] mobile:ml-[5px] hover:text-[#007AFF]'>
                <Badge badgeContent={2} color='success'>
                    <Link to={'/Cart'}>
                      <ShoppingCartOutlined/>
                    </Link>
                </Badge>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
