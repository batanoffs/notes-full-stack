import { useState, useCallback } from "react";
import axios from "axios";

export const useData = (initialState) => {
  const [notes, setNotes] = useState(initialState);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    const target = e.target.value;
    setValue(target);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const form = new FormData(target);
    const { note } = Object.fromEntries(form); //getting the input value from the form data

    try {
      const response = axios.post("http://localhost:3000/add", { note });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    fetchData,
    value,
    data,
    changeHandler,
    onSubmitHandler,
  };
};
