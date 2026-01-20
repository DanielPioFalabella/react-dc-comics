const ComicsCard = (props) => {
    // destracturing props card
    const {thumb, series, title } = props;

    return (
        <div className="comics-card">
            <img src={thumb} alt={title} />
            <h3>{series}</h3>
        </div>
    )
}

export default ComicsCard