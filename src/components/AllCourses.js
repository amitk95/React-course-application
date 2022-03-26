import React, {useState,useEffect} from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify"



const AllCourse = () =>{
    useEffect(()=>{
        document.title = "All Courses";
    }, []);


    //function to call server:
    const getAllCoursesFromServer =()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response);
                console.log("successful loaded");
                setCourses(response.data);


            },
            (error)=>{
                //for error
                console.log(error);
                console.log("something get wrong");
    
            }
        );
       
    };

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);



    const [ courses, setCourses] = useState([]);

    const updateCourse =(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    }


    return (
            <div className="mt-1">
            <h1> All Courses</h1>
            <p>List of courses are as follows</p>

            {  courses.length>0 
                ? courses.map((item) => 
                <Course key={item.id} course = {item} update={updateCourse} />) : "No courses"}
            </div>
    )
}

export default AllCourse;