import data from "../Data/My_data.json";

export default function About() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold my-4 w-full text-center py-12">Who am I ?</h1>
          <div className="p-3 flex justify-center">
             <div className="p-8 border  rounded-xl w-full h-full text-xs md:text-xl md:leading-9 font-bold ">
              {data.Description}
             </div>
             {/* todo: add an image or cool something */}
             <div className="w-[30%] h-full hidden md:flex bg-red-500">
              cool things
              <img src="" alt="" />
             </div>
          </div>
      </div>
    </div>
  )
}
