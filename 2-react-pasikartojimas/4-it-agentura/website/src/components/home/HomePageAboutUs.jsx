import styles from './HomePageAboutUs.module.css';
import foto1 from '/home/about/img1.jpg';
import foto2 from '/home/about/img2.jpg';
import foto3 from '/home/about/img3.jpg';

const HomePageAboutUs = () => {
    return (
        <section className={styles.section}>
            <div className={["container", styles.section_container].join(' ')}>
                <div className={styles.images_col}>
                    <img src={foto1} className={[styles.block_img, styles.img1].join(' ')} alt="Foto 1" />
                    <img src={foto2} className={[styles.block_img, styles.img2].join(' ')} alt="Foto 2" />
                    <img src={foto3} className={[styles.block_img, styles.img3].join(' ')} alt="Foto 3" />
                </div>
                <div className={styles.texts_col}>
                    <p className={['section-name', styles.name].join(' ')}>Apie mus</p>
                    <h2 className={['section-heading', 'light', styles.heading].join(' ')}>Pagrindinė misija slypinti už visų mūsų darbų</h2>
                    <p className={styles.description}>Sukurti technologijų sprendimus, kurie transformuoja ir praturtina verslo veiklą..</p>
                    <div className={styles.numbers_block}>
                        <div>
                            <p className={styles.numbers}>330 +</p>
                            <p className={styles['numbers-descriptions']}>Verslams padėta</p>
                        </div>
                        <div>
                            <p className={styles.numbers}>230 +</p>
                            <p className={styles['numbers-descriptions']}>Sugeneruota pajamų</p>
                        </div>
                    </div>
                    <a href="#" className='btn btn-icon btn-light'>Išbandykite nemokamai</a>
                </div>
            </div>
        </section>
    )
}

export default HomePageAboutUs
