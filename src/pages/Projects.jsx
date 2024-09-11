import React from "react";
import { useDetails } from "../context/details.context.api";
import { BASE_URL_IMAGE_FOLDER } from "../constan";

export default function Projects() {
  const { projects } = useDetails();
  console.log("Projects", projects);

  return (
    <div className="p-3 md:p-5 flex flex-col justify-center items-center">
      <div className="w-full text-center pt-4 pb-8 text-4xl">My Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {projects && projects.length > 0 ? (
        projects.map((project, index) => (
          <div className="h-[450px] " key={index}>
            <div className="max-w-sm  bg-emerald-700 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
              <div className="w-full h-[200px] rounded-t-lg overflow-hidden object-fill">
                {project.preview_img ? <img
                  className="rounded-t-lg w-full h-full"
                  src={BASE_URL_IMAGE_FOLDER+project.preview_img}
                  alt=""
                />: <img src="" alt="Image"/>}
              </div>
              <div className="p-2 h-[200px]">
                <a href="#">
                  <h5 className="mb-2 text-xl sm:text-xl text-gray-200 font-bold tracking-tight line-clamp-1">
                    {project.name}
                  </h5>
                </a>
                <p className="mb-2 font-normal text-gray-300 line-clamp-4">
                  {project.description}
                </p>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-yellow-400 text-emerald-900 hover:bg-yellow-500 rounded-lg  mr-2 ${
                    project.links.live ? "flex" : "hidden"
                  }`}
                >
                  Live
                </a>
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-100 bg-blue-700 rounded-lg hover:bg-blue-800 "
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>something West worng</div>
      )}
      </div>
    </div>
  );
}
