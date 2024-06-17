import { useState, useEffect } from 'react';
import './NewestProjects.css';

const NewestProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // console.log('NewestProjects component mounted')

        fetch('http://localhost:7788/projects/latest/3')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setProjects(data);
            })
    }, [])

    return (
        <div className="newest-projects section">
            <div className="container">
                <h2>Naujausi projektai</h2>
                <div className="projects-list">
                    {
                        projects.length == 0 &&
                        <p>Kraunama...</p>
                    }
                    {
                        projects.length > 0 &&
                        projects.map(project => (
                            <div key={project.id} className='project'>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p>{ project.technologies.map(t => ( <span key={t}>{t}</span> )) }</p>
                                <p>
                                    <a href={project.link} className='btn'>Peržiūrėti</a>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewestProjects