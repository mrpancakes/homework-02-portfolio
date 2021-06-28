import React from 'react'

const AboutModal = ({tech}) => {
    return (
        <div className="modal-body container-fluid">
            <div className="row">
                {tech.map(item => (
                    <div key={item.id} className="col-3 text-center">
                    <img src={item.image} alt={item.name} className="tech-icon" data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.name} />
                </div>
                ))}
                
            </div>
        </div>

    )
}

export default AboutModal
