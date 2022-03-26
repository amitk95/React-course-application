import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios  from "axios";
import base_url from "../api/bootapi";

const AddCourse = () =>{
    useEffect(()=>{
        document.title = "Add Courses";
    }, []);


        const [course,setCourse] = useState({});

        //form handler function
        const handleForm=(e)=>{
            console.log(course);
            postdatatoServer(course);

            e.preventDefault();
        };

        //creating function to post data on server
        const postdatatoServer = (data) => {
            axios.post(`${base_url}/courses`,data).then(
                (response) =>{
                    console.log(response);
                    console.log('success');

                },(error) =>{
                    console.log(error);
                    console.log("error");

                })
        };


    return (
        <>
            <h1 className="text-center  my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type = "text" 
                    placeholder = "Enter here"
                    name="userId" 
                    id ="userId"
                    onChange={(e)=>{
                        setCourse({...course, id:e.target.value});
                   }}
                   />

                 

                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value});
                    }} 
                    />

                    
                </FormGroup>

                <FormGroup>
                    <label for="description">
                    Course Description
                    </label>
                    <Input
                    id="description"
                    name="text"
                    type="textarea"
                    placeholder="Enter description here"
                    style = {{height: 150}}
                    
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value});
                    }}
                    
                    />

                    
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button  type = "reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>


        </>
    )
}

export default AddCourse;