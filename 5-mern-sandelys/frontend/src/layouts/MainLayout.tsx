import { Link, Outlet } from "react-router-dom"
import styles from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div><nav className={styles.nav}>
        <div>
            <Link to='/'>Sandėlys</Link>
        </div>
        <ul>
            <li><Link to='/'>Pradžia</Link></li>
            <li><Link to='/sukurti'>Sukurti naują</Link></li>
        </ul>
    </nav>
            <Outlet />
        </div>

    )
}

export default MainLayout