import React from 'react';



class Question1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[4,2,1,5,7,9,3,1,8]

        }
        this.myref=React.createRef();
    }

    getEvenNumber=()=>{
        const {arr} = this.state;
        for(let i=0;i<arr.length;i++){
             if(arr[i]%2===0){
                 console.log(arr[i]);
                
                
               
             }
        }
      
    }


    render(){
        return(
            
            <>
            <button onClick={this.getEvenNumber}>Question1</button>
            </>
        )
    }
}

export default Question1;