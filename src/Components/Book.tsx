import { motion, Variants } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function Booker(){

    const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // 👈 important
      stiffness: 100,
      damping: 10,
    },
  },
}


  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(236, 72, 153, 0.4)',
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  }

    return(
        <motion.div variants={itemVariants}>
            <Link 
              href="/reservation" 
              className="btn btn-primary bg-yellow-600 hover:bg-yellow-700 border-none text-white text-lg px-8 py-6 rounded shadow-lg"
            >
              <Calendar className="inline-block mr-2" size={20} />
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                className="block"
              >
                Réserver maintenant
              </motion.span>
            </Link>
        </motion.div>
    );
}