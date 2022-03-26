import React from "react";

import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import AllCourse from "./AllCourses";

const Course = ({course,update})=>{    

    const deleteCourse = (id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (Response)=>{
                console.log(Response);
                console.log("successFuly deleted");
                update(id);
            },(error)=>{
                console.log(error);
                console.log("can't deleted. error!");
            }
        )
    }



    return (
        <Card className = "text-center mt-4">
            <CardBody>
                <CardSubtitle className="font-weight-bold"> {course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className = "text-center">
                    <Button color="warning" onClick={() =>{deleteCourse(course.id);}}>Delete</Button>
                    <Button color="danger ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;