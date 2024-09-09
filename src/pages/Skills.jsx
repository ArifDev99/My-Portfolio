import { useDetails } from "../context/details.context.api";
export default function Skills() {
  const {Skills}=useDetails();
  console.log(Skills);
  return (
    <div>
        <div className="w-full text-center py-8 text-4xl">My Skills</div>
        <div className="w-full h-[300px] p-12">
          <ul className="flex justify-center gap-5 flex-wrap text-2xl ">
            {Skills?.map((skill,index)=>
              <li key={index}>
                <div className=" p-6 border border-purple-900 text-black rounded-lg flex justify-center items-center bg-yellow-500 shadow-[0_0px_20px_rgba(109,40,217,_0.7)] ">
                  {skill}
                </div>
              </li>
              )}
          </ul>
        </div>
    </div>
  )
}
