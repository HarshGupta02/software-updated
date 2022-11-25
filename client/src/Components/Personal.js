import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './Personal.css';

const Personal = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callPersonalPage = async () => {
    try{
      const res = await fetch("/personal", {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      history.push("/login");
    }
  }

  useEffect(() => {
    callPersonalPage();
  }, []);

    return (
        <>
            <h4 className="heading">Personal Information</h4>
             <tr className="table_info">
                <tr>
                    <td>Name</td>
                    <td>{userData.Name}</td>
                </tr>
                <tr>
                    <td>Roll Number</td>
                    <td>{userData.RollNumber}</td>
                </tr>
                <tr>
                    <td>Father Name</td>
                    <td>{userData.FatherName}</td>
                </tr>
                <tr>
                    <td>Date Of Birth</td>
                    <td>{userData.DateOfBirth}</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>{userData.Branch}</td>
                </tr>
            </tr>
            <h4 className="heading">Student Contact Details</h4>
            <tr className="table_info">
                <tr>
                    <td>Mobile Number</td>
                    <td>{userData.MobileNo}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{userData.Email}</td>
                </tr>
                <tr>
                    <td>Parent Mobile Number</td>
                    <td>{userData.ParentMobileNumber}</td>
                </tr>
                <tr>
                    <td>Parent Email</td>
                    <td>{userData.ParentEmail}</td>
                </tr>
            </tr>
            <h4 className="heading">Address Details</h4>
            <tr className="table_info">
                <tr>
                    <td>Current Address</td>
                    <td>{userData.CurrentAddress}</td>
                </tr>
                <tr>
                    <td>District</td>
                    <td>{userData.District}</td>
                </tr>
                <tr>
                    <td>PinCode</td>
                    <td>{userData.PinCode}</td>
                </tr>
            </tr>
        </> 
    )
}

export default Personal