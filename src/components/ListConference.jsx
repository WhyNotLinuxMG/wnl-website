import { motion } from "framer-motion"

const ListConference = ({ image, content, hours }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: .6, ease: 'easeIn' }}
      viewport={{ once: true }}
      className="relative m-5 contrib-container mx-3 h-[424px] w-[282px] ">
      <div className="contrib-container relative mx-3 h-[424px] w-[282px] ">
        <img src={image} className="w-full h-full object-cover   " />
        <div className="w-full h-1/4 bg-gradient-to-b from-[#25252506] via-[#000000d1] to-black  absolute bottom-0 px-4">
          <div className=" font-DMMono flex items-end text-slate-200 text-lg h-16">
            {content}
          </div>
          <div className="font-DMMono text-[#8f8f8fd4] text-lg">{hours}</div>
        </div>
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}
export default ListConference