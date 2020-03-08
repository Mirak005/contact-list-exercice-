import React from "react";
import MyModal from "./components/MyModal";
import ContactList from "./components/ContactList";
import "./App.css";

const users = [
  {
    name: "karim gharbi",
    age: "18",
    email: "karimgharbi@gmail.com",
    isMale: true,
    id:0
  },
  {
    name: "Houssem ameri",
    age: "26",
    email: "houssem@gmail.com",
    isMale: true,
    id:1
  },
  { name: "Hamza Rejeb", age: "28", email: "Hamza@gmail.com", isMale: true , id: 2 },
  { name: "Hejer Laouani", age: "26", email: "hejer@gmail.com", isMale: false , id:3 },
  {
    name: "othmen zarrouk",
    age: "18",
    email: "othmen@gmail.com",
    isMale: false ,
    id:4
  }
];

class App extends React.Component {
  state = {
    users
  };

  addNewUser = newUser =>this.setState({ users: [...this.state.users, newUser] });
  removeUser = (id)=>{
    const updatedUsers = this.state.users.filter(user=> id !== user.id  )
    this.setState({users : updatedUsers})
  }

  render() {
    return (
      <div>
        <MyModal addNewUser={this.addNewUser} />
        <ContactList  removeUser={this.removeUser}   users={this.state.users} />
      </div>
    );
  }
}

export default App;
