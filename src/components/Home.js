import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home(props){
    console.log(props);
    console.log(typeof props);
    // console.log(typeof React.useState());
    // console.log(useState());

    let [age, setAge] = useState(20);
    // console.log(age, setAge);

    let [name, setName] = useState('jay');
    // console.log(name, setName);

    let [brand, setBrand] = useState(['nike', 'puma']);
    // console.log(brand, setBrand);
    
    let[info, setInfo] = useState({uname: "Kirtan", place:"mumbai"})
    // console.log(info, setInfo);
    let[status, setstatus] = useState(true);

    let[message, setMessage] = useState('dummy value');
    let[amount, setAmount] = useState(0);
    let[roi, setRoi] = useState(0);
    let[duration, setDuration] = useState(0);

    let[x1,setx1] = useState(0);
    let[x2,setx2] = useState(0);
    let[x3,setx3] = useState(0);
    let[x4,setx4] = useState(0);
    
    function changeInfo(){
        props.username = 'Tare';

    }

    let changeAge = ()=>{
        console.log(typeof setAge);
        setAge(age + 2);
        
    }
    let changeName = function(){
        console.log(typeof setName);
        setName('ajay');
        
    }

    function HideShow(){
        setstatus(!status);
    }

    function simpleInterest(ev){
        ev.preventDefault();

        setMessage(roi*amount*duration/100);
    }
   
    function emicalculator(ev){
        ev.preventDefault();
        

        let p = +x1;
        let r = +x2/12/100;
        let n = +x3*12;

        let emi = Math.round(p * r *(1+r)**n/((1+r)**n-1));
        
        setx4(emi);


    }


    
    
    return (
        <>
        <Container>
         <h1>Popular Movies</h1>
            <Row>
                <Col>
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                </Col>
                <Col>
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                </Col>
                <Col>
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                </Col>
                <Col>
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                </Col>
                
            </Row>
        </Container>
        </>
    )

}

export default Home;