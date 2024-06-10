import { useState } from "react";
import { motion } from "framer-motion";
import Error from "./Error";
const Popup = () => {
  const [close, setclose] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [ville, setVille] = useState("");
  const [attend, setAttente] = useState("");
  //  to show data
  const [submition, setSubmition] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setclose(true);
  };
  if (close) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && ville && attend && mail) {
      const data = { mail, ville, attend, name };
      console.log(data);
    } else {
      setError("remplir la formulaire");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center z-50 "
    >
      <div className="w-full h-full md:w-[836px] ">
        <div className="  bg-ebony border border-raven p-4 rounded-md relative ">
          <div className="">
            <button onClick={handleClose} className="absolute md:hidden">
              <svg
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14.5C8 13.758 7.267 12.65 6.525 11.72C5.571 10.52 4.431 9.473 3.124 8.674C2.144 8.075 0.956 7.5 0 7.5M0 7.5C0.956 7.5 2.145 6.925 3.124 6.326C4.431 5.526 5.571 4.479 6.525 3.281C7.267 2.35 8 1.24 8 0.500001M0 7.5L24 7.5"
                  stroke="white"
                  strokeWidth="1.66667"
                />
              </svg>
            </button>
            <button
              onClick={handleClose}
              className="absolute hidden md:block right-5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8985 0.867757L9.00002 7.76626L2.10152 0.867757C1.9356 0.715926 1.7175 0.633964 1.49265 0.638946C1.2678 0.643928 1.05354 0.73547 0.894512 0.894501C0.735481 1.05353 0.643939 1.26779 0.638957 1.49264C0.633975 1.71749 0.715936 1.93559 0.867768 2.10151L7.76277 9.00001L0.866018 15.8968C0.781759 15.9771 0.714404 16.0734 0.66791 16.1801C0.621417 16.2868 0.596723 16.4017 0.595282 16.5181C0.59384 16.6345 0.61568 16.75 0.659517 16.8578C0.703354 16.9656 0.768303 17.0636 0.850546 17.146C0.93279 17.2283 1.03067 17.2934 1.13843 17.3374C1.24619 17.3814 1.36166 17.4034 1.47804 17.4021C1.59443 17.4008 1.70938 17.3763 1.81615 17.33C1.92292 17.2836 2.01935 17.2164 2.09977 17.1323L9.00002 10.2355L15.8985 17.134C16.0644 17.2858 16.2825 17.3678 16.5074 17.3628C16.7322 17.3578 16.9465 17.2663 17.1055 17.1073C17.2646 16.9482 17.3561 16.734 17.3611 16.5091C17.3661 16.2843 17.2841 16.0662 17.1323 15.9003L10.2338 9.00176L17.1323 2.10151C17.2165 2.02121 17.2839 1.92488 17.3304 1.81817C17.3769 1.71147 17.4016 1.59655 17.403 1.48016C17.4044 1.36378 17.3826 1.24828 17.3388 1.14046C17.2949 1.03264 17.23 0.934667 17.1477 0.852306C17.0655 0.769946 16.9676 0.704858 16.8599 0.660868C16.7521 0.616879 16.6366 0.594876 16.5202 0.596152C16.4039 0.597429 16.2889 0.621959 16.1821 0.668301C16.0754 0.714644 15.9789 0.781863 15.8985 0.866007V0.867757Z"
                  fill="white"
                />
              </svg>
            </button>
            <h4 className="font-DMMono text-white text-[16px] md:text-[20px] text-center ">
              WNL 2.0 S'inscrire
            </h4>
            <h2 className="text-white font-kontes text-center mt-3 mb-2 md:mt-3 text-[32px] md:text-[58px]">
              Inscrivez- <span className="text-yellow">vous</span>
            </h2>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="flex items-center">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 5L6.68475 7.93775C8.5965 9.02075 9.4035 9.02075 11.3152 7.93775L16.5 5"
                      stroke="white"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.51201 10.6072C1.56076 12.9059 1.58551 14.0557 2.43376 14.9069C3.28201 15.7589 4.46251 15.7882 6.82426 15.8474C8.27926 15.8849 9.72076 15.8849 11.1758 15.8474C13.5375 15.7882 14.718 15.7589 15.5663 14.9069C16.4145 14.0557 16.4393 12.9059 16.4888 10.6072C16.5038 9.86769 16.5038 9.13269 16.4888 8.39319C16.4393 6.09444 16.4145 4.94469 15.5663 4.09344C14.718 3.24144 13.5375 3.21219 11.1758 3.15294C9.72549 3.11634 8.27453 3.11634 6.82426 3.15294C4.46251 3.21219 3.28201 3.24144 2.43376 4.09344C1.58551 4.94469 1.56076 6.09444 1.51126 8.39319C1.49547 9.1311 1.49622 9.86927 1.51201 10.6072Z"
                      stroke="white"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <label
                    className="text-white capitalize font-DMMono pl-3"
                    htmlFor=""
                  >
                    {" "}
                    E-mail{" "}
                  </label>
                </div>
                <input
                  id="mail"
                  name="mail"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                  className=" border border-raven bg-ebony w-full h-[50px] mt-2 rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white "
                  placeholder="Votre email "
                  type="text"
                />
              </div>

              <div className="mb-3">
                <div className="flex items-center">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2366 15.4062C15.1657 13.5549 13.5155 12.2274 11.5896 11.5981C12.5422 11.031 13.2824 10.1669 13.6963 9.13841C14.1103 8.10996 14.1752 6.97405 13.8811 5.90513C13.5871 4.83621 12.9502 3.89338 12.0684 3.22142C11.1866 2.54947 10.1086 2.18555 9.00001 2.18555C7.89137 2.18555 6.81338 2.54947 5.93159 3.22142C5.0498 3.89338 4.41296 4.83621 4.11887 5.90513C3.82479 6.97405 3.88971 8.10996 4.30369 9.13841C4.71766 10.1669 5.45778 11.031 6.4104 11.5981C4.48454 12.2267 2.8343 13.5542 1.76344 15.4062C1.72417 15.4702 1.69813 15.5415 1.68684 15.6158C1.67555 15.69 1.67925 15.7658 1.69772 15.8386C1.71619 15.9114 1.74905 15.9798 1.79438 16.0397C1.8397 16.0996 1.89656 16.1498 1.9616 16.1874C2.02665 16.2249 2.09856 16.2491 2.17309 16.2584C2.24762 16.2678 2.32327 16.2621 2.39557 16.2417C2.46787 16.2213 2.53535 16.1867 2.59404 16.1398C2.65273 16.0929 2.70143 16.0347 2.73727 15.9687C4.06196 13.6793 6.40337 12.3125 9.00001 12.3125C11.5966 12.3125 13.9381 13.6793 15.2627 15.9687C15.2986 16.0347 15.3473 16.0929 15.406 16.1398C15.4647 16.1867 15.5321 16.2213 15.6044 16.2417C15.6767 16.2621 15.7524 16.2678 15.8269 16.2584C15.9015 16.2491 15.9734 16.2249 16.0384 16.1874C16.1035 16.1498 16.1603 16.0996 16.2056 16.0397C16.251 15.9798 16.2838 15.9114 16.3023 15.8386C16.3208 15.7658 16.3245 15.69 16.3132 15.6158C16.3019 15.5415 16.2758 15.4702 16.2366 15.4062ZM5.06251 7.24996C5.06251 6.4712 5.29344 5.70992 5.7261 5.0624C6.15875 4.41488 6.77371 3.9102 7.49319 3.61218C8.21268 3.31416 9.00438 3.23619 9.76818 3.38812C10.532 3.54005 11.2336 3.91506 11.7842 4.46573C12.3349 5.0164 12.7099 5.71799 12.8618 6.48179C13.0138 7.24559 12.9358 8.03729 12.6378 8.75678C12.3398 9.47626 11.8351 10.0912 11.1876 10.5239C10.54 10.9565 9.77877 11.1875 9.00001 11.1875C7.95606 11.1863 6.95519 10.7711 6.21701 10.033C5.47883 9.29478 5.06362 8.29391 5.06251 7.24996Z"
                      fill="white"
                    />
                  </svg>

                  <label
                    className="text-white capitalize font-DMMono pl-3"
                    htmlFor=""
                  >
                    {" "}
                    Nom complet{" "}
                  </label>
                </div>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-raven bg-ebony w-full h-[50px] mt-2 rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white "
                  placeholder=" Votre nom et prénom "
                  type="text"
                />
              </div>

              <div className="mb-3">
                <div className="flex items-center">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 5.47925V15.875M11.25 2.75V13.25M2.25 7.0325C2.25 5.927 2.25 5.375 2.54475 5.0525C2.64906 4.93777 2.77597 4.84585 2.9175 4.7825C3.3165 4.6055 3.84075 4.78025 4.88925 5.12975C5.6895 5.39675 6.08925 5.53025 6.49425 5.516C6.64282 5.51112 6.79054 5.49152 6.93525 5.4575C7.329 5.36375 7.68 5.12975 8.382 4.6625L9.4185 3.971C10.3185 3.371 10.7678 3.071 11.2838 3.00275C11.7998 2.933 12.3128 3.104 13.338 3.446L14.2117 3.737C14.9542 3.9845 15.3255 4.10825 15.5377 4.403C15.75 4.69775 15.75 5.08925 15.75 5.8715V11.9683C15.75 13.073 15.75 13.6257 15.4553 13.9482C15.3508 14.0624 15.2239 14.1538 15.0825 14.2167C14.6835 14.3945 14.1593 14.2197 13.1108 13.8702C12.3105 13.6032 11.9107 13.4698 11.5057 13.484C11.3572 13.4889 11.2095 13.5085 11.0648 13.5425C10.671 13.6362 10.32 13.8703 9.618 14.3375L8.5815 15.029C7.6815 15.629 7.23225 15.929 6.71625 15.9973C6.20025 16.067 5.68725 15.896 4.662 15.554L3.78825 15.263C3.04575 15.0155 2.6745 14.8917 2.46225 14.597C2.25 14.3022 2.25 13.91 2.25 13.1285V7.0325Z"
                      stroke="white"
                      strokeWidth="1.125"
                    />
                  </svg>
                  <label
                    className="text-white capitalize font-DMMono pl-3"
                    htmlFor=""
                  >
                    {" "}
                    ville
                  </label>
                </div>
                <div className="mt-2 flex ">
                  <div
                    className={`flex items-center border ${
                      isChecked ? " border-yellow" : "border-raven"
                    } bg-ebony w-1/2 h-[50px] mt-2 rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white mr-2`}
                  >
                    <input
                      onChange={() => setVille("antananarivo")}
                      checked={ville === "antananarivo"}
                      type="radio"
                      name="ville"
                      id="ville1"
                      className="pr-2"
                    />
                    <label className="text-white ml-2 capitalize" htmlFor="">
                      antananarivo
                    </label>
                  </div>
                  <div className="flex items-center border border-raven bg-ebony w-1/2 h-[50px] mt-2 rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white">
                    <input
                      onChange={() => setVille("fianarantsoa")}
                      checked={ville === "fianarantsoa"}
                      type="radio"
                      name="ville"
                      id="ville1"
                      className="pr-2"
                    />
                    <label className="text-white ml-2 capitalize" htmlFor="">
                      fianarantsoa
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 2V3.5M9 2V3.5M5.25 2V3.5M6 11.75H9M6 8H12M2.625 12.5V7.25C2.625 5.129 2.625 4.06775 3.28425 3.40925C3.94275 2.75 5.004 2.75 7.125 2.75H10.875C12.996 2.75 14.0573 2.75 14.7158 3.40925C15.375 4.06775 15.375 5.129 15.375 7.25V9.5C15.375 13.0355 15.375 14.8032 14.2762 15.9012C13.179 17 11.4113 17 7.875 17H7.125C5.004 17 3.94275 17 3.28425 16.3408C2.625 15.6823 2.625 14.621 2.625 12.5Z"
                      stroke="white"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.375 11.375C15.375 11.6212 15.3265 11.865 15.2323 12.0925C15.138 12.32 14.9999 12.5267 14.8258 12.7008C14.6517 12.8749 14.445 13.013 14.2175 13.1073C13.99 13.2015 13.7462 13.25 13.5 13.25C13.125 13.25 12.684 13.1847 12.3203 13.2822C12.1613 13.3248 12.0163 13.4085 11.8999 13.5249C11.7835 13.6413 11.6998 13.7863 11.6573 13.9453C11.5598 14.309 11.625 14.7507 11.625 15.125C11.625 15.6223 11.4275 16.0992 11.0758 16.4508C10.7242 16.8025 10.2473 17 9.75 17"
                      stroke="white"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <label
                    className="text-white capitalize font-DMMono pl-3"
                    htmlFor=""
                  >
                    {" "}
                    Votre attente
                  </label>
                </div>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`border ${
                      isChecked ? "border-yellow" : "border-raven"
                    } ${
                      error ? "border-red-900" : "border-raven"
                    } bg-ebony w-full h-[50px] rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white flex items-center`}
                  >
                    <input
                      onChange={() => setAttente("reseautage")}
                      checked={attend === "reseautage"}
                      type="radio"
                      name="reseautage"
                      id="reseautage"
                      className={`${
                        isChecked ? "border-yellow" : "border-raven"
                      } mr-2`}
                    />
                    <label className="text-white capitalize" htmlFor="option1">
                      Le reseautage
                    </label>
                  </div>

                  <div
                    className={`border ${
                      isChecked ? "border-yellow" : "border-raven"
                    } bg-ebony w-full h-[50px] rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white flex items-center`}
                  >
                    <input
                      onChange={() => setAttente("confrence")}
                      checked={attend === "confrence"}
                      type="radio"
                      name="confrence"
                      id="confrence"
                      className={`${isChecked} ? 'border-yellow' : 'border-raven' mr-2`}
                    />
                    <label className="text-white capitalize" htmlFor="option2">
                      Les conférence
                    </label>
                  </div>

                  <div
                    className={`border ${
                      isChecked ? "border-yellow" : "border-raven"
                    } bg-ebony w-full h-[50px] rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white flex items-center`}
                  >
                    <input
                      onChange={() => setAttente("competition")}
                      checked={attend === "competition"}
                      type="radio"
                      name="competition"
                      id="competition"
                      className={`${
                        isChecked ? "border-yellow" : "border-raven"
                      } mr-2`}
                    />
                    <label className="text-white capitalize" htmlFor="option3">
                      La compétition
                    </label>
                  </div>

                  <div
                    className={`md:col-span-3 border ${
                      isChecked ? "border-yellow" : "border-raven"
                    } bg-ebony w-full h-[50px] rounded-md pl-3 focus:border-none placeholder:font-DMMono text-white flex items-center`}
                  >
                    <input
                      onChange={() => setAttente("autre")}
                      checked={attend === "autre"}
                      type="radio"
                      name="autre"
                      id="autre"
                      className={`${
                        isChecked ? "border-yellow" : "border-raven"
                      } mr-2`}
                    />
                    <label className="text-white capitalize" htmlFor="option4">
                      Autre
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-3">
                <button
                  type="submit"
                  className="font-DMMono bg-white focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Popup;
