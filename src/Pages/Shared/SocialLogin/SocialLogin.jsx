import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { handleGoogleSignIn } = useContext(AuthContext);
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={googleSignIn} className="btn btn-circle btn-outline">
        G
      </button>
    </div>
  );
};

export default SocialLogin;
