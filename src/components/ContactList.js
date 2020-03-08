import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  return (
    <div className="contact-list">
      {props.users.map((el, i) => (
        <ContactCard user={el} key={i}  removeUser={props.removeUser} />
      ))}
    </div>
  );
}

export default ContactList;
