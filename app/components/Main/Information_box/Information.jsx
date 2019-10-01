import React from 'react';
import Header from './Header';
import Article from './Article';

function Information(props) {
    return (
    <div className = "container_information">
        <Header header = {props.header}/>
        <Article content = {props.content}/>
    </div>);
  }
  
export default Information;