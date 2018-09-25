import React, {Component} from 'react';

class Answer extends Component{
    render(){
    return(
    <div>
<h2> Answer: {this.props.result}</h2>
    </div>
    );
}
}

export default Answer;