import React, { useEffect } from 'react';
import axios from "axios"
import { useDispatch } from "react-redux";
import actions from "./redux/actions.js";
/* components */
import AppHeader from "./components/AppHeader.js"
import Module from "./components/Module.js"

const URL = "http://localhost:4000/api/users"

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(URL)
      .then(function ({ data }) {

        dispatch(actions.loadData(data))
        dispatch(actions.loadModule("auth_module"))
        dispatch(actions.isDataLoaded())

      })
      .catch(function (error) {
        console.log(error);
      })
  })

  return (
    <div>
      <AppHeader />
      <Module />
    </div>
  )
}