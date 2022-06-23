// import * as React from "react";
import React from "react";
import Recipes from './Recipes';
import Whatever from './Whatever';
import '../styles/index.scss';
import sword from '../assets/images/swc-sword.png';
import swordSvg from '../assets/images/sword.svg?url';
import SwordSvg from '../assets/images/sword.svg';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh hai, React</h1>
        </section>
        <img src={sword} alt="sword" width={250}/>
        <img src={swordSvg} alt="sword" width={250}/>
        <SwordSvg className='sword' />
        <Recipes />
        <Whatever />
      </main>
    </>
  );
};

export default App;
