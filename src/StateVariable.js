import { useState } from "react";
export const StateVariable = () => {
  const [myVariable, setMyVariable] = useState(10);

  const changeMyVariable = (val) => {
    if (val) {
      setMyVariable(val);
    }
  };

  return (
    <>
      <div className="StateVariable">
        <h2>State Variable</h2>
        <h3>
          In react , DOM gets updated on change / update of state variables
        </h3>
        <h2>myVariable is equals to in DOM : {myVariable}</h2>
        <button
          onClick={() => {
            changeMyVariable(myVariable + 1);
          }}
        >
          Click to change myVariable value
        </button>
        <br />
        <br />

        <small>
          In React when a change is detected in state variables React updates /
          re-renders the DOM tree automatically using the process called as
          Reconcilation. State variable should be updated / modified using
          setState() or useState() methods only. Thats why when you click on
          button you can see myVariable value in DOM get updated and rerendered
          each time.
        </small>
      </div>
    </>
  );
};
