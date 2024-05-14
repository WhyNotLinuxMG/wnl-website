export default function Associate({ associate, ind }) {
  return (
    <li key={ind} className="p-5 flex justify-center">
      <img
        draggable="false"
        src={associate.image}
        alt={associate.nom}
        className=" md:w-full h-14 sm:h-16 md:h-20 object-cover block "
      />
    </li>
  );
}
