const SponsorPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 text-whiteSmoke p-6 rounded shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <p className="my-4">Vous êtes intéressé à devenir sponsor de l'événement Why Not Linux pour la prochaine édition ?</p>
        <p className="my-4">Rejoignez-nous en envoyant un message à <a href="https://web.facebook.com/profile.php?id=100091340490173">  notre page Facebook </a> ou à l'email suivant : rivo2302@gmail.com.</p>
        <p className="my-4">Nous espérons vous compter parmi nous pour cet événement dédié à Linux et à l'open source.</p>
        <button
          onClick={onClose}
          className="bg-slate-950 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default SponsorPopup;
