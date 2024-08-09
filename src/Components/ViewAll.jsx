import React from 'react'

const ViewAll = () => {
    return (
        <div><div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl.No:</th>
                                <th scope="col">Name of the movie</th>
                                <th scope="col">Name of the director</th>
                                <th scope="col">Name of the producer</th>
                                <th scope="col">Name of the Actors</th>
                                <th scope="col">Name of the Release date</th>
                                <th scope="col">Name of the Script writter</th>
                                <th scope="col">Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Hridayam</td>
                                <td>Vineeth Srineevasan</td>
                                <td>Visakh Subramaniam</td>
                                <td>Pranav Mohanlal</td>
                                <td>2022</td>
                                <td>Vineeth Sreenivasan</td>
                                <td>Malyalam</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Luca</td>
                                <td>Arun bose</td>
                                <td>Linto Thomas</td>
                                <td>Tovino Thomas</td>
                                <td>2019</td>
                                <td>Mridul George</td>
                                <td>Malayalam</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>June</td>
                                <td>Ahamed</td>
                                <td>Vijaya Babu</td>
                                <td>Rajisha</td>
                                <td>2019</td>
                                <td>Ahamed</td>
                                <td>Malayalam</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div></div>
    )
}

export default ViewAll