import { motion } from "framer-motion"

const ListConference = ({ image, content, hours }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: .6, ease: 'easeIn' }}
      viewport={{ once: true }}
      className="relative m-5 contrib-container mx-3 h-[424px] w-[282px] ">
      <img src={image} alt="Example Image" className="w-full h-full object-cover" />
      <div className="absolute bg-gradient-to-b from-[#25252506] via-[#000000d1] to-black h-2/5 w-full bottom-0 px-4 py-3 flex flex-col justify-end">
        <h4 className='font-DMMono text-lg font-semibold text-slate-200  flex items-end  h-16 '>{content}</h4>
        <p className='font-DMMono text-[#8f8f8fd4] text-lg'>{hours}</p>
      </div>
    </motion.div>
  )
}
export default ListConference