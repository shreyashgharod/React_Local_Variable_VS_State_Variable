export const LocalVariable = () => {
  let myVariable = 10;

  const changeMyVariable = (val) => {
    if (val) {
      console.log("myVariable value before change : ", myVariable);
      myVariable = val;
      console.log("myVariable value after change : ", myVariable);
    }
  };

  return (
    <>
      <div className="LocalVariable">
        <h2>Local Variable</h2>
        <h3>
          In react , DOM is not updated on change / update of local variables
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
          Open console to see updated myVariable value but in DOM the value
          remains as 10 , and thats because React doesnot reconcile and update
          the DOM on local variable change.
        </small>
      </div>
    </>
  );
};
