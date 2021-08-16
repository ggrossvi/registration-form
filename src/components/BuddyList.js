import React from 'react';

const BuddyList = (props) =>{
    props.buddyData.map(({buddy},index) => ( 
        <div>{buddy.first_name}</div>

    )

    )
    return <div></div>



}

export default BuddyList;