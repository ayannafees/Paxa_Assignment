// Importing specific images for the CardList3 component
import Card1Profile from '../../images/cardsImages/cardsLists/cardlist3/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist3/card2/Profile.svg';
import Card1Image from '../../images/cardsImages/cardsLists/cardlist3/card1/Photo.svg';
import TagYellow from '../../images/cardsImages/Tags/Tag-yellow.svg';
import TagDarkBlue from '../../images/cardsImages/Tags/Tag-darkblue.svg';
import TagRed from '../../images/cardsImages/Tags/Tag-red.svg';
import TagPurple from '../../images/cardsImages/Tags/Tag-purple.svg';
import TagGreen from '../../images/cardsImages/Tags/Tag-green.svg';
import TagLightBlue from '../../images/cardsImages/Tags/Tag-lightblue.svg';

// Importing related components
import Card from '../CardComponents/Card';
import CardTop from '../CardComponents/CardTop';
import AddCard from '../CardComponents/AddCard';

// Functional component representing a list of cards in another category
const CardList3 = () => {
  // Array of objects containing props for each Card
  const cardsData = [
    {
      image: Card1Image,
      bar1: TagPurple,
      bar2: TagRed,
      bar3: TagLightBlue,
      heading: 'Types of paper in catalog printing',
      text: 'Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).',
      profile: Card1Profile,
      comments: 34,
      likes: 23,
      attachments: 98
    },
    {
      bar1: TagDarkBlue,
      bar2: TagGreen,
      heading: 'There is no competition',
      text: 'This article is floated online with an aim to help you find the best dvd printing solution.',
      profile: Card2Profile,
      comments: 23,
      likes: 12,
      attachments: 44
    }
  ];

  return (
    // Container div with custom styling for the CardList3 component
    <div className="ml-[20px]">
      
      {/* CardTop component for the category heading */}
      <CardTop heading='Trello' />

      {/* Map over the array and render Card components dynamically */}
      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

      {/* AddCard component for adding new cards */}
      <div className=''>
        <AddCard />
      </div>
    </div>
  );
};

// Exporting the CardList3 component as the default export
export default CardList3;
