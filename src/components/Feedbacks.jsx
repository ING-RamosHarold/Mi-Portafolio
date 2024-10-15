import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useState, useEffect } from "react";

// FeedbackCard Component
const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)}
    className={`bg-white bg-opacity-20 p-8 rounded-3xl shadow-lg w-full flex-shrink-0`}
  >
    <p className='text-white font-black text-[30px] leading-none mb-4'>"</p>

    <div>
      <p className='text-white tracking-wide text-[14px]'>{testimonial}</p>

      <div className='mt-6 flex items-center gap-3'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <p className='text-white font-medium text-[12px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='text-secondary text-[10px]'>{designation} of {company}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Feedbacks Component
const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonials.length;

  // Función para moverse al siguiente testimonio
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  // Configurar intervalo para el desplazamiento automático
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(interval);
  }, [totalTestimonials]);

  return (
    <div className='relative mt-12 bg-[#050816] rounded-[20px] p-10 flex flex-col items-center'>
      {/* Fondo visual mejorado */}
      <div className='bg-gradient-to-r from-[#0d0d2b] via-[#0a0c23] to-[#050816] rounded-[20px] w-full max-w-[1300px] p-8'>
        {/* Título de testimonios */}
        <div className={`bg-[#1a1a2e] rounded-2xl p-8 text-center`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Mis Clientes</p>
            <h2 className={styles.sectionHeadText}>Testimonios</h2>
          </motion.div>
        </div>

        {/* Mostrar un solo testimonio */}
        <div className='relative mt-12 overflow-hidden'>
          <div className='flex justify-center transition-transform duration-300'>
            {/* Mostrar el testimonio actual */}
            <FeedbackCard {...testimonials[currentIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

