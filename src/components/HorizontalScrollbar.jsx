import React, {useContext} from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import BodyPart from './BodyPart'
import {VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../pics/right-arrow.png';
import LeftArrowIcon from '../pics/left-arrow.png';



const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



const HorizontalScrollbar = ({ data,bodyPart,setBodyPart}) => {
  return (
    <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
    
    <LeftArrow />
    <RightArrow />
    
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
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