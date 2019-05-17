import React, {useState} from 'react'
import axios from "axios";
import {TextField, Paper} from "@material-ui/core";

//STYLESHEET
import './Contact.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = () => {
    axios
      .post('/email', {name, email, location, subject, message})
      .then(() => {
        setName('');
        setEmail('');
        setLocation('');
        setSubject('');
        setMessage('');
      })
  }

  return (
      <div className="contact">
        <p>Contact Me</p>
        <div className="contactWrapper">
          <div className="name">
            <TextField
              style={{ width: 250 }}
              id="name"
              label="What is your name?"
              margin="normal"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="email">
            <TextField
              style={{ width: 250 }}
              id="email"
              label="What is your email?"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
              margin="normal"
            />
          </div>
          <div className="location">
            <TextField
              style={{ width: 250 }}
              id="location"
              label="Where are you from?"
              value={location}
              onChange={e => {
                setLocation(e.target.value)
              }}
              margin="normal"
            />
          </div>
          <div className="subject">
            <TextField
              style={{ width: 250 }}
              id="subject"
              label="Subject"
              value={subject}
              onChange={e => {
                setSubject(e.target.value)
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
              value={message}
              onChange={e => {
                setMessage(e.target.value)
              }}
              margin="normal"
            />
          </div>
          <div
            className="sendButton"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </div>
        </div>
      </div>
  )
}

export default Contact;
