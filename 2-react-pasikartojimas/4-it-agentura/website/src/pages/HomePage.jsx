import HomePageAboutUs from '../components/home/HomePageAboutUs';
import HomePageHeader from '../components/home/HomePageHeader';
import HomePageNewest from '../components/home/HomePageNewest';
import HomePageProcess from '../components/home/HomePageProcess';
import HomePageServices from '../components/home/HomePageServices';
// import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <HomePageHeader />
            <HomePageServices />
            <HomePageAboutUs />
            <HomePageProcess />
            <HomePageNewest />
        </>
    )
}

export default HomePage
