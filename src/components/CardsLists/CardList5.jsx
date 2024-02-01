// Importing specific images for the CardList5 component
import Card1Profile from '../../images/cardsImages/cardsLists/cardlist5/card1/Profile.svg';
import Card2Profile from '../../images/cardsImages/cardsLists/cardlist5/card2/Profile.svg';
import Card3Profile from '../../images/cardsImages/cardsLists/cardlist5/card3/Profile.svg';
import Card3Image from '../../images/cardsImages/cardsLists/cardlist5/card3/Photo.svg';
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
const CardList5 = () => {
  // Array of objects containing props for each Card
  const cardsData = [
    {
      bar1: TagYellow,
      bar2: TagRed,
      bar3: TagPurple,
      heading: 'At-home treatments for beauty on a budget',
      profile: Card1Profile,
      text: 'The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.',
      comments: 87,
      likes: 54,
      attachments: 32
    },
    {
      bar1: TagPurple,
      bar2: TagGreen,
      heading: 'Home business advertising ideas',
      text: 'Successful businesses know the importance of building and maintaining good working.',
      profile: Card2Profile,
      comments: 13,
      likes: 11,
      attachments: 43
    },
    {
      image: Card3Image,
      bar1: TagLightBlue,
      bar2: TagYellow,
      heading: 'Tips for choosing the perfect gloss for your lips',
      text: 'With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.',
      profile: Card3Profile,
      comments: 21,
      likes: 23,
      attachments: 12
    }
  ];

  return (
    // Container div with custom styling for the CardList5 component
    <div className="ml-[20px]">
      
      {/* CardTop component for the category heading */}
      <CardTop heading='Final' />

      {/* Map over the array and render Card components dynamically */}
      {cardsData.map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}

      {/* AddCard component is hidden for this card list */}
      <div className='hidden'>
        <AddCard />
      </div>
    </div>
  );
};

// Exporting the CardList5 component as the default export
export default CardList5;
