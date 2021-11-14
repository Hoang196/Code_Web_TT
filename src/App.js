import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { renderRoutes } from "react-router-config";
import { getLocalStorage, setLocalStorage } from "./services/storage/LocalStorage";
import firebase from "./app/firebase/index";

function App({ route }) {
  const [user, setUser] = useState(JSON.parse(getLocalStorage("user")) || {})
  const updateUser = (value) => {
    setLocalStorage("user", value)
    setUser(value)
  }
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not");
        return;
      }

      const token = await user.getIdToken
      console.log("user token: ", token)
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <AppContext.Provider value={{
      user,
      setUser: updateUser,
      loading,
      setLoading
    }}>
      <div className="App">
        {renderRoutes(route.routes)}
      </div>
    </AppContext.Provider>
  )
}

export default App;
