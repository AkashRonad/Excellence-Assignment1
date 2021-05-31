import React from 'react';
import axios from 'axios';



class Question4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apiresult:[],
        }
    }

    componentDidMount(){
        axios({
            method:'GET',
            url:'https://my-json-server.typicode.com/typicode/demo/posts',
            headers:{'Content-type':'application/json'},

        }).then(res=>{
             this.setState({apiresult:res.data});
        }).catch(err=>{
            console.log(err);
        })
        

    }

    render(){
        const {apiresult} = this.state;
       
        return(
            <>
            <h1>Api result below</h1>
            <pre>{JSON.stringify(apiresult)}</pre>
            </>
        )

    }
}

export default Question4;