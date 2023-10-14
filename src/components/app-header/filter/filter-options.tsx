import styles from "./filter-options.module.scss";
import { useEffect, useState } from "react";

const FilterOptions = () => {
  const [currentValue, setCurrentValue] = useState("all");

  const filterOptions = [
    { name: "Все", value: "all" },
    { name: "Выполненные", value: "done" },
    { name: "Текущие", value: "current" },
  ];

  useEffect(() => {
    console.log(currentValue);
  }, [currentValue]);

  return (
    <ul className={styles.filter_options}>
      {filterOptions.map((option) => (
        <li className={styles.option} key={option.value}>
          <input
            className={styles.input}
            type="radio"
            id={`show_${option.value}`}
            name="filter"
            value={option.value}
            onChange={(evt) => setCurrentValue(evt.target.value)}
            checked={currentValue === option.value}
          />
          <label className={styles.label} htmlFor={`show_${option.value}`}>
            {option.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default FilterOptions;
