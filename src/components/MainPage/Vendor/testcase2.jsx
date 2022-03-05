{
    title: 'Action',
    render: (text, record) => (
        <div className="dropdown dropdown-action text-right">
            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#update_pond" onClick={() => { UpdateButtonHandler(record.pond_id) }} ><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#" onClick={() => { deleteButtonHandler(record.pond_id) }} ><i className="fa fa-trash-o m-r-5" /> Delete</a>
            </div>
        </div>
    ),
},{
            title: 'Action',
            render: (text, record) => (
                <div className="dropdown dropdown-action text-right">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#update_pond" onClick={() => { UpdateButtonHandler(record.pond_id) }} ><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" onClick={() => { deleteButtonHandler(record.pond_id) }} ><i className="fa fa-trash-o m-r-5" /> Delete</a>
                    </div>
                </div>
            ),
        },




        {/* Update Pond Model  */}
        <div id="update_pond" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Update Pond</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit1(onSubmitUpdate)}>
                    <div class="modal-body">
                        <div class="mb-3 row">
                            <label for="inputtext" class="col-sm-4 col-form-label">পুকুর নং</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputtext" defaultValue={getData.pond_number} {...register1("pond_number")} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputtext" class="col-sm-4 col-form-label">এরিয়া (একর)</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputtext" defaultValue={getData.pond_area} {...register1("pond_area")} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputtext" class="col-sm-4 col-form-label">লোকেশন</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputtext" defaultValue={getData.pond_location} {...register1("pond_location")} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputtext" class="col-sm-4 col-form-label">পানি থাকার মেয়াদ (মাস)</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="inputtext" defaultValue={getData.pond_water_valid} {...register1("pond_water_valid")} />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" className="btn bgColor text-white px-5 ms-1 py-2 rounded">Add</button>
                        <button type="button" className="btn bgColor text-white px-5 ms-1 py-2 rounded" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
