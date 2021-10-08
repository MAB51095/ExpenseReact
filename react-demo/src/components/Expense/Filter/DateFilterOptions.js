import React from "react";

function DateFilterOptions({ dates }) {
  return dates.map((date, id) => (
    <option value={date} key={id}>
      {date}
    </option>
  ));
}

export default DateFilterOptions;
