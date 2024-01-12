// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

import MapFinder from './project_map_finder/MapFinder';

function ProjectPage() {
  const { projectName } = useParams();

  let projectComponent;
  switch (projectName) {
    case 'project-a':
      projectComponent = <MapFinder></MapFinder>;
      break;
      case 'project-b':
          projectComponent = <h1>Este es el proyecto 2</h1>;
      break;
    default:
      projectComponent = <div>Proyecto no encontrado</div>;
  }

  return <div>{projectComponent}</div>;
}

export default ProjectPage;
