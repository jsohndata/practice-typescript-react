import React from 'react';

const Form = () => {
  const [form, setForm] = React.useState();

  //@ts-ignore
  const handleForm = (e) => {    
    console.log(e.target.value);
  };

  return (
    <section className="container">
      <h2>Form</h2>
      <form action="submit">

        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname"
          onChange={ e => handleForm(e)} />

        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname"
          onChange={ e => handleForm(e)} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"
          onChange={ e => handleForm(e)} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
          onChange={ e => handleForm(e)} />
      </form>
    </section>
  );
};

export default Form;
