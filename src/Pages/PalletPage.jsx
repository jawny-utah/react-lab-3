import React, { useState } from "react";
import useSound from 'use-sound';
import { useLocation, useNavigate } from "react-router-dom";

import { palletJson } from '../utils/pallet';
import onClickSound from '../utils/src_notify.mp3';

const PalletPage = () => {
  const history = useNavigate();
  const [play] = useSound(onClickSound);
  const [visible, setVisible] = useState(false);
  const [randomWord, setRandomWord] = useState({});
  const path = useLocation();

  const resultPath = path.pathname.split('/')[2];
  const palletID = palletJson.find((item) => item.id === resultPath);

  const randomWords = ["COPIED!", "DONE", "WILL DO"];

  const handleClick = (color) => {
    navigator.clipboard.writeText(color);
    play();
    setRandomWord({ word: randomWords[Math.floor(Math.random() * randomWords.length)], color: `${color}` });
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }

  return (
    <div>
      {visible &&
        <div className="message-container" style={{ background: `${randomWord.color}` }}>
          <div></div>
          <h1>{randomWord.word}</h1>
          <span>{randomWord.color}</span>
        </div>}
      <h1 onClick={() => history('/')} >{'\u2190'} Back</h1>
      <div className="w-full flex flex-wrap flex-row">
        {palletID.colors.map((item, index) =>
          <div className="color-wrapper"
               onClick={() => handleClick(item.color)} key={index} style={{ background: `${item.color}` }}>
            <div className="font-semibold text-white text-lg uppercase pr-2">{item.name}</div>
            <div className="copy-button hidden">COPY</div>
          </div>)}
      </div>
      <h1 className="float-right my-3 font-semibold text-xl white px-3">{palletID.paletteName}</h1>
    </div>
  );
};

export { PalletPage };
