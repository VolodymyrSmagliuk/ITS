import React from 'react';
import Degree from '../Level/Degree';
import Name from '../Level/Name';

function LearningForm(props) {
    return (
    <div className = "container_item_form">
        <Degree level={props.level}/>
        <Name name = {props.name} />
    </div>
    );
  }
  
export default LearningForm;