import React from "react";

function DateFilterOptions({ months }) {
  return months.map((month, id) => (
    <option value={month} key={month}>
      {month == "" ? "--All--" : month}
    </option>
  ));
}

export default DateFilterOptions;
