// Functional component representing an "Add Card" component
const AddCard = () => {
  return (
    // Container div with custom styling for the "Add Card" component
    <div className="w-[362px] h-[160px] border-2 border-dashed border-black border-opacity-20 rounded-2xl bg-white flex justify-center items-center cursor-pointer mb-2">
      
      {/* Text indicating the option to add a new card */}
      <p className="mb-2 text-black font-poppins text-16 font-normal text-left">+ Add new card</p>
    </div>
  );
};

// Exporting the AddCard component as the default export
export default AddCard;
