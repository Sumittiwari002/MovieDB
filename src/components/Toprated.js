import React, {useState, useEffect} from "react";

function Toprated(){

    let [name, setName] = useState('akshay');
    let [count, setCount] = useState(0);
    let [age, setAge] = useState(0);

    //this useEffect hook will be called on component mount, as well as if there is a change in any state variable, useEffect hook will be recalled
    // useEffect(()=>{
    //     console.log('use Effect Hook Called', name, count);
        
    // });

    // this useEffect hook will be called on component mount i.e only once becoz of []
    // useEffect(()=>{
    //     console.log('useEffect Hook called, name, count');
        
    // },[]);

    // this useEffect hook will be called on component mount and based on conditions e.g: count and name only
    // useEffect(()=>{
    //     console.log('useEffect Hook called', name, count);
        
    // },[name, count]);

    // this useEffect hook will be called on component mount and unmount

    useEffect(()=>{
        console.log('useEffect Hook called from above return');
        
        return (
            console.log('useEffect Hook called from return')
            
        )
    },[]);

    function myfunc1(){
        setName('ajay');
    }
    
    function myfunc2(){
        setCount(count+2);
    }
    
    function myfunc3(){
        setAge(age+5);
    }


    return (
        
        <div className="container">
            <h1>useState, useEffect</h1>
            <p>
                {name}
            </p>
            <p>
                {count}
            </p>
            <p>
                {age}
            </p>
            <p>
                <button onClick={myfunc1}>Name</button>
                <button onClick={myfunc2}>Count</button>
                <button onClick={myfunc3}>Age</button>
            </p>
        </div>
    )

}

export default Toprated;