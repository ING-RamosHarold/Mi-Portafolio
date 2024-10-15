import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <section className="bg-[#050816] text-white py-10 px-5"> {/* Cambié el color de fondo aquí */}
      <div className="text-center mb-10">
        <p className="text-lg text-[#bdbdf2]">Experience</p>
        <h2 className="text-5xl font-extrabold text-[#f2f2f2]">Mi Experiencia Laboral</h2>
      </div>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: 'linear-gradient(135deg, #1c1c5c, #25255c)',
              color: '#fff',
              borderRadius: '12px',
              transition: 'background 0.3s ease, box-shadow 0.3s ease',
            }}
            contentArrowStyle={{ borderRight: '7px solid #25255c' }}
            date={experience.date}
            iconStyle={{
              background: experience.iconBg,
              color: '#fff',
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
            }
            // Hover effect on the card
            className="hover:scale-105 transition-all cursor-pointer duration-300 ease-in-out"
          >
            {/* Contenido dentro de las tarjetas */}
            <h3 className="vertical-timeline-element-title text-2xl font-bold text-[#fff] transition-all duration-300 ease-in-out hover:text-[#e5e5e5]">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg text-[#d1d1d9] transition-all duration-300 ease-in-out hover:text-[#f0f0f0]">
              {experience.company_name}
            </h4>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-[#e0e0e0] text-base leading-relaxed transition-all duration-300 ease-in-out hover:text-[#fff]">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

