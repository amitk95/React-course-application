import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";

const Menus = () =>{
    return (
        <ListGroup>
            <Link  className="list-group-item list-group-item-action" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course">Add Course</Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses">View Courses</Link>
            <Link className="list-group-item list-group-item-action"to="/about">About</Link>
            <Link className="list-group-item list-group-item-action" to="/contact">Contact</Link>
        </ListGroup>

    )
}

export default Menus;