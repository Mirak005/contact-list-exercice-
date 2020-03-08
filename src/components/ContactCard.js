import React from "react";

function ContactCard(props) {
//   console.log("my props is an ", typeof props, props);
  return (
    <div className="contact-card">
      <button  onClick={()=> props.removeUser(props.user.id)}  className="btn-delete">X</button>
      <h1 className={props.user.isMale ? "male-card" : "female-card"}>
        {props.user.isMale ? "Male" : "Female"}
      </h1>
      <h1>{props.user.name}</h1>
      <h2>{`${props.user.age} Years`} </h2>
      <h3>{props.user.email}</h3>
    </div>
  );
}

export default ContactCard;


