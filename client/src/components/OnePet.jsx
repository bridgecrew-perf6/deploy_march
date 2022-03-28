import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';

const OnePet = () => {

    let {_id} = useParams();
    let [data, setData] = useState({});
    let history = useHistory();
    
    let [disabled, setDisabled] = useState(false);
    let [countLike, setCountLike] = useState({
        likes: 0
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("response that came back to me -->", res)
                setData(res.data.results)
            })
            .catch(err => {
                console.log("Error that came back to me --> ", err)
            })
    }, [])

    const adoptPet= (petId)=>{
        axios.delete(`http://localhost:8000/api/pets/${petId}`)
            .then(res=>{
                console.log("the pet is deleting successfully")
                history.push('/');
            })
            .catch(err=>{
                console.log("There is an error failed to delete. Error --> ",err)
            })
    }

    const likePet= ()=>{
        let count = countLike.likes + 1;
        setCountLike({
            likes: count
        })
        setDisabled(true);
    }

    return (
        <div>
            <h1>Details about: {data.petName}</h1>
            <div className='d-flex justify-content-evenly m-3'>
                <Link to='/'>Back to home</Link>
                <button onClick={()=>{adoptPet(_id)}} className='btn btn-danger'>Adopt {data.petName}</button>
            </div>
            <div className='border border-2 border-dark p-3'>
                <h4><strong className='me-3'>Pet Type: </strong> {data.petType}</h4>
                <h4><strong className='me-3'>Description: </strong> {data.description}</h4>
                <h4><strong className='me-3'>Skills: </strong> {data.skill1}, {data.skill2}</h4>
                <button className='btn btn-success m-3' onClick={likePet} disabled={disabled}>Like {data.petName}</button>
                <p>{countLike.likes} Like(s)</p>
            </div>
        </div>
    );
};

export default OnePet;