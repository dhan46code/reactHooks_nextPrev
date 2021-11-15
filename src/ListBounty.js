import React, { useState } from 'react';
import person_bounty from './data';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

const ListBounty = () => {
  const [index, setIndex] = useState(0);
  const { id, img, name, member, motivation, bounty } = person_bounty[index];

  const prevBtn = () => {
    // update
    setIndex((index) => {
      let newIndex = index - 1;
      return checkPosisi(newIndex);
    });
  };

  const nextBtn = () => {
    // update
    setIndex((index) => {
      let posisiIndex = index + 1;
      return checkPosisi(posisiIndex);
    });
  };

  const checkPosisi = (number) => {
    if (number > person_bounty.length - 1) {
      return 0;
    }
    if (number < 0) {
      return person_bounty.length - 1;
    }
    return number;
  };

  // if clicked pic
  const randomPirates = () => {
    let randomPic = Math.floor(Math.random() * person_bounty.length);
    if (randomPic === index) {
      randomPic = randomPic + 1;
    }
    return setIndex(checkPosisi(randomPic));
  };
  return (
    <article className='pirates'>
      <div className='img-container' onClick={randomPirates}>
        <img src={img} alt={name} className='pirates-pic' />
      </div>
      <div className='info-pirates'>
        <h3 class='name'>{name}</h3>
        <h3 class='member'>{member}</h3>
        <h3 class='bounty'>${bounty}</h3>
        <p class='motivation'>" {motivation} "</p>
      </div>
      <div className='button-group'>
        <button className='prevBtn' onClick={prevBtn}>
          <AiOutlineDoubleLeft />
        </button>
        <button className='nextBtn' onClick={nextBtn}>
          <AiOutlineDoubleRight />
        </button>
      </div>
    </article>
  );
};

export default ListBounty;
