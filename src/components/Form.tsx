import React from 'react';
import { Tform, defaultForm } from '../interfaces';

const Form = () => {
    // TS: <Tform | undefined | null> = type of the state
    const [form, setForm] = React.useState<Tform>(defaultForm);  
  
    // TS: added React.FormEvent
    const handleForm = (e: React.FormEvent) => {    
  
      // TS: added HTMLInputElement 
      const target = e.target as HTMLFormElement;

      /* ...form = spread operator => bring everything from form
      [e.target.name]: e.target.value = set the value of the name of the input */
      setForm({ ...form, [target.name]: target.value });
    };

    const handleFormSubmit = () => {
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });      
    };



  return (
    <section className="container">
      <h2>Form</h2>
      <form action="submit">

        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname"
          onChange={ e => handleForm(e) } />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname"
          onChange={ e => handleForm(e) } />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"
          onChange={ e => handleForm(e) } />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
          onChange={ e => handleForm(e) } />

        <input type="submit" value="Submit" 
          onClick={handleFormSubmit} />
      </form>
    </section>
  );
};

export default Form;
