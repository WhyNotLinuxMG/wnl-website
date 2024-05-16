export default function Associate({ associate, ind }) {
  return (
    <li key={ind} className="m-8">
      <img
        draggable="false"
        src={associate.image}
        alt={associate.nom}
        className=" max-w-64 h-24 object-contain block "
      />
    </li>
  );
}
