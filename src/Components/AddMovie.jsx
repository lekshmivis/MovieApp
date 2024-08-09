import React from 'react'

const AddMovie = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Name of the movie</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Release date</label>
                                <input type="date" name="" id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Name of the producer</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Name of the director</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Number of songs included</label>
                                <select name="Select" id="Select" className="form-control">
                                    <option value="Select">Select</option>
                                    <option value="Darshana">Darshana</option>
                                    <option value="Pottu Thotta Pournami">Pottu Thotta Pournami</option>
                                    <option value="Nagumo">Nagumo</option>
                                    <option value="Minal Kotti">Minal Kotti</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Name of the actors included</label>
                                <select name="Select" id="Select" className="form-control">
                                    <option value="Select">Select</option>
                                    <option value="Pranav">Pranav</option>
                                    <option value="Kalyani">Kalyani</option>
                                    <option value="Darshana">Darshana</option>
                                    <option value="Aju Varghese">Aju Varghese</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                label <div className="form-label">Language</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="form-label">Script Writter</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovie