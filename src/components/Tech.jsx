import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from '../styles';

const Tech = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null);
  const [visibleBalls, setVisibleBalls] = useState(Array(technologies.length).fill(false)); // Array para controlar la visibilidad

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mostrar las bolas una por una
      technologies.forEach((_, index) => {
        setTimeout(() => {
          setVisibleBalls((prev) => {
            const newVisibleBalls = [...prev];
            newVisibleBalls[index] = true; // Activar la bola en la posición actual
            return newVisibleBalls;
          });
        }, index * 300); // Retraso para cada bola (300ms)
      });
    }, 800); // Tiempo de espera antes de iniciar la animación

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  return (
    <div className="flex flex-col items-center py-20 relative">
      <div className="text-center mb-10">
        <h2 className={styles.heroHeadText}>Tecnologías que Uso</h2>
        <p className="text-4xl mt-5 text-gray-400">Explorando las herramientas con las que desarrollo.</p>
      </div>

      {/* Añadir margen entre el título y las balls */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-12 gap-x-16 mt-12"> 
        {technologies.map((technology, index) => (
          <div
            className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center transition-transform duration-300 ${
              hoveredTechnology === technology.name ? 'scale-110 z-10' : 'opacity-100 scale-100'
            } ${visibleBalls[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 transition-all duration-500'}`} // Animación de entrada
            key={technology.name}
            onMouseEnter={() => setHoveredTechnology(technology.name)}
            onMouseLeave={() => setHoveredTechnology(null)}
          >
            <BallCanvas icon={technology.icon} />
            {hoveredTechnology === technology.name && (
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 text-white text-lg font-bold uppercase z-20 opacity-90 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg p-3 whitespace-nowrap transition-transform duration-200 scale-105">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;











