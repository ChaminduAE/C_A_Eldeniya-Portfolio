import { motion } from "framer-motion"

const BgAnimation = () => {
    return (
        <>
            <motion.div
                initial={{
                    width:0,
                }}

                animate={{
                    width:"100vw"

                }}

                transition={{
                    duration:1.1,
                    ease:"easeInOut",
                    delay:0.2,
                }}

                // className="absolute top-[] left-0 z-0 h-[110vh] bg-gradient-to-r from-gray-400 to-gray-200"
                    className="absolute top-[11vh] left-0 z-0 h-[110vh] bg-[url('/public/images/pf3.jpg')] bg-cover bg-center "


            ></motion.div>
            {/* <motion.div
            initial={{
                    width:0,
                }}

                animate={{
                    width:"85vw"

                }}

                transition={{
                    duration:1,
                    ease:"easeInOut",
                    delay:0.7,
                }}
                className="bg-gray-800 border-t-2 border-gray-400 h-[11vh] z-20  absolute left-0 bottom-0 "
                >

            </motion.div> */}
            <motion.div

            initial={{
                    x: "-100vw",
                    rotateZ: 20

                }}

                animate={{
                    x: "-6vw"

                }}

                transition={{
                    duration:1,
                    ease:"easeInOut",
                    delay:0.9
                }}
                
                className="bg-gradient-to-r from-gray-500 to-white h-[178vh] w-[68vw] z-1 absolute -left-[10vw] -top-[58vh]" 
            
                // bg-gradient-to-b from-green-400 to-gray-200 via-yellow-200 
                ></motion.div>
        
        </>

    )
}
export default BgAnimation;