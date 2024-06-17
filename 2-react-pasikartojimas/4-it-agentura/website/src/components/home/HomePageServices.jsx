import styles from './HomePageServices.module.css';

const HomePageServices = () => {
    return (
        <section className={styles.section_services}>
            <div className="container">
                <div className={styles.section_title}>
                    <p className='section-name'>Mūsų Paslaugos</p>
                    <h2 className='section-heading'>Paslaugos, kurios turės didelį poveikį jūsų verslui</h2>
                </div>
                <div className={styles.section_content}>
                    <div className="block">
                        <div className="icon">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.41508 26.6413L1 30L4.35874 21.5849M9.41508 26.6413L26.9018 9.15454M9.41508 26.6413L8.74234 22.2566L4.35874 21.5849M4.35874 21.5849L21.8455 4.09819M26.9018 9.15454L21.8455 4.09819M26.9018 9.15454L28.4718 7.58452C29.8681 6.18825 29.8681 3.92444 28.4718 2.52817V2.52817C27.0756 1.1319 24.8117 1.1319 23.4155 2.52817L21.8455 4.09819" stroke="#0C1A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Turinio Marketingas</h3>
                        <p>Mūsų specialistai kuria įtraukiantį turinį, kuris iškarto patiks jūsų auditorijai ir skatins natūralų srautą.</p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9115 6.43237L9.14887 8.212C8.35372 8.42125 7.95614 8.52588 7.65416 8.76997C7.55491 8.85019 7.46442 8.94068 7.3842 9.03993C7.14011 9.34191 7.03549 9.73948 6.82624 10.5346L3.00811 25.0435C2.03255 28.7507 1.54476 30.6042 2.31054 31.7811C2.5517 32.1518 2.86776 32.4678 3.23838 32.709C4.41528 33.4748 6.26885 32.987 9.97599 32.0114L24.4849 28.1933C25.28 27.984 25.6776 27.8794 25.9796 27.6353C26.0788 27.5551 26.1693 27.4646 26.2496 27.3654C26.4936 27.0634 26.5983 26.6658 26.8075 25.8706L28.5871 19.108M15.9115 6.43237L28.5871 19.108M15.9115 6.43237L19.0391 3.30472C19.9994 2.34446 20.4795 1.86434 21.0606 1.77229C21.2483 1.74257 21.4395 1.74257 21.6272 1.77229C22.2083 1.86434 22.6884 2.34446 23.6487 3.30472L31.7148 11.3708C32.6751 12.3311 33.1552 12.8112 33.2472 13.3923C33.2769 13.58 33.2769 13.7712 33.2472 13.9589C33.1552 14.54 32.6751 15.0201 31.7148 15.9804L28.5871 19.108M13.4215 21.6062C12.1089 20.2936 12.1089 18.1655 13.4215 16.8528C14.7341 15.5402 16.8622 15.5402 18.1749 16.8528C19.4875 18.1655 19.4875 20.2936 18.1749 21.6062C16.8622 22.9188 14.7341 22.9188 13.4215 21.6062ZM13.4215 21.6062L8.66809 26.3596" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Grafinis Dizainas</h3>
                        <p>Pasinaudokite vizualinio pasakojimo galia su mūsų ekspertų grafinio dizaino paslaugomis, pritaikytomis kūrybiškam jūsų prekės ženklo kilimui ir dėmesio pritraukimui.</p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.64 9.51757C14.3391 11.1509 14.0535 14.2764 14.0535 15.9376C14.0535 17.5987 14.129 20.7778 14.64 22.3576M14.64 9.51757L17.9772 6.59357C22.1279 2.95681 24.2032 1.13843 25.9762 1.49158C26.5276 1.60143 27.0464 1.83664 27.4925 2.17903C28.9265 3.27978 28.9265 6.03904 28.9265 11.5576V20.2794C28.9265 25.7168 28.9265 28.4356 27.5059 29.5365C27.064 29.8789 26.5485 30.1162 26.001 30.2292C24.2408 30.5925 22.1769 28.8257 18.0491 25.2922C16.1531 23.6692 14.7441 22.4588 14.64 22.3576M14.64 9.51757C13.9098 9.46649 10.6293 9.46547 7.47331 9.47771C4.8581 9.48786 3.5505 9.49294 2.61352 10.1439C2.25209 10.3951 1.93616 10.7122 1.68644 11.0746C1.03906 12.0141 1.03906 13.3268 1.03906 15.9522V15.9522C1.03906 18.5899 1.03906 19.9088 1.69036 20.8502C1.9416 21.2133 2.2592 21.5306 2.6226 21.7815C3.56466 22.4318 4.87872 22.4305 7.50684 22.4278C10.6525 22.4246 13.9124 22.4085 14.64 22.3576M4.75792 22.4203L4.71751 31.8253C4.71097 33.346 5.9423 34.582 7.46295 34.5812V34.5812C8.97788 34.5804 10.2056 33.3521 10.2056 31.8371V22.4212M32.6447 8.46567C34.5038 14.0696 34.5038 17.8055 32.6447 23.4095" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Skaitmeninis Marketingas</h3>
                        <p>Pakelkite savo prekės ženklą internete su mūsų duomenimis paremtomis skaitmeninio marketingo strategijomis. Nuo SEO ir turinio rinkodaros</p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.3491 12.9906C27.3491 14.7987 25.8358 16.2645 23.9691 16.2645C22.1024 16.2645 20.5891 14.7987 20.5891 12.9906C20.5891 11.1824 22.1024 9.71662 23.9691 9.71662C25.8358 9.71662 27.3491 11.1824 27.3491 12.9906Z" stroke="#FBFBFB" strokeWidth="2"/>
                                <path d="M14.7949 12.9906C14.7949 14.7987 13.2816 16.2645 11.4149 16.2645C9.54817 16.2645 8.0349 14.7987 8.0349 12.9906C8.0349 11.1824 9.54817 9.71662 11.4149 9.71662C13.2816 9.71662 14.7949 11.1824 14.7949 12.9906Z" stroke="#FBFBFB" strokeWidth="2"/>
                                <path d="M15.7606 24.2155C15.7606 26.0236 14.2473 27.4894 12.3806 27.4894C10.5139 27.4894 9.00061 26.0236 9.00061 24.2155C9.00061 22.4073 10.5139 20.9415 12.3806 20.9415C14.2473 20.9415 15.7606 22.4073 15.7606 24.2155Z" stroke="#FBFBFB" strokeWidth="2"/>
                                <path d="M33.9966 14.1812C33.7962 5.86593 21.706 0.660689 12.9008 2.2613C4.09565 3.86191 -0.164172 12.5382 1.27492 20.9415C2.6741 29.1118 11.8977 34.9727 17.692 34.9727C23.4862 34.9727 28.3148 32.1664 24.2409 28.8225C23.1075 27.9442 22.1844 26.8382 21.5353 25.5807C20.5616 23.6944 22.3234 21.0015 24.4923 21.1866C28.894 21.5623 34.1529 20.6654 33.9966 14.1812Z" stroke="#FBFBFB" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h3>Tinklalapių Dizainas</h3>
                        <p>Mes specializuojamės kuriant vizualiai įspūdingas, naudotojui patrauklias interneto svetaines, kurios atitinka jūsų prekės identitetą ir teikia išskirtinę patirtį.</p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.7195 4.52864C26.5194 5.23605 26.9946 6.11981 26.9948 7.07839C26.995 8.03698 26.5201 8.92055 25.7205 9.62765M30.3241 1.97266C31.4568 3.50922 32.0945 5.24393 32.0949 7.07984C32.0952 8.9103 31.4619 10.6399 30.3361 12.1727M15.5195 12.1727C12.7029 12.1727 10.4195 9.88931 10.4195 7.07266C10.4195 4.256 12.7029 1.97266 15.5195 1.97266C18.3362 1.97266 20.6195 4.256 20.6195 7.07266C20.6195 9.88931 18.3362 12.1727 15.5195 12.1727ZM7.59599 32.5727H23.4431C27.7116 32.5727 30.5668 28.1791 28.8332 24.2785V24.2785C26.9398 20.0182 22.715 17.2727 18.0529 17.2727H12.9861C8.32407 17.2727 4.09928 20.0182 2.20583 24.2785V24.2785C0.472213 28.1791 3.32746 32.5727 7.59599 32.5727Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>IT konsultacijos</h3>
                        <p>IT konsultacija, tai paslaugų teikimo praktika, kurioje teikiame patarimus ir įgyvendinimo paslaugas, susijusias su informacinių technologijų sritimi.</p>
                    </div>
                    <div className="block">
                        <div className="icon">
                            <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3724 17.0247L7.59462 12.0074L9.33843 9.99109C10.2265 8.96424 10.6706 8.45082 11.2403 8.12866C11.4284 8.02226 11.6254 7.93221 11.8289 7.8595C12.4453 7.63932 13.1241 7.63932 14.4817 7.63932H17.0391M7.46984 4.11217L4.00983 7.78844C2.33272 9.57036 1.49417 10.4613 1.28664 11.5371C1.2192 11.8867 1.20151 12.244 1.23411 12.5986C1.33442 13.6895 2.08091 14.6589 3.57389 16.5977L11.6514 27.0872C13.8364 29.9247 14.9289 31.3434 16.3519 31.6067C16.8062 31.6907 17.272 31.6907 17.7262 31.6067C19.1493 31.3434 20.2418 29.9247 22.4268 27.0872L30.5042 16.5977C31.9972 14.6589 32.7437 13.6895 32.844 12.5986C32.8766 12.244 32.8589 11.8867 32.7915 11.5371C32.584 10.4613 31.7454 9.57037 30.0683 7.78844L26.6083 4.11218C25.7275 3.17637 25.2871 2.70846 24.7383 2.41614C24.5569 2.31951 24.3679 2.23784 24.1732 2.17196C23.5842 1.97266 22.9416 1.97266 21.6565 1.97266H12.4216C11.1365 1.97266 10.494 1.97266 9.90493 2.17196C9.71023 2.23784 9.52123 2.31951 9.33981 2.41614C8.79098 2.70846 8.3506 3.17637 7.46984 4.11217Z" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>Prekės ženklo identitetas</h3>
                        <p>Tai apima unikalios ir atpažįstamos tapatybės kūrimą, kuri išskiria prekės ženklą iš konkurentų bei atitinka tikslinę auditoriją.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageServices
