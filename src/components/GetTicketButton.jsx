function GetTicketButton() {
  return (
    <button className="px-8 py-4 bg-white self-stretch sm:self-center font-[DMMono] rounded-md">
        <span className="text-[15px] md:text-xl">Obtenir un billet</span>
        <svg className="ms-4 inline" width="24" height="14" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0.288086C16 1.03009 16.733 2.13809 17.475 3.06809C18.429 4.26809 19.569 5.31509 20.876 6.11409C21.856 6.71309 23.044 7.28809 24 7.28809M24 7.28809C23.044 7.28809 21.855 7.86309 20.876 8.46209C19.569 9.26209 18.429 10.3091 17.475 11.5071C16.733 12.4381 16 13.5481 16 14.2881M24 7.28809H0" stroke="#020F13" strokeWidth="1.66667" />
        </svg>
    </button>
  )
}

export default GetTicketButton