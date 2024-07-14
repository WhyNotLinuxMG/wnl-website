import React from "react";
import { motion } from "framer-motion";
function GetTicketButton({ setIsPop, isPop }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white font-DMMono rounded-md mb-3 w-full max-w-xs h-14 flex items-center justify-center px-4 py-2 sm:w-auto md:mr-5"
      aria-label="Get a ticket"
      onClick={() => setIsPop(!isPop)}
    >
      <span className="text-sm md:text-xl mb-0">Obtenir un billet</span>
      <svg
        className="ml-2 inline-block"
        width="24"
        height="14"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0.288086C16 1.03009 16.733 2.13809 17.475 3.06809C18.429 4.26809 19.569 5.31509 20.876 6.11409C21.856 6.71309 23.044 7.28809 24 7.28809M24 7.28809C23.044 7.28809 21.855 7.86309 20.876 8.46209C19.569 9.26209 18.429 10.3091 17.475 11.5071C16.733 12.4381 16 13.5481 16 14.2881M24 7.28809H0"
          stroke="#020F13"
          strokeWidth="1.66667"
        />
      </svg>
    </motion.button>
  );
}

export default GetTicketButton;
