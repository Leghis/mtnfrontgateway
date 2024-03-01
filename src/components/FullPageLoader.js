import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Utilisation de useNavigate au lieu de useHistory

const FullPageLoader = memo(({ message = "Chargement", description = "Veuillez patienter...", seconds = 2, onComplete, redirectTo, isActive = false }) => {
  const navigate = useNavigate(); // useNavigate au lieu de useHistory

  useEffect(() => {
    if (!isActive) return; // Si isActive est false, ne rien faire

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete(); // S'assurer que onComplete est défini avant de l'appeler
      }
      navigate(redirectTo); // Redirection vers la route spécifiée
    }, seconds * 1000);

    return () => clearTimeout(timer);
  }, [isActive, onComplete, seconds, redirectTo, navigate]); // Ajouter isActive aux dépendances

  if (!isActive) return null; // Si isActive est false, ne pas afficher le loader

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
        </div>
        <p className="text-white text-lg font-semibold mt-4">{message}</p>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
});

FullPageLoader.propTypes = {
  message: PropTypes.string,
  description: PropTypes.string,
  seconds: PropTypes.number,
  onComplete: PropTypes.func,
  redirectTo: PropTypes.string.isRequired,
  isActive: PropTypes.bool, // Déclaration de la nouvelle propriété
};

export default FullPageLoader;
