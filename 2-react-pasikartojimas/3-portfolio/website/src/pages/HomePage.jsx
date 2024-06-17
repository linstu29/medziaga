import { Link } from 'react-router-dom';
import './HomePage.css';
import NewestProjects from '../shared/NewestProjects';
import NewestWorkExp from '../shared/NewestWorkExp';

const HomePage = () => {
    return (
        <>
            <header>
                <div className="container">
                    <h1>Labas, aš esu Vardenis pavardenis</h1>
                    <p>Full-stack JavaScript programuotojas</p>
                    <Link to="/projektai" className='btn'>Mano projektai</Link>
                </div>
            </header>

            <NewestProjects />
            <NewestWorkExp />
        </>
    )
}

export default HomePage
