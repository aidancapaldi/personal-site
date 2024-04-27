import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Theater/Cell';
import data from '../data/theater';

const Theater = () => (
  <Main
    title="Theater"
    description="Learn about Aidan Capaldi's theater."
  >
    <article className="post" id="theater">
      <header>
        <div className="title">
          <h2><Link to="/theater">Theater</Link></h2>
          <p>A look into treasured moments with my most recent company, NU Stage.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Theater;
