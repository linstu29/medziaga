import { Link } from "react-router-dom";

const Cta = () => {
    let blockStyles = {
        textAlign: 'center',
        background: 'linear-gradient(rgba(12, 26, 58, 0.9), rgba(12, 26, 58, 0.9)), url("/cta.jpg")',
        backgroundPosition: '50% 70%',
        backgroundSize: 'cover',
        padding: '45px 0 40px',
        borderRadius: '20px',
    };

    return (
        // <div style={{ textAlign: 'center', backgroundColor: 'rgba(12, 26, 58, 0.9)', backgroundImage: 'url("/cta.jpg")', backgroundBlendMode: 'overlay', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0'}}>
        <div style={blockStyles}>
            <h3 style={{ color: 'rgba(251, 251, 251, 1)' }}>Užteks kalbų, pradėkime darbą!</h3>
            <Link to='/kontaktai' className='btn btn-icon btn-light'>Susisiekite</Link>
        </div>
    )
}

export default Cta