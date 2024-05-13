const ListConference = ({image,content,hours}) => {
  return (
    <div className='relative m-5'>
        <img src={image}  alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 w-full"></div>
              <div className='text-white absolute bottom-3 left-9   '>
                <h4 className='font-DMMono text-[22px] font-semibold pb-5'>{content}</h4>
                <p className='font-medium text-raven'>{hours}</p>
              </div>
    </div>
  )
}



export default ListConference