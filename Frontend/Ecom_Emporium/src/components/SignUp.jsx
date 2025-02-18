import React from 'react'
import { useState } from 'react';
import "./SignUp.css"

const SignUp = () => {

    const [form,setForm]=useState({
        name:"",
        password:"",
        email:""
    });

    const handleNameChange=(e)=>{
        setForm({
            ...form,name:e.target.value
        })
    };

    const handleEmailChange=(e)=>{
        setForm({
            ...form,email:e.target.value
        }) 
    };

    const handlePasswordChange=(e)=>{
        setForm({
            ...form,password:e.target.value
        }) 
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!form.email.includes("@")){
            alert("Please Enter a Valid Email Address")
        }

        if(form.password.length<8 || form.password.length>16){
            alert("Enter a password within a range of 8-16 characters")
        };

        let payload={
            name:form.name,
            email:form.email,
            password:form.password
        }

        fetch("http://localhost:8080/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payload)
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    
        // alert("Hurray! Sign-Up Successfully");
    }


  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label htmlFor="">Name</label>
        <input type="text" value={form.name} onChange={handleNameChange}/>
        <label htmlFor="">Email</label>
        <input type="text" value={form.email} onChange={handleEmailChange}/>
        <label htmlFor="">Password</label>
        <input type="password" value={form.password} onChange={handlePasswordChange}/>
        <input type="submit" />
    </form>
    </>
  )
}

export default SignUp