import React from 'react';
import Icone from './Level/Icone_I';
import Degree from './Level/Degree';
import Name from './Level/Name';

function Qualification(props) {
    return (
    <div className = "container_item">
        <Icone icon_I ={props.icon_I}/>
        <Degree level = {props.level}/>
        <Name name = {props.name}/>
    </div>);
  }
  
export default Qualification;