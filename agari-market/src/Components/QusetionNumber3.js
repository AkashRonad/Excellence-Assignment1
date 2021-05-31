import React from 'react';

class Question3 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            arr:[0,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

        }
    }

    getNumberRepeated=()=>{
        const {arr}=this.state;
        let number =0;
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    number=arr[i]
                }

            }
        }

        console.log(`repeated number is :${number}`);

    }

    render(){
        return(
            <button onClick={this.getNumberRepeated}>Question3</button>
        )
    }

}

export default Question3;