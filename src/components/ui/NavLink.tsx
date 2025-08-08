import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a 
      href={href}
      onClick={handleClick}
      className="text-gray-700 hover:text-primary-600 font-medium transition duration-300"
    >
      {children}
    </a>
  );
};