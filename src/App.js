import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import actions from "./redux/actions.js";
import AppHeader from "./components/AppHeader.js"
import Module from "./components/Module.js"

const URL = "http://localhost:4000/api/users"

export const App = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(URL)
      .then(function ({ data }) {
        dispatch(actions.loadData(data))
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <AppHeader data={data} />
      <Module data={data} />
    </div>
  )
}