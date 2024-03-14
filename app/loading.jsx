"use client";
import React from "react";
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="spinner flex items-center justify-center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
