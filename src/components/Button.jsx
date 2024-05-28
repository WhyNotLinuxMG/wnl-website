import { motion } from 'framer-motion'
import Vector from '../assets/images/Vector.png'
const Button = ({content}) => {
  return (
    <>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target='_blank' href='http://whynotlinux@iteam-s.mg '
          className='flex w-[300px] border border-raven  rounded-md items-center justify-center p-2   '>
            <a className='text-white capitalize mr-6 font-DMMono text-nowrap hover:text-bruning' >{content}</a>
            <img className='object-contain' src={Vector} alt="" />
        </motion.a>
    </>
  )
}

export default Button