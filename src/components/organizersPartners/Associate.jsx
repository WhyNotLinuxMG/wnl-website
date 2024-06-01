export default function Associate({ associate, ind }) {
  return (
    <li key={ind} className="m-8">
      <img
        draggable="false"
        loading="lazy"
        src={associate.image}
        alt={associate.nom}
        className=" lg:max-w-64 lg:h-24 max-w-48 h-48 object-contain block "
      />
    </li>
  );
}
