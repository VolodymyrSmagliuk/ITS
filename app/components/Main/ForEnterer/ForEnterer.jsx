import React from 'react';

import Icone from './Icone';
import Degree from '../Level/Degree';
import Name from '../Level/Name';

function ForEnterer(props) {
    return (
    <div className = "container_item">
        <Icone icon_image ={props.icon_I}/>
        <Name name = {props.name}/>
        <Degree level = {props.level}/>
    </div>);
  }
  
export default ForEnterer;