import { NavLink, Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="brand">
                    {/* <a href="/">Vardenis Pavardenis portfolio</a> */}
                    <Link to="/">Vardenis Pavardenis portfolio</Link>
                </div>
                <ul>
                    <li><NavLink to='/'>Pradžia</NavLink></li>
                    <li><NavLink to='/projektai'>Projektai</NavLink></li>
                    <li><NavLink to='/cv'>CV</NavLink></li>
                    <li><NavLink to='/susisiekti'>Susisiekti</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar