import "./styles.css";
import { LocalVariable } from "./LocalVariable";
import { StateVariable } from "./StateVariable";

export default function App() {
  return (
    <div className="App">
      <LocalVariable />
      <hr />
      <hr />
      <StateVariable />
    </div>
  );
}
