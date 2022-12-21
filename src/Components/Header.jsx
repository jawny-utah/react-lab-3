import React from "react";
import useSound from 'use-sound';

import boopSfx from '../utils/src_notify.mp3';

const Header = () => {
  const [play] = useSound(boopSfx);

  return (
    <div>
      <h1 className="font-semibold text-xl text-white" onClick={play}>
        FLAT UI COLORS 2
      </h1>
    </div>
  )
}

export { Header };
