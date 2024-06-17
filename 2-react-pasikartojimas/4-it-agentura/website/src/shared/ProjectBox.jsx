// import thumbnail from '/projects/project1.jpg';
import styles from './ProjectBox.module.css';
import { Link } from 'react-router-dom';

const ProjectBox = ({ image, title, description }) => {
    return (
        <div className={styles.product_box}>
            <div className={styles.image_wrapper}>
                <Link to="/portfelis/kazkoks">
                    <img src={image} alt="Project" />
                </Link>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProjectBox
