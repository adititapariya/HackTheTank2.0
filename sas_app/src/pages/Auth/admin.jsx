import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getDoc, doc } from "@firebase/firestore";
import { auth, firestore } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import AdminDashboard from "../Admin/Admin";
import UserDashboard from "../User/User";
import SignIn from "./Register";
import { analytics } from "../../firebase";
import { logEvent } from "@firebase/analytics";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const provider = new GoogleAuthProvider();
  const logginFields = ["Name", "Email", "profilePic", "loggedIn"];

  const grantAccess = async (loginEmail) => {
    const ref = doc(firestore, "Admin", loginEmail);
    try {
      const snap = await getDoc(ref);
      console.log(snap.data(), snap.id);
      if (snap.data().access) {
        setIsAdmin(true);
        setLogged(true);
        console.log(logged);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        grantAccess(email);

        logEvent(analytics, "Admin", { email: email });

        // Use sessionStorage to persist login state across tabs
        sessionStorage.setItem("loggedIn", "true");

        // Use localStorage to persist login state across page reloads
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        setLogged(true); // Set the logged state to true after successful sign-in
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsAdmin(false);
        setLogged(false);
        logginFields.forEach((field) => localStorage.removeItem(field));
        sessionStorage.removeItem("loggedIn");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Check if the user is logged in on component mount
    const isLoggedIn =
      sessionStorage.getItem("loggedIn") === "true" ||
      localStorage.getItem("loggedIn") === "true";
    setLogged(isLoggedIn);

    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Cleanup function to scroll to the top when the component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    // Add event listener to handle tab close
    const handleTabClose = (event) => {
      // Remove login information from both sessionStorage and localStorage
      logginFields.forEach((field) => localStorage.removeItem(field));
      sessionStorage.removeItem("loggedIn");
    };

    // Attach the event listener
    window.addEventListener("beforeunload", handleTabClose);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, []);

  return (
    <Grid container>
      {logged ? (
        isAdmin ? (
          <AdminDashboard handleSignOut={handleSignOut} />
        ) : (
          <UserDashboard handleSignOut={handleSignOut} />
        )
      ) : (
        <SignIn handleSignIn={handleSignIn} />
      )}
    </Grid>
  );
}
