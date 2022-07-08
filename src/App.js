import { useState } from "react";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    setValue(value);
  };
  console.log("test");

  return { value, onChange };
};

export default function App() {
  const name = useInput("ANCHANIK");

  console.log(name);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
