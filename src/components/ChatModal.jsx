const chatModal = () => {
    return (
        <>
            <div class="modal fade" id="chatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Chat</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row w-100 my-2">
                                <div className="col rounded text-bg-dark py-2 px-3 ms-5" >
                                    <p className="m-0">Hi</p>
                                </div>
                            </div>
                            <div className="row w-100 my-2 ms-2">
                                <div className="col rounded text-bg-success py-2 px-3 me-5" >
                                    <p className="m-0">Hi, welcome to loop wear. Is there anything i can help for you?</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer w-100">
                            <div class="input-group flex-nowrap">
                                <input type="text" class="form-control" placeholder="Message" aria-label="Message" aria-describedby="addon-wrapping" /><button type="button" class="btn btn-success"><i class="bi bi-send-fill"></i></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default chatModal;