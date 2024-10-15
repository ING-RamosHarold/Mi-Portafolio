import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ title, icon, description, backDescription }) => {
  return (
    <div className="perspective">
      <motion.div
        className="card cursor-pointer shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden border-4 border-transparent rounded-[20px]"
        whileHover={{ rotateY: 180 }} // Rotación 3D de la tarjeta al hacer hover
        transition={{ duration: 0.7 }} // Transición suave y elegante
        style={{ perspective: '1000px' }}
      >
        {/* Parte frontal de la tarjeta */}
        <motion.div 
          className="card-front bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 rounded-[20px] p-8 flex flex-col items-center justify-center min-h-[100px] shadow-lg"
          style={{ backfaceVisibility: 'hidden' }} // Evitar mostrar parte trasera
        >
          <motion.div
            className="icon-wrapper bg-white/20 p-4 rounded-full mb-4 flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={icon} alt={title} className="w-14 h-14 object-contain" />
          </motion.div>
          <h3 className="text-white text-[24px] font-bold text-center">{title}</h3>
          <p className="text-white text-[16px] leading-relaxed mt-2 text-center">{description}</p>
        </motion.div>

        {/* Parte posterior de la tarjeta */}
        <motion.div 
          className="card-back bg-white rounded-[20px] p-8 flex flex-col items-center justify-center min-h-[450px] text-center shadow-lg absolute top-0 left-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} // Asegurar visibilidad correcta
        >
          <h3 className="text-black text-[20px] font-bold mb-4">Detalles</h3>
          <p className="text-black text-[16px] leading-relaxed">{backDescription}</p> {/* Contenido diferente en la parte trasera */}
        </motion.div>

      </motion.div>
    </div>
  );
};

const About = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 200; // Cambia este valor según tu preferencia
      
      if (currentScrollY > threshold) {
        controls.start({ opacity: 1, y: 0 }); // Aparecer
      } else {
        controls.start({ opacity: 0, y: -50 }); // Desaparecer
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="flex flex-col items-center text-center pb-20">
      <motion.div 
        variants={textVariant()} 
        initial="hidden" 
        animate={controls} // Controlar la animación según el scroll
        transition={{ duration: 0.5 }} // Transición suave
      >
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.heroHeadText}>Sobre Mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }} // Transición más suave
        className="mt-4 text-[#ffffff] text-[17px] max-w-3xl leading-[30px] text-center"
      >
        Soy un estudiante de Ingeniería de Software, en constante 
        formación y actualización en el campo tecnológico. 
        Me especializo en el desarrollo de sitios web con WordPress,
        combinando mi conocimiento técnico con una pasión por crear 
        soluciones digitales eficientes y atractivas.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            title={service.title} 
            icon={service.icon} 
            description={service.description} 
            backDescription={service.backDescription} // Añadir backDescription
          />
        ))}
      </div>
    </div>
  );
};

// Definición de PropTypes
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, // Añadir descripción para la parte delantera
  backDescription: PropTypes.string.isRequired, // Añadir backDescription para la parte trasera
};

export default About;
