import React from "react";
import { Range } from "react-range";

export default function FormRange({ value, setValue }) {
  return (
    <Range
      step={1}
      min={0}
      max={100}
      values={value}
      onChange={(values) => setValue(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            borderRadius: "10px",
            opacity: "0.7",
            backgroundColor: "#ffffff",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            height: "14px",
            width: "14px",
            borderRadius: "50%",
            backgroundColor: "#42A9ED",
          }}
        />
      )}
    />
  );
}
