import { useContext } from "react";
import { Fc1 } from "./F1";

export default function F3() {
  const data = useContext(Fc1);

  const showAlert = () => {
    alert(
      `Submitted Values:\n\n` +
        `First Name: ${data.firstName}\n` +
        `Last Name: ${data.lastName}\n` +
        `Message: ${data.message}\n` +
        `City: ${data.city}\n` +
        `Gender: ${data.gender}`,
    );
  };

  return (
    <div>
      <button
        onClick={showAlert}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Show Alert Box
      </button>
    </div>
  );
}
