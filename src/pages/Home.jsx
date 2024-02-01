// Importing specific header and card list components
import Header1 from '../components/HeaderComponents/Header1';
import Header2 from '../components/HeaderComponents/Header2';
import CardList1 from '../components/CardsLists/CardList1';
import CardList2 from '../components/CardsLists/CardList2';
import CardList3 from '../components/CardsLists/CardList3';
import CardList4 from '../components/CardsLists/CardList4';
import CardList5 from '../components/CardsLists/CardList5';

// Functional component representing the Home page
const Home = () => {
  return (
    // Container div with custom styling for handling overflow
    <div className="overflow-x-auto overflow-y-auto h-screen">
      
      {/* Header components */}
      <Header1/>
      <Header2/>
      
      {/* Flex container for arranging card lists in a row on large screens */}
      <div className='flex flex-col lg:flex-row'>
        {/* Individual card list components */}
        <CardList1/>
        <CardList2/>
        <CardList3/>
        <CardList4/>
        <CardList5/>
      </div>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
