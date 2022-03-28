import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
    Link
} from 'react-router-dom';

const PetForm = () => {

    let [petInfo, setPetInfo] = useState({
        petName: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: ""
    })

    let history = useHistory()

    let [formErrors, setFormErrors] = useState({
        petName: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: ""
    })

    const submitHandler= (e)=>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/pets', petInfo)
            .then(res=>{
                console.log("The results I'm getting back for post form --> ", res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }else{
                    setPetInfo({
                        petName: "",
                        petType: "",
                        description: "",
                        skill1: "",
                        skill2: ""
                    })
                    history.push('/')
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
            <h3>Know a pet needing a home?</h3>
            <Link to='/'>Back to home</Link>
            <form className="d-flex justify-content-evenly border border-2 border-dark p-3" onSubmit={submitHandler}>
                <div className='form-group col-5'>
                    <div>
                        <label htmlFor="">Pet Name:</label>
                        <input type="text" name="" id="" name='petName' className='form-control' onChange={changeHandler}/>
                    </div>
                        <p className='text-danger'>{formErrors.petName?.message}</p>
                    <div>
                        <label htmlFor="">Pet Type:</label>
                        <input type="text" name="" id="" name='petType' className='form-control' onChange={changeHandler}/>
                    </div>
                        <p className='text-danger'>{formErrors.petType?.message}</p>
                    <div>
                        <label htmlFor="">Pet Description:</label>
                        <input type="text" name="" id="" name='description' className='form-control' onChange={changeHandler}/>
                    </div>
                        <p className='text-danger'>{formErrors.description?.message}</p>
                    <input type="submit" value="Add Pet" className='btn btn-success mt-3 float-start'/>
                </div>
                <div className='form-group col-5'>
                    <div>
                        <label htmlFor="">Skill 1:</label>
                        <input type="text" name="" id="" name='skill1' className='form-control' onChange={changeHandler}/>
                    </div>
                        <p className='text-danger'>{formErrors.skill1?.message}</p>
                    <div>
                        <label htmlFor="">Skill 2:</label>
                        <input type="text" name="" id="" name='skill2' className='form-control' onChange={changeHandler}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PetForm;