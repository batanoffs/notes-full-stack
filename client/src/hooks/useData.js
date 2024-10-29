import { useState, useCallback } from "react";
import axios from "axios"

export const useData = (initialState) => {
  const [data, setData] = useState(initialState);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const target = e.target.value;
    setValue(target);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const form = new FormData(target);

    console.log(form);

    const { note } = Object.fromEntries(form); //getting the input value from the form data
    
    try {
        const response = axios.
    } catch (error) {
        
    }
    console.log(note);
  };

  const fetchData = useCallback(() => {
    const getData = ""; //todo
    setData(getData);
  }, []);

  return {
    fetchData,
    value,
    changeHandler,
    onSubmitHandler,
  };
};
