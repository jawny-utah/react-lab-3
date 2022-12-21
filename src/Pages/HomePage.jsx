import React from "react";

import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Pallet } from "../Components/Pallet";
import { palletJson } from '../utils/pallet';

const HomePage = () => {
  return (
    <div style={{ backgroundImage: "url(./assets/images/bg.png)" }}>
      <div className="py-8 container mx-auto" style={{ maxWidth: "1100px" }}>
        <Header />
        <div>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            {palletJson.map((item, index) => <Pallet key={index} namePallet={item.paletteName}
              color={item.colors} id={item.id} />)}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { HomePage };
