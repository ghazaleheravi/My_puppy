import React from 'react';
import { useState } from 'react';
import { getBreeds } from './Data';
import Result from './Result';

export default function Home() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const [id, setId] = useState('');
  const [submit, isSubmitted] = useState(false);
    
  function handleSubmit(e) {
    e.preventDefault();
    isSubmitted(true);

    let breeds = getBreeds();
    let reducer = breeds.reduce((acc, cur) => {
      if (cur['name'].toLowerCase() === input.toLowerCase().trim()) {
        acc['result'] = cur;
        setId(() => cur['name'].split(' ').join(''));
        setData(acc.result);
      } 
      return acc;
      }, {'result': null});

    if(reducer.result === null) {
      setData(null);
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    if (input !== '') {
      setInput('');
    }
  }

  return (
    <div className="home">
      <form className='form_home' onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor="search_input" className="label_home">Know Your "Fur"fect Pet!</label>
        <input 
          type="text"
          id="search_input"
          className="input_home"
          name="input"
          placeholder="Search for Breeds"
          required={true}
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="btn_home">Search</button>
        <button type="button" onClick={handleClick} className="delete_btn">X</button>
      </form> 
      {(submit === true && data !== null)
        ? <Result data={data} id={id}/>
        : (submit === true && data === null) 
        ? <div className="error"><p className="error_par">No match found!</p></div>
        : null
      } 
        
    </div>
   
  );
}
 
 
