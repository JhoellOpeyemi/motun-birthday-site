import PropTypes from "prop-types";

import { StyledWrapper } from "../styles/Words.styled";

const Words = ({ item }) => {
  const wordsArray = [
    "Happy birthday to the one who fills my heart with love and brings endless joy into my life. You are the greatest gift I could ever ask for.",
    "On your special day, I want to remind you how much you mean to me. You are not only my lover but also my best friend.",
    "I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you, I love you. 20 'I love you' to celebrate your 20th birthday",
    "To the love of my life, may this birthday be as incredible as the love we share.",
    "On this day, I celebrate not only your birth but also the day you came into my life and made it complete.",
    "To the most beautiful woman, happy birthday! Thank you for being the love of my life and my constant source of inspiration",
    "As we celebrate your special day, I want you to know that my love for you grows stronger with each passing year. Happy birthday, my sugar",
    "You hold the key to my heart. You are the reason behind my smiles and the source of all my happiness",
    "May this day mark the beginning of another wonderful year together, filled with countless beautiful memories",
    "On your birthday, I want to remind you how special you are to me. You are not just my lover but also my soulmate",
    "To the person who brings out the best in me, happy birthday! my forever love",
    "This will be your best year yet. My wonder woman, keep smiling.",
  ];
  return (
    <StyledWrapper>
      <p>{wordsArray[item]}</p>
    </StyledWrapper>
  );
};

Words.propTypes = {
  item: PropTypes.number,
};

export default Words;
