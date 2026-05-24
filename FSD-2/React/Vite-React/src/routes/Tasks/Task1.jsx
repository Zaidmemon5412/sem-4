import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Task1() {
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/UD1", {
      state: {
        name: name,
        passsword: Password,
      },
    });
  };

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>
        {" "}
        Task: **(localstorage.doc) <br />
        Create react app to perform the tasks as asked below. Create a form that
        has two fields user name and password and once the form is submitted
        this form data should be displayed on the next page named “/UD1”.
      </div>
      <center>
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
          <fieldset>
            <legend> <b> Fill The Form </b></legend>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="User Name"
            />{" "}
            <br /> <br />
            <input
              type="password"
              value={Password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <br />
            <button type="submit" className="btn">Submit</button>
          </fieldset>
        </form>
      </center>
    </div>
  );
}

export default Task1;
