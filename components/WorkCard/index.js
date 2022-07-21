import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}>
      <div
        className="group overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
        style={{ height: "400px" }}>
        <img alt={name} className="h-full w-full object-cover" src={img}></img>
				<div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-gray-800 bg-opacity-50 text-white text-md leading-4 transition ease-in-out delay-150 opacity-0 group-hover:opacity-100 duration-300">this is a text</div>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
