import React from 'react'

function Contact(props){
    return(
        <p className = "telephone_Number">{props.name}: {props.telephone_Number}</p>
    );
}

export default Contact;