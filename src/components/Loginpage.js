import React, { useEffect, useState } from "react";
import UserAuth from "../pages/UserAuth";
import Admin from "../pages/Admin";
import { auth } from "../firebase";

const Loginpage = () => {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.emal,
        });
      } else {
        setPresentUser(null);
      }
    });
  }, []);
  return (
    <div>
      {presentUser ? <Admin presentUser={presentUser} /> : <UserAuth />}
    </div>
  );
};
export default Loginpage;
