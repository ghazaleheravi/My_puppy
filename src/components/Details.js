import { Link } from 'react-router-dom';
import { getBreeds } from './Data';
import Footer from './Footer';

function Details() {
  
  let breeds = getBreeds();
  const filterd = breeds.filter(element => (('?'+ element.name.split(' ').join('')).localeCompare(window.location.search) === 0));

  return (
    <>
    <div className='detail_container'>
      <h1>{filterd[0]['name']}</h1>
      <p>Height: {filterd[0]['Height']}</p>
      <p>Weight: {filterd[0]['Weight']}</p>
      <p>Lifespan: {filterd[0]['Lifespan']}</p>
      <div>
        <h4>Behavior</h4>
        <p>{filterd[0]['behavior']}</p>
      </div>
      <div>
        <h4>Exercises</h4>
        <p>{filterd[0]['exercises']}</p>
      </div>
      <div>
        <h4>Grooming</h4>
        <p>{filterd[0]['grooming']}</p>
      </div>
      <div>
        <h4>Nutrition</h4>
        <p>{filterd[0]['nutrition']}</p> 
      </div>
      <Link to='/'>Back to Home &rarr;</Link>
    </div> 
    <Footer />
    </>
  ); 
}

export default Details;