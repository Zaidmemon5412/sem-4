import { useState } from "react";
function Us10() {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        cpassword:''
    })
    const handleChange =(e)=>{
       
        
        setFormData({...formData,[e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, cpassword } = formData;

    // Regex: At least 8 chars, 1 uppercase, 1 lowercase, 1 digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    } 

    // Success
    alert(`Success! Email: ${email}`);
  };
    return(
        <> 
        <form  onSubmit={handleSubmit}>
            <input type="email" name="email" id="email"placeholder="Enter Email"
            onChange={handleChange} value={formData.email}/>
            <input type='password' name='password' placeholder="Enter Password"
            onChange={handleChange} value={formData.password} />
            <input type='password' name='cpassword' placeholder="Enter CPassword"
            onChange={handleChange} value={formData.cpassword} />
            <button>Submit</button>
        </form>
        </>
    )
    
}
export default Us10 