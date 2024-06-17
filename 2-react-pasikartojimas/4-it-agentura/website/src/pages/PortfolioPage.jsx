import ProjectBox from "../shared/ProjectBox"
import Cta from "../shared/Cta";

import project1Thumbnail from '/projects/project1.jpg';
import project2Thumbnail from '/projects/project2.jpg';
import project3Thumbnail from '/projects/project3.jpg';
import project4Thumbnail from '/projects/project4.jpg';

const PortfolioPage = () => {
    return (
        <div className='container' style={{ marginTop: '102px' }}>
            <header style={{ background: 'rgba(12, 26, 58, 1)', padding: '130px 20px', borderRadius: '20px' }}>
                <h1 style={{ color: 'rgba(251, 251, 251, 1)', textAlign: 'center' }}>Mūsų Portfelis</h1>
            </header>

            <div className="projects-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '72px', padding: '142.5px 0 117.5px' }}>
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
                <ProjectBox
                    image={project2Thumbnail}
                    title='Vartotojo sąsajos dizainas'
                    description='Kūrybinis logotipo atnaujinimas'
                />
                <ProjectBox
                    image={project3Thumbnail}
                    title='Kurti skaitmeninę strategiją'
                    description='Socialinių tinklų Marketingas'
                />
            </div>

            <Cta />
        </div>
    )
}

export default PortfolioPage