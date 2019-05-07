import React, {useState} from 'react'
import axios from "axios";
import {TextField, Paper} from "@material-ui/core";

//STYLESHEET
import './Contact.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  return (
    <Paper>
      <div className="contact">
        <p>Contact Me</p>
        <div className="contactWrapper">
          <div className="name">
            <TextField
              style={{ width: 250 }}
              id="name"
              label="What is your name?"
              value={this.state.name}
              onChange={e => {
                this.inputHandler(e, "name");
              }}
              margin="normal"
            />
          </div>
          <div className="email">
            <TextField
              style={{ width: 250 }}
              id="email"
              label="What is your email?"
              value={this.state.email}
              onChange={e => {
                this.inputHandler(e, "email");
              }}
              margin="normal"
            />
          </div>
          <div className="location">
            <TextField
              style={{ width: 250 }}
              id="location"
              label="Where are you from?"
              value={this.state.location}
              onChange={e => {
                this.inputHandler(e, "location");
              }}
              margin="normal"
            />
          </div>
          <div className="subject">
            <TextField
              style={{ width: 250 }}
              id="subject"
              label="Subject"
              value={this.state.subject}
              onChange={e => {
                this.inputHandler(e, "subject");
              }}
              margin="normal"
            />
          </div>
          <div className="message">
            <TextField
              multiline
              rowsMax="100"
              fullWidth
              id="message"
              label="How can I help you?"
              value={this.state.message}
              onChange={e => {
                this.inputHandler(e, "message");
              }}
              margin="normal"
            />
          </div>
          <div
            className="sendButton"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </Paper>
  )
}
