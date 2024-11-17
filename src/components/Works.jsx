import { styles } from '../styles';
import sp from '../assets/sp.png';
import tc from '../assets/tc.png';
import mc from '../assets/mc.png';
import motoC from '../assets/motoC.png';
import mirta from '../assets/mirta.png';
import full from '../assets/full.png';

function Works() {
  const projects = [
    {
      image: sp,
      title: "Soluciones Poligráficas - Mexico ",
      description: "Este sitio está especializado en evaluaciones para la selección de personal, como pruebas de polígrafo, evaluaciones psicométricas, antidoping y estudios socioeconómicos. ",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://solucionespoligraficas.com/"
    },
    {
      image: tc,
      title: "Total Clean - Perú",
      description: "Total Clean se especializa en servicios de limpieza profesional para diferentes espacios. La página ofrece una descripción de sus servicios, destacando su experiencia y efectividad.",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://totalcleanperu.com"
    },
    {
      image: mc,
      title: "Master Cleen - Madrid España",
      description: "Un sitio orientado a servicios de limpieza y mantenimiento profesional para hogares y oficinas. Se enfoca en soluciones eficientes y personalizadas, ofreciendo detalles sobre los servicios disponibles.",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://masterclean.consigueventas.com"
    },
    {
      image: motoC,
      title: "MotoCenters",
      description: "Esta plataforma está dedicada a la venta y mantenimiento de motocicletas. Ofrece información sobre productos y servicios relacionados con motos, accesorios y mantenimientos.",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://motocenters.consigueventas.com"
    },
    {
      image: mirta,
      title: "Mirta",
      description: "Es una página de comercio digital dedicada a la venta de productos de belleza y cuidado personal, destacando productos exclusivos y estrategias de marketing que buscan atraer más ventas en este sector.",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://mirta2.consigueventas.com"
    },
    {
      image: full,
      title: "FullVentas",
      description: "Es una plataforma que ofrece soluciones y estrategias para ayudar a negocios a mejorar su presencia y ventas en línea, enfocándose en el desarrollo de páginas web, marketing digital, y herramientas de ventas como embudos.",
      tech: ["WordPress", "HTML", "CSS", "JS", "Plugins"],
      link: "https://fullventas.consigueventas.com"
    },
  ];

  return (
    <div className="project-selection">
      {/* Título y subtítulo añadidos */}
      <h2 className={`${styles.sectionSubText} mt-8 mb-4`}>Proyectos</h2>
<p className={`${styles.heroHeadText} mb-12`}>Mis Ultimos Trabajos.</p>

      
      <div className="projects grid grid-cols-3 gap-6 mt-4"> {/* Configurado para 3 columnas */}
        {projects.map((project, index) => (
          <div key={index} className="project-card shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image w-full h-48 object-cover" 
            />
            <div className="project-info p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-white-700">{project.description}</p>
              <div className="tech-icons flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="block mt-4 text-red-600 hover:underline cursor-pointer">
               Visitar sitio web <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;


