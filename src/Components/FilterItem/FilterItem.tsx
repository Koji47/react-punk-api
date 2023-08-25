import { useState, useEffect } from "react";
import "./FilterItem.scss";

type FilterItemProps = {
  label: string;
  onChange: (filter: boolean) => void;
  getAbv: boolean;
  getClassic: boolean;
  getAcid: boolean;
};

const FilterItem = ({
  label,
  onChange,
  getAbv,
  getAcid,
  getClassic,
}: FilterItemProps) => {
  return (
    <div className="filter">
      <label htmlFor={label}></label>
      <input
        type="checkbox"
        checked={filter}
        onChange={(e) => setFilter(e.target.checked)}
      />
    </div>
  );
};

export default FilterItem;
