import React from 'react'

import projects from '../data/projects'

const WorkCards = () => {
    return (
        <>
            {projects.map(project => (
                <div className="card m-3" key={project.id}>
                    <a href={project.liveLink} target="_blank" rel="noreferrer"><img src={project.image}
                        className="card-img-top" alt={project.name} /></a>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.details}</p>

                        {project.liveLink ? <a href={project.liveLink} className="btn live-page-btn" target="_blank" rel="noreferrer">Live Page</a> : ''}
                        <a href={project.github} className="btn" target="_blank" rel="noreferrer">GitHub
                            Repo</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default WorkCards
