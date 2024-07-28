import EtoileActive from '../assets/etoile-pleine.png';
import EtoileInactive from '../assets/etoile-vide.png';
import '../sass/rating.scss'

function Rating({ rating }) {

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img className='stars' key={i} src={EtoileActive} />); // étoile pleine
    } else {
      stars.push(<img className='stars' key={i} src={EtoileInactive} />); // étoile vide
    }
  }

  return <div className='rating'>{stars}</div>;
}

export default Rating;
