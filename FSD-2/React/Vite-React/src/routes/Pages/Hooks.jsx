import { Link } from "react-router-dom";

function Hooks() {
  return (
    <div className="hooks-container">
      <h1 className="hooks-title px-4 py-2 font-bold text-xl">
        React Hooks Tasks
      </h1>

      <ul className="task-list">
        <center>
          <h2 className="task-category font-bold text-lg">UseState Tasks</h2>
        </center>
        <li className="task-item">
          <Link to="/hooks/Us1" className="task-link">
            Create a program to build React app having buttons to increment and
            decrement the number by clicking that respective button. Also,
            increment of the number should be performed only if number is less
            than 10 and decrement of the number should be performed if number is
            greater than 0.
          </Link>
        </li>

        <li className="task-item">
          <Link to="/hooks/Us2" className="task-link">
            Write a program having a button "show". By clicking a button, it
            will display text and button text will be changed as "Hide". By
            clicking Hide button, the text will be disappeared and button text
            will become "show" again.
          </Link>
        </li>

        <li className="task-item">
          <Link to="/hooks/Us3" className="task-link">
            Write a program to build React app to perform the tasks as asked
            below. Add three buttons "Change Text", "Change Color", "Hide/Show".
            Add heading "LJ University" in red color(initial) and also add
            "React Js Hooks" text in h2 tag. By clicking on "Change text" button
            text should be changed to "Welcome students" and vice versa. By
            clicking on "Change Color" button change color of text to "blue" and
            vice versa. This color change should be performed while double
            clicking on the button. Initially button text should be "Hide".
            While clicking on it the button text should be changed to "Show" and
            text "React Js Hooks" will not be shown.
          </Link>
        </li>
        <li className="task-item">
          <Link to="/hooks/Us4" className="task-link">
            task hide and show
          </Link>
        </li>
        <li className="task-item">
          <Link to="/hooks/Us10" className="task-link">
            Task-10 (US10) Create react app which contains form with following
            fields. • Email(Input type email) • Password(Input type password) •
            Confirm Password(Input type password) [For Ref.: Add validation
            using regex to validate email id and password (Must contain at least
            8 characters and must contain at least 1 uppercase, 1 lowercase and
            1 digit).] Also values of password and confirm password must be
            same. Display email in alert box. (Using useState Hook)
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <center>
        <h2 className="font-bold text-lg">UseReducer Tasks</h2>{" "}
      </center>
      <ul className="task-list">
        <li className="task-item">
          <Link to="/hooks/Ur2" className="task-link">
            Task-2 (UR5) Create react app which takes user defined inputs number
            1 and number 2 and perform addition, subtraction, multiplication,
            division of the numbers.
          </Link>
        </li>
      </ul>
      <ul className="task-list">
        <center>
          <h2 className="font-bold text-lg">UseContext Tasks</h2>
        </center>
        <li className="task-item">
          <Link to="/hooks/Uc1" className="task-link">
            Task-4 (ToggleUC) Create a React application that allows users to
            toggle between Light and Dark themes. Use useState to manage the
            theme state and useContext to share this state between components.
            Define the context inside the same file. When the user clicks a
            button, the theme should toggle, and the background and text colors
            should change accordingly. Display the current mode as "Light Mode"
            or "Dark Mode" in the center of the screen.
          </Link>
        </li>
        <li className="task-item">
          <Link to="/hooks/Uc2" className="task-link">
            Task-2 Use multiple contexts in a React application by creating and
            consuming them across different components. uc1.js: Creates a
            context for CSS styling and provides it to Comp1. uc2.js: Creates a
            context for a string value ("Students") and provides it to Comp2.
            uc3.js: Consumes both contexts and displays a message with the
            provided styles and string.
          </Link>
        </li>
        <li className="task-item">
          <Link to="/hooks/Uc3" className="task-link">
            Task-3 Create react app which to perform following task using
            function component: Create one main file name F1.js & other 2
            component files F2.js & F3.js. Main file contains form with
            following fields: o First Name (Input type text) o Last Name (Input
            type text) o Message (Textarea) o City (Dropdown) o Gender (Radio
            Button) Pass values of all fields from F1.js file to F3.js file. And
            display all submitted values in alert box using useContext &
            useState hook. No need to write App.js file
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Hooks;
