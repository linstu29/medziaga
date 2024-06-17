import styles from './HomePageHeader.module.css';
import client1 from '/home/client1.svg';
import client2 from '/home/client2.svg';
import client3 from '/home/client3.svg';
import client4 from '/home/client4.svg';
import headerImage from '/home/header-image.png';

const HomePageHeader = () => {
    return (
        <header className={styles.header}>
            <div className={["container", styles.header_container].join(' ')}>
                <div className={styles.header_col}>
                    <div className={styles.header_first_text_block}>
                        <h1>Pasiruošę pakelti <span>savo verslo augimą</span> į kitą lygį?</h1>
                        <p className={styles.header_description}>Išbandykite nemokamą bandomąją versiją ir keliaukite į naują verslo lygį kartu su mumis!</p>
                        <a href="#" className='btn btn-light btn-icon'>Išbandykite nemokamai</a>
                    </div>
                    <div>
                        <p className={styles.header_clients_desciption}>Mumis pasitiki pirmaujantys prekės ženklai</p>
                        <div>
                            <img src={client1} alt="Mindfulness" />
                            <img src={client2} alt="Leafe" />
                            <img src={client3} alt="Automation" />
                            <img src={client4} alt="Greenish" />
                        </div>
                    </div>
                </div>
                <div className={styles.header_col}>
                    <img className={styles.header_image} src={headerImage} alt="Header image" />
                </div>
            </div>
        </header>
    )
}

export default HomePageHeader
