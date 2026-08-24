import React from 'react';
import { portfolioProjects } from '../data/siteData';

export default function PortfolioCoverArt({ categoryId, title }) {
  const project = portfolioProjects.find((p) => p.id === categoryId) || portfolioProjects[0];

  return (
    <img
      src={project?.image}
      alt={title || project?.title}
      className="w-full h-full object-cover object-center"
      loading="lazy"
    />
  );
}
