// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

import MapFinder from './project_map_finder/MapFinder';

function ProjectPage() {
  const { projectName } = useParams();

  let projectComponent;
  switch (projectName) {
    case 'labyrinth-solver':
      projectComponent = <MapFinder></MapFinder>;
      break;
    default:
      projectComponent = <h1>The project you are looking for has not been found</h1>;
  }

  return <div>{projectComponent}</div>;
}

export default ProjectPage;
