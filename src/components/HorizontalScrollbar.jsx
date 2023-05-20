import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
//import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
// import RightArrowIcon from '../pics/right-arrow.png';
// import LeftArrowIcon from '../pics/left-arrow.png';
// import { ScrollMenu } from 'react-horizontal-scrolling-menu/dist/types';
//import { VisibilityContext } from 'react-horizontal-scrolling-menu';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ display: "inline-block" }}
        >
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </div>
  );
};


export default HorizontalScrollbar