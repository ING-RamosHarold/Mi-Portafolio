const Contactos = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Sección del copyright */}
        <div className="text-center md:text-left text-white-500 mb-4 md:mb-0">
          <p>&copy; 2024 Harold. Todos los derechos reservados.</p>
        </div>

        {/* Redes sociales en una fila alineada a la derecha */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com" 
            className="p-2 bg-gray-800 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a 
            href="https://twitter.com" 
            className="p-2 bg-gray-800 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            className="p-2 bg-gray-800 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contactos;

