import styles from './HomePageProcess.module.css';
import ikonaIdeja from '/home/process/ikona-ideja.svg';
import ikonaKuryba from '/home/process/ikona-kuryba.svg';
import ikonaTyrimai from '/home/process/ikona-tyrimai.svg';
import ikonaTestavimas from '/home/process/ikona-testavimas.svg';

const HomePageProcess = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div>
                    <p className='section-name'>Procesas</p>
                    <h2 className='section-heading'>Procesas, kuris skatina pažangą</h2>
                </div>
                <div className={styles.steps}>
                    <div className={styles.process_step}>
                        <div className={styles.top}>
                            <div className={styles.icon}>
                                <img src={ikonaIdeja} alt="Idėjų generavimas" />
                            </div>
                            <h3>Idėjų generavimas</h3>
                        </div>
                        <div className={styles.bottom}>
                            <p>Ideacijos procesas yra esminė fazė dizaino procese, kurioje vyksta kūrybinis mąstymas ir idėjų generavimas.</p>
                        </div>
                    </div>
                    <div className={styles.process_step}>
                        <div className={styles.top}>
                            <div className={styles.icon}>
                                <img src={ikonaTyrimai} alt="Tyrimai" />
                            </div>
                            <h3>Tyrimai</h3>
                        </div>
                        <div className={styles.bottom}>
                            <p>Tyrimai yra kritiška dizaino proceso dalis, padedanti dizaineriams suprasti problemą.</p>
                        </div>
                    </div>
                    <div className={styles.process_step}>
                        <div className={styles.top}>
                            <div className={styles.icon}>
                                <img src={ikonaKuryba} alt="Kūryba" />
                            </div>
                            <h3>Kūryba</h3>
                        </div>
                        <div className={styles.bottom}>
                            <p>Dizaino kūrimo procesas apima keletą pagrindinių žingsnių, siekiant užtikrinti aiškumą, efektyvumą ir sėkmingą įgyvendinimą.</p>
                        </div>
                    </div>
                    <div className={styles.process_step}>
                        <div className={styles.top}>
                            <div className={styles.icon}>
                                <img src={ikonaTestavimas} alt="Testavimas" />
                            </div>
                            <h3>Testavimas</h3>
                        </div>
                        <div className={styles.bottom}>
                            <p>Testavimas yra esminė dizaino proceso stadija, užtikrinanti, kad produktas ar sistema atitiktų nustatytus reikalavimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageProcess
