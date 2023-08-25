import "./FilterItem.scss";
import { ChangeEventHandler } from "react";

type FilterItemProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  abvChecked: boolean;
  classicChecked: boolean;
  acidChecked: boolean;
};

const FilterItem = ({
  onChange,
  label,
  abvChecked,
  classicChecked,
  acidChecked,
}: FilterItemProps) => {

  const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const filterType = event.currentTarget.value;

    onChange(event.currentTarget.value);

  return (
    <div>
      <input
        type="checkbox"
        id={label}
        value={label}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default FilterItem;
