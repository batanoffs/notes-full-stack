import { useEffect } from "react";

import { useData } from "./hooks/useData";
import data from "./data.json";

import styles from "./app.module.css";

const App = () => {
  const { onSubmitHandler, changeHandler, value, fetchData } = useData([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="note"
          name="note"
          value={value}
          onChange={changeHandler}
        />
        <input type="submit" />
      </form>

      <ul>
        {data.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
