import React from 'react';
 
function compareNumber(a,b){
    if(a.id<b.id){
        return -1;
    }else if(a.id>b.id){
        return 1;
    }else{
        return 0;
    }
}



class Question5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dict:[{"id":4,"name":"abc"},{"id":10,"name":"ab2"},{"id":5,"name":"abc3"},{"id":6,"name":"abc5"}]
        }
    }

    render(){
        const {dict}= this.state;
        return(
            <>
              <h1>Sorting result</h1>
             <pre>{JSON.stringify(dict.sort(compareNumber))}</pre>
            </>
        )
    }
}

export default Question5;