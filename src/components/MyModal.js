import React, { Component } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

export default class MyModal extends Component {
  state = {
    input: "",
    isOpen: false,
    newContact: {
      name: "",
      age: "",
      email: "",
      isMale: ""
    }
  };

  onOpenModal = () => this.setState({ isOpen: true });
  onCloseModal = () => this.setState({ isOpen: false });

  handleForm = e =>
    this.setState({
      newContact: { ...this.state.newContact, [e.target.name]: e.target.value }
    });

  handleAddUser = e => {
    e.preventDefault();
    if (Object.values(this.state.newContact).indexOf("") !== -1) {
      return alert("Enter A valid Contact");
    }
    const newUser = {
      ...this.state.newContact,
      id:Date.now()
    };

    this.props.addNewUser(newUser);
    this.setState({
      isOpen: false,
      newContact: {
        name: "",
        age: "",
        email: "",
        isMale: ""
      }
    });
  };

  render() {
    return (
      <div className="btn-add-container ">
        <button className="btn-add" onClick={this.onOpenModal}>
          Add Contact{" "}
        </button>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.onCloseModal}
          style={customStyles}
        >
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label>Name </label>
            <input onChange={this.handleForm} type="text" name="name" />
            <label>Email</label>
            <input onChange={this.handleForm} type="text " name="email" />
            <label>Age</label>
            <input onChange={this.handleForm} type="text " name="age" />
            <input
              onClick={() =>
                this.setState({
                  newContact: { ...this.state.newContact, isMale: true }
                })
              }
              type="radio"
              id="male"
              name="isMale"
            />
            <label for="male">Male</label>
            <input
              onClick={() =>
                this.setState({
                  newContact: { ...this.state.newContact, isMale: false }
                })
              }
              type="radio"
              id="female"
              name="isMale"
            />
            <label for="female">Female</label>

            <button onClick={this.handleAddUser}>Add</button>
          </form>
        </Modal>
      </div>
    );
  }
}
