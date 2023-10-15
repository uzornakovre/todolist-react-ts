import styles from "./filter-options.module.scss";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import { getShowMode } from "../../../services/task-list/task-list-selectors";
import { toggleShowMode } from "../../../services/task-list/task-list-slice";
import { ChangeEvent } from "react";
import { filterOptions } from "../../../utils/constants";

const FilterOptions = () => {
  const dispatch = useAppDispatch();
  const showMode = useAppSelector(getShowMode);

  function handleFilterOptionChange(evt: ChangeEvent<HTMLInputElement>): void {
    dispatch(toggleShowMode(evt.target.value as TShowMode));
  }

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
            onChange={handleFilterOptionChange}
            checked={showMode === option.value}
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
