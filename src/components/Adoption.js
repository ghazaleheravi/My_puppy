import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';

function Adopt() {
  const [data, setData] = useState([]);

  const key = 'ZEWjRc5xybl8QtBNgfb7KeLMlxKDJQl5C9owWvxgDeYymORjJ3';
  const secret = 'rHPHoqH0S9KGHnU8GRZ4pCA01nEqOyv1cTpSBWMR';
  const urlAuth = "https://api.petfinder.com/v2/oauth2/token";
  const status = 'adoptable';

  useEffect(() => {
    fetch(urlAuth, {
      method: 'POST',
      body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return fetch('https://api.petfinder.com/v2/animals?status=' + status, {
          headers: {
            'Authorization': data.token_type + ' ' + data.access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            setData(result.animals);
        }).catch(function(err) {
            console.log('somthing went wrong', err.name);
        });
      });
    }, []);
  

  return (
    <>
    <div className="adoption_container">
      {data.map(animal => (  
        <div key={animal.id} className="img_box">
          Breed: {animal.breeds.primary}<br/>
          Age: {animal.age}<br/>
          Gender: {animal.gender}<br/>
          Shoted: {animal.attributes.shots_current ? 'Yes' : 'No'}<br/>
          Neutered: {animal.attributes.spayed_neutred ? 'Yes' : 'No'}<br/>
          Country: {animal.contact.address.country}<br/>
          State: {animal.contact.address.state}<br/>
          City: {animal.contact.address.city}<br/>
          <a href={`mailto:${animal.contact.email}`}>Email: {animal.contact.email}</a><br/>
          <a href={`tel:${animal.contact.phone}`}>Phone: {animal.contact.phone}</a><br/>
          {animal.photos.length !== 0 
            ? <img 
                id="adoption_image"
                src={animal.photos[0]['small']} 
                alt="" 
                srcSet={animal.photos[0]['small'],
                        animal.photos[0]['medium'],
                        animal.photos[0]['large']
                      }
                
                /> 
            : <p>There is no image available.</p>
          }
        
        </div>    
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Adopt;