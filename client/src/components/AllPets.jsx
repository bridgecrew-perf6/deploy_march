import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const AllPets = () => {

    let [petList, setPetList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                console.log("The results I got back --> ", res)
                setPetList(res.data.results)
            })
            .catch(err=>{
                console.log("There is an error occured. The error I got back --> ", err)
            })
    }, [])

    return (
        <div>
            <h3>These pets are looking for a good home</h3>
            <Link to='/pets/new'>Add a pet to the shelter</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    petList.map((petObj)=>{
                        return(
                            <tr key={petObj._id}>
                                <td>{petObj.petName}</td>
                                <td>{petObj.petType}</td>
                                <td>
                                    <Link to={`/pets/${petObj._id}`}>Details</Link> ||
                                    <Link to={`/pets/${petObj._id}/edit`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};


export default AllPets;