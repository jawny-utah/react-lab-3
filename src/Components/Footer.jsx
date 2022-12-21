import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 h-56 flex justify-between text-white bg-blue-500 bg-opacity-70 px-3 py-1 rounded-md">
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold">SHARE</h1>
        <p>Send via e-mail</p>
        <p>Share on Twitter</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold">MORE</h1>
        <p>Contact Me</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold">ABOUT</h1>
        <p>Flat UI Colors 2 brought to you by Ahmet Sulek.</p>
      </div>
    </div>
  )
}

export { Footer }
