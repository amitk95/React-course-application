import React from "react"
import { Card, CardBody } from "reactstrap";

function Header(props)
{
    return(
        <div>
            <Card className="my-1 bg-warning">
                <CardBody>
                <h1 className="text-center my-5">Welcome to Courses Application </h1>
                </CardBody>
            </Card>
        </div>
    )

}

export default Header;