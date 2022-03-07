import React from "react";
import { Link } from 'react-router-dom';
import Details from './Details';
import { useState, useEffect } from 'react';

export default function Result(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  
  const url = `https://dog.ceo/api/breed/${props['data']['name'].toLowerCase()}/images/random`;
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setImage(result.message))
  }, [props.data.name]); 

  function handleClick() {
    setName(props.data.name);
    <Details name={name}  />
  }

  return (
    <div className="result">
      <Link to={
        {
          pathname:`/home/${props.id}`,
          search:`${props.id}`
        }
        }>
          <img src={image} className='img_result' width='340' height='250' />
          <button type='button' onClick={handleClick} className='btn_result'>
            <p id="par_btn">About {props.data.name}</p>
          </button>
      </Link>
    </div>
  );
}