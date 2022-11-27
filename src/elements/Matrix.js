import React from "react";

const Matrix = ({ vertical, horizontal, space = 4 }) => {
  return (
    <div className={`flex flex-row space-x-${space}`}>
      {Array.from(Array(horizontal).keys()).map((ind) => {
        return (
          <div className={`flex flex-col space-y-${space}`}>
            {Array.from(Array(vertical).keys()).map((ind) => {
              // console.log(ind);
              return <div className="w-1 h-1 rounded-full bg-gray"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
