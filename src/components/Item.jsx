import React from 'react';

const Item = ({ picture, name, oldPrice, price }) => {
    return (
        <>
            <a href="/detailproduct" className="detail-product-link col-md-2 text-start my-2">
                <div className="item-container">
                    <div className="p-0" style={styles.card}>
                        <div className="image-container" style={styles.imageContainer}>
                            <img
                                src={picture}
                                alt={name}
                                className="img-fluid"
                                style={styles.image}
                            />
                            <div className="hover-overlay">
                                <div className="quick-view-btn rounded-1">View Details</div>
                            </div>
                        </div>
                        <p className="text-muted fs-5 text-start ms-2 mb-0 product-name">{name}</p>
                        {oldPrice && (
                            <>
                                <span className="text-muted text-decoration-line-through fs-3 ms-2">
                                    ${oldPrice.toFixed(2)}
                                </span>
                                <i className="bi bi-arrow-right fs-3 ms-2"></i>
                            </>
                        )}
                        <span className="fw-bold fs-3 ms-2 price-tag">${price.toFixed(2)}</span>
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
        margin: "0px 0px 10px 0px",
        transition: "transform 0.3s ease"
    },
    imageContainer: {
        overflow: "hidden",
        position: "relative"
    },
    card: {
        // border: "1px solid black",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }
}

// Add the CSS styles to the document head
const hoverStyles = `
    .item-container {
        transition: transform 0.3s ease;
    }
    
    .item-container:hover {
        transform: translateY(-5px);
    }
    
    .item-container:hover .image-container img {
        transform: scale(1.05);
    }
    
    .item-container:hover .product-name {
        color: #000 !important;
    }
    
    .price-tag {
        position: relative;
        transition: color 0.3s ease;
    }
    
    .item-container:hover .price-tag {
        color: black;
    }
    
    .hover-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .item-container:hover .hover-overlay {
        opacity: 1;
    }
    
    .quick-view-btn {
        background-color: white;
        color: black;
        padding: 8px 16px;
        border-radius: 0px;
        font-weight: bold;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }
    
    .item-container:hover .quick-view-btn {
        transform: translateY(0);
    }
    
    .quick-view-btn:hover {
        background-color: #f0f0f0;
    }
`;

// Only add the styles once when the component is first used
if (typeof document !== 'undefined' && !document.getElementById('item-hover-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'item-hover-styles';
    styleElement.innerHTML = hoverStyles;
    document.head.appendChild(styleElement);
}

export default Item;