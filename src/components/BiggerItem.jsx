const BiggerItem = ({ picture, name, oldPrice, price }) => {
    return (
        <>
            <a href="/detailproduct" className="detail-product-link col-md-3 text-start my-2">
                <div className="" >
                    <div className="p-0" style={styles.card}>
                    <img
                        src={picture}
                        alt={name}
                        className="img-fluid"
                        style={styles.image}
                    />
                    <p className="text-muted fs-5 text-start ms-2 mb-0">{name}</p>
                    {oldPrice && (
                        <>
                            <span className="text-muted text-decoration-line-through fs-3 ms-2">
                            ${oldPrice.toFixed(2)}
                            </span>
                            <i class="bi bi-arrow-right fs-3 ms-2"></i>
                        </>
                    )}
                    <span className="fw-bold fs-3 ms-2">${price.toFixed(2)}</span>
                    </div>
            </div>
            </a>
        </>
    );
}

const styles = {
    image: {
        aspectRatio: "1/1.5",
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        margin: "0px 0px 10px 0px"
    },
    card: {
        // border: "1px solid black",
    }
}

export default BiggerItem;