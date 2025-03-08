const pictureModal = ({picture}) => {
    return (
        <>
            <div class="modal fade" id="pictureModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Product Picture</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className="w-100 object-fit-contain" src={picture} alt="product-picture" style={{ aspectRatio: '1/1'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default pictureModal;