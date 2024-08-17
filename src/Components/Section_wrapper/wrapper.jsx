const SectionWrapper = (sectionName, containerName, Component) =>
    function HOC() {
        return (
            <section className={`${sectionName}`}>
                <div className={`container ${containerName}`}>
                    <Component />
                </div>
            </section>
        )
    }
export default SectionWrapper;