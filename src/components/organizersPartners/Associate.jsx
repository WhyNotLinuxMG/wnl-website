export default function Associate({ associate, ind }) {
  return (
    <li key={ind} className="p-5 w-[15rem]  h-[8rem] flex justify-center">
      <img
        draggable="false"
        src={associate.image}
        alt={associate.nom}
        className=" w-full h-14 sm:h-16 md:h-20   object-contain block "
      />
    </li>
  );
}
