import React from "react";

const Matrix = ({ vertical, horizontal }) => {
  return (
    <div className="flex flex-row space-x-4">
      {Array.from(Array(horizontal).keys()).map((key, ind) => {
        return (
          <div className="flex flex-col space-y-4">
            {Array.from(Array(vertical).keys()).map((key, ind) => {
              console.log(ind);
              return <div className="w-1 h-1 rounded-full bg-gray"></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Matrix;
