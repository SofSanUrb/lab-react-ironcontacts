import React from 'react'

function ContactDetails(props) {
    return (
        <tr align="center">
            <td>
                <img className="contact-picture" src={props.image}/>
            </td>
            <td className="col2">{props.name}</td>
            <td className="col2">{props.popularity}</td>
            <td><button onClick={() => {props.onDelete(props.id)}}>
                Delete</button></td>
       </tr>
        
    )
}

export default ContactDetails