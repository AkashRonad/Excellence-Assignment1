import React from 'react';
import Question1 from './QuestionNumber1';
import Question2 from './QuestionNumber2';
import Question3 from './QusetionNumber3';
import Question4 from './QuestionNumber4';
import Question5 from './QustionNumber5';



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <>
            <div>
            <h1>Bellow All Questions Answers For Each Buttons click in blow result show in console prompt</h1> 
            <Question1 />
            <br/>
            <br/>
            <Question2 />
            </div>
            <br/>
            <Question3 />
            <Question4 />
            <Question5 />
          
            </>
          
        )
    }
}

export default Home;