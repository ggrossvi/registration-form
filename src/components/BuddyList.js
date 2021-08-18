import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


const BuddyList = (props) => {
    //event handler needs 
    // const handleInviteClick = (e) => {
    //     axios
    //     .post("http://localhost:5000/buddy/email"),{

    //     }
    // }


    const { buddy_data } = props;
    return props.buddy_data.map((buddy, buddy_id) => (
        <Card key={buddy_id}>
            <Card.Body>
                <Card.Title>Name: {buddy.first_name} {buddy.last_name}</Card.Title>
                <Card.Text>
                    Zip:{buddy.zipcode}<br/>
                    Email:{buddy.email}<br/>
                    Morning: {buddy.morning} Afternoon: {buddy.afternoon}<br/> Evening: {buddy.evening}<br/>
                </Card.Text>
                {/* <Button onClick={handleInviteClick}>Invite</Button> */}
                <a href={`mailto:${buddy.email}?subject=Testing out mailto!`}>First Example</a>
            </Card.Body>
        </Card>

    )

    )
  

}

// function isEmptyOrSpaces(str){
//     return str === null || str.match(/^ *$/) !== null;
// }

export default BuddyList;