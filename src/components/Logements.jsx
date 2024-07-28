import CardLocation from '../components/CardLocation'
import dataLogements from '../data/dataloges.json';

const Logements = () => {

    return (
        <div className='gallery-logement'>
            {dataLogements.map((logement) => (
                <CardLocation title={logement.title} key={logement.id}
                    imageUrl={logement.cover}
                    id={logement.id} />
            ))}
        </div>
    );
};

export default Logements;

