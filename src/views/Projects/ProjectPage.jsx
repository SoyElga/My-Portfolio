// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const { projectName } = useParams();

  let projectComponent;
  switch (projectName) {
    case 'project-a':
      projectComponent = <h1>Este es el proyecto 1</h1>;
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
