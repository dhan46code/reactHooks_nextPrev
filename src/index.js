import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './style.css';
import ListBounty from './ListBounty';

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>one piece biography | big bounty</h2>
        </div>
        <ListBounty />
      </section>
    </main>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
