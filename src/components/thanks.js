import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./thanks.css";
import Datalist from "./datalist";

const Thanks = () => {
    let history=useNavigate();
    history('/');
    return (
      <div className="data">
        <h1>😍Thanks for Registering!</h1>
        <div className='tablecard'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
            {Datalist.map((item)=>{
                return(
                    <tr >
                        <td>{item.a}</td>
                        <td>{item.b}</td>
                        <td>{item.c}</td>
                    </tr>
                )})
            }
            </tbody>
        </table>
        </div>
        <div><Link to={"/"}><button>Go Back</button></Link></div>
      </div>
    );
  };
  
  export default Thanks;