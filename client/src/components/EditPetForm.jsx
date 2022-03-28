import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import {
    Link
} from 'react-router-dom';

const EditPetForm = () => {

    let [petInfo, setPetInfo] = useState({
        petName: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: ""
    })

    let [formErrors, setFormErrors] = useState({
        petName: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: ""
    })

    let history = useHistory()

    let {_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("The respones I got back --> ", res)
                setPetInfo(res.data.results)
            })
            .catch(err=>{
                console.log("Something wrong has happened. Error --> ", err)
            })
    }, [])

    const updatePet= (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${_id}`, petInfo)
            .then(res=>{
                console.log("The results I'm getting back for post form --> ", res.data.error)
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }else{
                    history.push('/');
                }
            })
            .catch(err=>{
                console.log("Error occured, error for post form --> ", err)
            })
    }

    const changeHandler= (e)=>{
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h3>Edit {petInfo.petName}</h3>
            <Link to='/'>Back to home</Link>
            <form className="d-flex justify-content-evenly border border-2 border-dark p-3" onSubmit={updatePet}>
                <div className='form-group col-5'>
                    <div>
                        <label htmlFor="">Pet Name:</label>
                        <input type="text" name="" id="" name='petName' className='form-control' onChange={changeHandler} value={petInfo.petName}/>
                    </div>
                        <p className='text-danger'>{formErrors.petName?.message}</p>
                    <div>
                        <label htmlFor="">Pet Type:</label>
                        <input type="text" name="" id="" name='petType' className='form-control' onChange={changeHandler} value={petInfo.petType}/>
                    </div>
                        <p className='text-danger'>{formErrors.petType?.message}</p>
                    <div>
                        <label htmlFor="">Pet Description:</label>
                        <input type="text" name="" id="" name='description' className='form-control' onChange={changeHandler} value={petInfo.description}/>
                    </div>
                        <p className='text-danger'>{formErrors.description?.message}</p>
                    <input type="submit" value="Edit Pet" className='btn btn-primary mt-3 float-start'/>
                </div>
                <div className='form-group col-5'>
                    <div>
                        <label htmlFor="">Skill 1:</label>
                        <input type="text" name="" id="" name='skill1' className='form-control' onChange={changeHandler} value={petInfo.skill1}/>
                    </div>
                        <p className='text-danger'>{formErrors.skill1?.message}</p>
                    <div>
                        <label htmlFor="">Skill 2:</label>
                        <input type="text" name="" id="" name='skill2' className='form-control' onChange={changeHandler} value={petInfo.skill2}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditPetForm;