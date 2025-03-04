import { useState } from "react"

const ReviewModal = ({ id, name, image }) => {
    const [rating, setRating] = useState(0)
    const [hoveredRating, setHoveredRating] = useState(0)
    const [review, setReview] = useState("")

    const handleClose = () => {
        setRating(0)
        setReview("")
    }

    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${id}Label`}>Rate Your Purchase</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Product Details */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <img
                                src={image}
                                alt={name}
                                className="img-fluid rounded-start"
                                style={styles.productImage}
                            />
                            <div>
                                <h5 className="mb-0">{name}</h5>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mb-3">
                            <label className="form-label m-0">Rating</label>
                            <div className="d-flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="btn btn-link p-1"
                                        style={{ color: star <= (hoveredRating || rating) ? "#ffc107" : "#6c757d" }}
                                    >
                                        {star <= (hoveredRating || rating)
                                            ? <i class="bi bi-star-fill"></i>
                                            : <i class="bi bi-star"></i>
                                        }
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Review Text */}
                        <div className="mb-3">
                            <label htmlFor="reviewText" className="form-label">
                                Your Review
                            </label>
                            <textarea
                                className="form-control"
                                id="reviewText"
                                rows={4}
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Share your experience with this product..."
                            ></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={() => handleClose()}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" disabled={rating === 0}>
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    productImage: {
        width: "50px",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    },
};

export default ReviewModal;