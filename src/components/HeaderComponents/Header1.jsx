// Importing specific icons and images for the header
import { FaSearch } from 'react-icons/fa';
import Boardsvg from '../../images/headerImages/trello-mark-blue.svg';
import Iconssvg from '../../images/headerImages/Icons.svg';
import Logo from '../../images/headerImages/Logo.svg';
import User from '../../images/headerImages/User.svg';
import Rectangle from '../../images/headerImages/Rectangle.svg';

// Functional component representing the first part of the header
const Header1 = () => {
  return (
    // Container div for the entire header with custom styling
    <div className="header flex h-[58px] flex-wrap items-center border-b-[1px]">
      
      {/* Left side of the header - Logo and Boards */}
      <div className="header-left flex flex-wrap sm:justify-start lg:justify-between items-center ml-[16px] lg:ml-[30px] lg:w-[800px]">
        
        {/* Logo section */}
        <div className="logo hidden lg:block cursor-pointer">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Rectangle image */}
        <img src={Rectangle} alt="rectangle" />

        {/* Boards section */}
        <div className="boards flex flex-wrap justify-center items-center cursor-pointer">
          <img src={Boardsvg} alt="Logo" />
          <p className='hidden lg:block'>Boards</p>
        </div>

        {/* Another Rectangle image */}
        <img className="hidden lg:block" src={Rectangle} alt="rectangle" />

        {/* Middle section - Search Box with Search Icon */}
        <div className="search-box ml-8 lg:ml-0 flex relative">
          {/* Search input box */}
          <input
            className="h-[30px] border-1 rounded-[10px] bg-[#F4F4F4] hidden lg:block lg:w-[512px] lg:pr-[30px]"
            type="text"
          />
          {/* Search icon */}
          <FaSearch className="search-icon absolute right-1 top-0 bottom-0 m-auto text-gray-300 lg:text-black cursor-pointer" />
        </div>
      </div>

      {/* Right side of the header - Profile Image and Icons */}
      <div className="profile ml-auto lg:mr-[30px] mr-[15px] flex flex-wrap justify-center items-center">
        {/* Icons section */}
        <div className="icons mr-[30px] cursor-pointer">
          <img src={Iconssvg} alt="Logo" />
        </div>

        {/* User profile image */}
        <img src={User} alt="Logo" className='cursor-pointer'/>
      </div>
    </div>
  );
};

// Exporting the Header1 component as the default export
export default Header1;
