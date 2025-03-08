const simpleItem = ({name, picture}) => {
    return (
        <>
            <div className="detail-product-link text-start d-inline-block">
                <div className="item-container">
                    <div className="p-0">
                        <div className="image-container">
                            <img
                                src={picture}
                                alt={name}
                                className="img-fluid"
                                style={styles.image}
                            />
                        </div>
                        <p className="text-muted fs-5 text-start ms-2 mb-0 product-name">{name}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    image: {
        aspectRatio: "1/1.5",
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        margin: "0px 0px 10px 0px",
    }
}

export default simpleItem;