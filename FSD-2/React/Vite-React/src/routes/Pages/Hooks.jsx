import { Link } from "react-router-dom";


function Hooks() {
  return (
    <div className="hooks-container">
      <h1 className="hooks-title">React Hooks Tasks</h1>

      <ul className="task-list">
        <li className="task-item">
          <Link to="/hooks/Us1" className="task-link">
            Create a program to build React app having buttons to increment and decrement the number by clicking that respective button. Also, increment of the number should be performed only if number is less than 10 and decrement of the number should be performed if number is greater than 0.
          </Link>
        </li>

        <li className="task-item">
          <Link to="/hooks/Us2" className="task-link">
            Write a program having a button "show". By clicking a button, it will display text and button text will be changed as "Hide". By clicking Hide button, the text will be disappeared and button text will become "show" again.
          </Link>
        </li>

        <li className="task-item">
          <Link to="/hooks/Us3" className="task-link">
            Write a program to build React app to perform the tasks as asked below. Add three buttons "Change Text", "Change Color", "Hide/Show". Add heading "LJ University" in red color(initial) and also add "React Js Hooks" text in h2 tag. By clicking on "Change text" button text should be changed to "Welcome students" and vice versa. By clicking on "Change Color" button change color of text to "blue" and vice versa. This color change should be performed while double clicking on the button. Initially button text should be "Hide". While clicking on it the button text should be changed to "Show" and text "React Js Hooks" will not be shown.
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Hooks;