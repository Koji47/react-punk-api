import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";
import { ChangeEventHandler } from "react";

type FiltersListProps = {
  onChange: (filterType: string) => void;
  abvChecked: boolean;
  classicChecked: boolean;
  acidChecked: boolean;
};

const FiltersList = ({
  onChange,
  abvChecked,
  classicChecked,
  acidChecked,
}: FiltersListProps) => {
  const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.currentTarget.value);
  };
  return (
    <div>
      <ul className="filter-list">
        <FilterItem
          onChange={handleFilterChange}
          label="High Alcohol"
          isChecked={abvChecked}
        />
        <FilterItem
          onChange={handleFilterChange}
          label="Classic"
          isChecked={classicChecked}
        />
        <FilterItem
          onChange={handleFilterChange}
          label="High Acid"
          isChecked={acidChecked}
        />
      </ul>
    </div>
  );
};

export default FiltersList;
