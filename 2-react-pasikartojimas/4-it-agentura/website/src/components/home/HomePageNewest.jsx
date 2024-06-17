import ProjectBox from '../../shared/ProjectBox';
import styles from './HomePageNewest.module.css';

import project1Thumbnail from '/projects/project1.jpg';
import project2Thumbnail from '/projects/project2.jpg';
import project3Thumbnail from '/projects/project3.jpg';
import project4Thumbnail from '/projects/project4.jpg';

const HomePageNewest = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div>
                    <h2 className='section-heading'>Naujausi darbai</h2>
                </div>
                <div className={styles.columns}>
                    <div className={styles.col}>
                        <ProjectBox
                            image={project1Thumbnail}
                            title='Tinklalapių vartotojo sąsajos dizainas'
                            description='Kūrybinis vartotojo sąsajos dizainas'
                        />
                        <ProjectBox
                            image={project2Thumbnail}
                            title='Vartotojo sąsajos dizainas'
                            description='Kūrybinis logotipo atnaujinimas'
                        />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.link_box}>
                            <a href="#" className='btn btn-icon btn-dark'>Išbandykite nemokamai</a>
                        </div>
                        <ProjectBox
                            image={project3Thumbnail}
                            title='Kurti skaitmeninę strategiją'
                            description='Socialinių tinklų Marketingas'
                        />
                        <ProjectBox
                            image={project4Thumbnail}
                            title='Reklaminių banerių kūrimas'
                            description='Grafinis dizainas'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageNewest
