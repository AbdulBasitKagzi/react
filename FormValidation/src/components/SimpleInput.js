// library imports

import UserInput from "./user-input";
// css import

const SimpleInput = (props) => {
  // use of custom hook for name
  const {
    value: eneterdName,
    hasError: nameError,
    isValid: enteredNameValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset,
  } = UserInput((value) => value.trim() !== "");

  // use of custom hook for email

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: eneterdEmailValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = UserInput((value) => value.includes("@"));
  // state to take input
  // const [input, setInput] = useState("");

  // state to check whether focus is there on input field or not
  // const [inputTouch, setInputTouch] = useState(false);

  // state to take email
  // const [inputEmail, setInputEmail] = useState("");

  // to check email focus
  // const [emailTouch, setEmailTouch] = useState(false);

  // to check @
  // const [emailContains, setEmailContains] = useState(true);

  // function to get input
  // const inputChangeHandler = (e) => {
  //   setInput(e.target.value);
  // };

  // to check whether input is empty or not
  // const enteredNameisValid = input.trim() !== "";

  // function to handle focus of the input field
  // const onTouchHandler = () => {
  //   setInputTouch(true);
  //   if (!enteredNameisValid) {
  //     return;
  //   }
  // };

  // function to get inputemail
  // const emailChangeHandler = (e) => {
  //   setInputEmail(e.target.value);
  //   // the check email contains @ or not
  //   // if (inputEmail.includes("@")) {
  //   //   setEmailContains(true);
  //   // } else {
  //   //   setEmailContains(false);
  //   // }
  // };

  // to check whether inputemail is empty or not
  // let enterEmailisVaid = inputEmail.includes("@");

  // function to handle focus of the input field
  // const emailTouchHandler = () => {
  //   setEmailTouch(true);

  //   // if (!enterEmailisVaid) {
  //   //   return;
  //   // }
  // };

  // const inputIsinValid = !enteredNameisValid && inputTouch;
  // const emailIsinValid = !emailError && emailTouch;

  const nameInputClasses = nameError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailError
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!enteredNameValid) {
      return; 
    }
    reset();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={eneterdName}
        />
        {nameError && <p className="error-text">Input field is empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        ></input>
        {emailError && <p className="error-text">Email Valid Email</p>}
        {/* {emailIsinValid && <p className="error-text">Email field is empty</p>} */}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
