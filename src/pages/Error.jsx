
import { Link } from 'react-router-dom';
import '../sass/error.scss'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Error() {

    return (
        <div>
            <Navigation />

            <section className="contenuError">
                <h1 className="titleError">404</h1>
                <p className="textError">Oups! La page que vous demandez n'existe pas</p>
                <Link to='/' className="linkError">Retourner sur la page d'accueil</Link>
            </section>

            <Footer />
        </div>
    )
}

export default Error;