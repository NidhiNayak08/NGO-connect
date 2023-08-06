import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import Data from "./MOCK_DATA.json";



function Search(){
    {
        Data.map((post) => (
          <div className="box" key={post.id}>
            <p>{post.email}</p>
            <p>{post.address}</p>
          </div>
        ));
      }
    return (
      <div>
        <input placeholder="Enter Post Title"/>
      </div>
   )

  }
  export default Search;

 