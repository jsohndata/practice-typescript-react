import React from "react";
import { Tform2, defaultForm2 } from "../interfaces";

//@ts-ignore
const FormSubmit = () => {
  const [form, setForm] = React.useState();

  return(
    <section className="container">
      <h2>Localhost:3000</h2>
      
      <form>
        <label htmlFor="fName">First Name</label>
        <input type="text" name="fName" id="fName" />
        
        
        <label htmlFor="lName">Last Name</label>
        <input type="text" name="lName" id="lName" />
        
        
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />      

        <button type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default FormSubmit;
