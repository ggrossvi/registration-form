import React, { useState, useEffect } from "react";
// import { times } from "../utils/times";
import axios from 'axios';
import BuddyList from './BuddyList';
import Card from 'react-bootstrap/Card';
import Map from './Map';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
// import nodeExternals from 'webpack-node-externals';


const baseURL = "http://localhost:5000";
const WrappedMap = withScriptjs(withGoogleMap(Map));
const times = [
  {
      time: "Morning"
  },
  {
      time: "Afternoon"
  },
  {
      time: "Evening"
  }
]


function Register() {
  console.log("i am here")
  console.log(process.env.REACT_APP_GOOGLE_KEY)
  const [lookupEmail, setLookupEmail] = useState('');
  const [fname, setFname] = useState('');
  const[lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [apt, setApt] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [bio, setBio] = useState('');
  //Checkboxes hold time preference for walks
  const [checkboxes, setCheckboxes] = useState([false, false, false]);
  const [buddyData,setBuddyData] = useState([]);
  const [isExisting,setIsExisting] = useState(false);
 
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/buddy`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function handleGetRecords() {
  //update below
    axios
      .post("/buddy/register", {
        // given_name and family_name have this because of login object having these names.
        //left is database name
        first_name: fname,
        last_name: lname,
        // given_name : fname,
        // family_name: lname,
        email: email,
        // first_name: fname,
        // last_name: "",
        address: address,
        apt: apt,
        city: city,
        state: state,
        zipcode: zipcode,
        morning: checkboxes[0],
        afternoon: checkboxes[1],
        evening: checkboxes[2],
        bio: bio
      })
      .then((response) => {
        console.log("it worked!")
        console.log(response)
        setBuddyData(response.data)
      }).catch((err) => console.log(err));
  }

  function getRecordByEmail(event) {
    event.preventDefault();
    axios
      .get(`/buddy/email/${lookupEmail}`)
      .then((response) => {
        console.log("it worked!")
        console.log(response.data)
        const record = response.data[0]

        setEmail(record.email)
        //if it's true then they can't edit email
        setIsExisting(true)
        // Put an error handler here
        // if response.data
      }).catch((err) => console.log(err));
  }

  function createPost(event) {
    event.preventDefault();
    axios
      .post("/buddy/register", {
        // given_name and family_name have this because of login object having these names.
        //left is database name
        first_name: fname,
        last_name: lname,
        // given_name : fname,
        // family_name: lname,
        email: email,
        // first_name: fname,
        // last_name: "",
        address: address,
        apt: apt,
        city: city,
        state: state,
        zipcode: zipcode,
        morning: checkboxes[0],
        afternoon: checkboxes[1],
        evening: checkboxes[2],
        bio: bio
      })
      .then((response) => {
        console.log("it worked!")
        console.log(response)
        setBuddyData(response.data)
      }).catch((err) => console.log(err));
  }

  // if (!post) {
  //   console.log("failed")
  //   return "No post!"
  // };

  const handleLookupEmailChange = event => {
    setLookupEmail(event.target.value)
  };
  const handleLnameChange = event => {
    setLname(event.target.value)
  };
  const handleFnameChange = event => {
    setFname(event.target.value)
  };
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };
  const handleAddressChange = event => {
    setAddress(event.target.value)
  };
  const handleAptChange = event => {
    setApt(event.target.value)
  };
  const handleCityChange = event => {
    setCity(event.target.value)
  };
  const handleStateChange = event => {
    setState(event.target.value)
  };
  const handleZipcodeChange = event => {
    setZipCode(event.target.value)
  };
  const handleBioChange = event => {
    setBio(event.target.value)
  };
  
  const handleCheckboxChange = (event, index) => {
    checkboxes[index] = event.target.checked;
    setCheckboxes(checkboxes);
}

 

  // const handleSubmit = event => {
  //   event.preventDefault();
  //    {/*lname: ${lname} \n */}
  //    {/*password: ${password} \n*/}
  //   alert(`Your state values: \n         
  //           fname: ${fname} \n 
  //           zip: ${zipcode} \n 
  //           email: ${email} \n          
  //           You can replace this alert with your process`);
  // };

  

  return (
    <div>
    
    <form onSubmit={getRecordByEmail}>
       
        <div>
            <label>Email address</label>
            <input
            type="email"
            name="lookupEmail"
            placeholder="Enter lookup email"
            onChange={handleLookupEmailChange}
            value={lookupEmail}
            />
        </div>
       
          
      <button type="submit">GET RECORD</button>
    </form>



    <form onSubmit={createPost}>
        <div>
            <label>First name</label>
            <input
            type="fname"
            name="fname"
            placeholder="Enter first name"
            onChange={handleFnameChange}
            value={fname}
            />
      </div>
       <div>
            <label>Last name</label>
            <input
            type="lname"
            name="lname"
            placeholder="Enter last name"
            onChange={handleLnameChange}
            value={lname}
            />
        </div> 
        <div>
            <label>Email address</label>
            <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={email}
            disabled={isExisting}
            />
        </div>
        <div>
            <label>Address</label>
            <input
            type="address"
            name="address"
            placeholder="Enter address"
            onChange={handleAddressChange}
            value={address}
            />
        </div>
        <div>
            <label>Apt</label>
            <input
            type="apt"
            name="apt"
            placeholder="Enter apt"
            onChange={handleAptChange}
            value={apt}
            />
        </div>
        <div>
            <label>City</label>
            <input
            type="city"
            name="city"
            placeholder="Enter city"
            onChange={handleCityChange}
            value={city}
            />
        </div>
        <div>
            <label>State</label>
            <input
            type="state"
            name="state"
            placeholder="Enter state"
            onChange={handleStateChange}
            value={state}
            />
        </div>

        <div>
            <label>Zip</label>
            <input
            type="zip"
            name="zipcode"
            placeholder="Enter zip"
            onChange={handleZipcodeChange}
            value={zipcode}
            />
        </div>
        <div>
            <label>Bio</label>
            <input
            type="bio"
            name="bio"
            placeholder="Enter bio"
            onChange={handleBioChange}
            value={bio}
            />
        </div>

     

        <h3>Select Times</h3>
            <ul className="times-list">
                {times.map(({time}, index) => (
        
                <li key={index}>
                <div className="times-list-item">
                    <div className="left-section">
                        <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={time}
                            onChange={(event) => handleCheckboxChange(event, index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{time}</label>
                    </div>      
                </div>
                </li>
                )
                )
            }
            </ul>
          
      <button type="submit">Submit</button>
      {/*if first thing thing is true it will return the 2nd
      Write custome onClick function so it 
      Declare function above api call 
      */}
      {isExisting && <button onClick = {handleGetRecords}>Get Records</button>}
    </form>
    <BuddyList buddy_data = {buddyData}/>

      <div style= {{width:'100vw', height: '100vh'}}>

        <WrappedMap 
           googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCalnnIIvWiASRzEqQPSaa6u-5xii3IRQI`}
         
          
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}          
        />
      </div>

    </div >
    
  )
}


export default Register;