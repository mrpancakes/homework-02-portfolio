import WorkCards from "./WorkCards"


const Work = () => {
    return (
        <section className="page container-fluid d-flex flex-column align-items-center" id="work">
            <h1 className="mb-4">Work</h1>

            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <WorkCards />                
            </div>

            
        </section>
    )
}

export default Work
