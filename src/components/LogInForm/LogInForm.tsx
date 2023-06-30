import { Dispatch, useState } from "react";
import { logOutThunk,logInThunk } from "../../thunk/thunk";
import { useAppDispatch } from "../../hooks/hooks";
export const LogInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const dispatch = useAppDispatch()
  const submitForm = () => {
    dispatch(logInThunk(email, pass, true))
  };
  const logOut = () => {
    dispatch(logOutThunk())
  };
  return (
    <div>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
      />
      <input
      placeholder="password"
        onChange={(e) => setPass(e.target.value)}
        type="password"
      />
      <button onClick={() => submitForm()}>
        Submit
      </button>
      <button  onClick={() => logOut()}>
        logOut
      </button>
    </div>
  );
};
