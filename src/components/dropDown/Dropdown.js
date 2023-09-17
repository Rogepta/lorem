import React, { useState } from "react";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Sed ut perspiciatis",
    "Nemo enim ipsam",
    "Et harum quidem",
    "Temporibus autem",
    "Itaque earum rerum",
    "Itaque earum rerum",
    "Itaque earum rerum",
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected ? selected : "Выберите тип системы"}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
                key={option}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
