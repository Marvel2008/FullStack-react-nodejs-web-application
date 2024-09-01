const SectionWrapper = (sectionName, containerName, Component) =>
    function HOC(props) {
        return (
            <section className={`${sectionName}`}>
                <div className={`container ${containerName}`}>
                    <Component {...props}/>
                </div>
            </section>
        )
    }
export default SectionWrapper;