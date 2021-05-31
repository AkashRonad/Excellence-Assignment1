import React from 'react';

function getcount_onces_higest(arr){
    let count=0;
    let total =[];
    let index=0;

    for(let i=0;i<arr.length;i++ ){
        if(arr[i]===1){
            count=count+1;
            
            
        }else{
            total[index]=count;
            index++;
            count=0;
        }
    }
    return Math.max(...total);

}

function getcount_zeros_higest(arr){
    let count=0;
    let total =[];
    let index=0;

    for(let i=0;i<arr.length;i++ ){
        if(arr[i]===0){
            count=count+1;
            
            
        }else{
            total[index]=count;
            index++;
            count=0;
        }
    }
    return Math.max(...total);

}









class Question2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            arr:[0,0,1,1,0,0,0,1,0,0,1,1,1,0],
            arr1:[1,0,0,0,0,1,0,0,0,1]


        }
    }

    getNumberOfOnces=()=>{
        const{arr,arr1}=this.state;

       let numbers_of_onces=getcount_onces_higest(arr);
       let numbers_of_zeros=getcount_zeros_higest(arr);
       let numbers_of_onces_second_arr=getcount_onces_higest(arr1);
       let numbers_of_zeros_second_arr=getcount_zeros_higest(arr1);
       

        console.log(`Number of the onces in first given array elements: ${numbers_of_onces}`);
        console.log(`Number of the zeros in first given array elements: ${numbers_of_zeros}`);
        console.log(`Number of the onces in second given array elements: ${numbers_of_onces_second_arr}`);
        console.log(`Number of the zeros in second given array elements: ${numbers_of_zeros_second_arr}`);

    }

    render(){
        return(
            <>
            <button onClick={this.getNumberOfOnces}>Question2</button>
            </>
        )
    }

}

export default Question2;