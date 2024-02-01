// Importing specific image for the CardTop component
import Menu from '../../images/cardsImages/Combined Shape.svg';

// Functional component representing the top part of a Card component
const CardTop = ({ heading }) => {
  return (
    // Container div with custom styling for the CardTop component
    <div className="max-w-[362px] bg-[#F4F4F4] border border-gray-200 rounded-lg shadow mb-3 cursor-pointer">
      
      {/* Top section with heading and menu icon */}
      <div className='flex justify-between items-center m-5 my-2'>
        
        {/* Card heading */}
        <p className="mb-2 text-black font-poppins text-16 font-medium text-left">{heading}</p>
        
        {/* Menu icon */}
        <img className="" src={Menu} alt="" />
      </div>
    </div>
  );
};

// Exporting the CardTop component as the default export
export default CardTop;
