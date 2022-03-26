import logo from './logo.svg';
import './App.css';
import {Button, Col, Container,Row } from 'reactstrap';
import { ToastContainer, toast} from "react-toastify"
import Home from './components/Home';
import Course from './components/Course';
import AllCourse from "./components/AllCourses"
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from "./components/Menu";
import {Route, Routes} from "react-router-dom";
import About  from './components/About';
import Contact from './components/Contact';



function App() {
   
    return (
    <>
      <ToastContainer/>
       <Container>
         <Header/>
           <Row>
              <Col md={4}>
               <Menus/>
               </Col>
               <Col md={8}>
              <Routes>
              <Route path="/" element={<Home/>} exact />
               <Route path="/add-course" element ={<AddCourse/>} exact />
               <Route path="/view-courses" element ={<AllCourse/>} exact />
               <Route path="/about" element ={<About/>} exact />
               <Route path="/contact" element ={<Contact/>} exact />
              </Routes>
               
               

                 

                 
         
        </Col>
      </Row>
    </Container>
    
    

    </>
  
  );
}

export default App;
