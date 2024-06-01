
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  const handleBlur = (field) => {
    switch (field) {
      case 'name':
        setIsNameEmpty(name.trim() === '');
        break;
      case 'email':
        setIsEmailEmpty(email.trim() === '');
        break;
      case 'message':
        setIsMessageEmpty(message.trim() === '');
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setIsNameEmpty(true);
    }
    if (!email.trim()) {
      setIsEmailEmpty(true);
    }
    if (!message.trim()) {
      setIsMessageEmpty(true);
    }
    // Handle form submission or validation here
  };

  return (
    <div className="m-3 container-fluid text-white py-1 bg-custom">
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="mb-4 text-center">Contact Me</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${isNameEmpty ? 'border border-danger' : ''}`}
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={() => handleBlur('name')}
              />
              {isNameEmpty && <span style={{ color: 'red' }}>This field is required.</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className={`form-control ${isEmailEmpty ? 'border border-danger' : ''}`}
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => handleBlur('email')}
              />
              {isEmailEmpty && <span style={{ color: 'red' }}>This field is required.</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                className={`form-control ${isMessageEmpty ? 'border border-danger' : ''}`}
                id="message"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onBlur={() => handleBlur('message')}
              ></textarea>
              {isMessageEmpty && <span style={{ color: 'red' }}>This field is required.</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


  