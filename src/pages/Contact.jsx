import { useDetails } from "../context/details.context.api";

export default function Contact() {
  const { contact } = useDetails();
  console.log("contact", contact);

  return (
    <div className="p-3 md:p-5 h-[500px] font-semibold">
      <div className="w-full text-center py-8 text-4xl my-5">Contact Info</div>
      <div className="flex-col md:flex md:flex-row justify-between text-black">
        <div className="p-5 my-4  w-full h-14 md:w-72 md:h-28 flex justify-center items-center rounded-xl  bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>Phone: {contact.phone}</p>
        </div>
        <div className="p-5 my-4 w-full h-14 md:w-72 md:h-28 flex justify-center items-center rounded-xl bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
        <div className="p-5 my-4 w-full h-14 md:w-72 md:h-28 flex justify-center items-center rounded-xl bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>
            Location: {contact.location}
          </p>
        </div>
      </div>
    </div>
  );
}
