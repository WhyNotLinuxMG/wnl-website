export default function Associate({ associate, ind }) {
  return (
    <li key={ind} className="lg:m-8 m-4">
      <img
        draggable="false"
        loading="lazy"
        src={associate.image}
        alt={associate.nom}
        className="max-w-64 h-24 object-contain block "
      />
    </li>
  );
}
