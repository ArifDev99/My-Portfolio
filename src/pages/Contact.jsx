import { useDetails } from "../context/details.context.api";

export default function Contact() {
  const { contact } = useDetails();
  console.log("contact", contact);

  return (
    <div className="p-5 text-black font-semibold">
      <div className="w-full text-center py-8 text-4xl">Contact Info</div>
      <div className="flex justify-between">
        <div className="p-5 w-72 h-28 flex justify-center items-center rounded-xl  bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>Phone: {contact.phone}</p>
        </div>
        <div className="p-5 w-72 h-28 flex justify-center items-center rounded-xl bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
        <div className="p-5 w-72 h-28 flex justify-center items-center rounded-xl bg-yellow-500 border border-purple-800 shadow-[5px_5px_0px_2px_rgba(109,40,217)]">
          <p>
            Location: {contact.location}
          </p>
        </div>
      </div>
    </div>
  );
}
