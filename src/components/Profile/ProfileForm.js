import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordInputref = useRef();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const history = useHistory();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputref.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAbAs2DI5SxN9o9H8OVePp9_W6WF5arzus",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          history.replace("/");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
