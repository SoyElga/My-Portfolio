// ProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

import MapFinder from './project_map_finder/MapFinder';
import NotFoundPage from '../../global_components/NotFoundPage/NotFoundPage'

function ProjectPage() {
  const { projectName } = useParams();

  let projectComponent;
  switch (projectName) {
    case 'labyrinth-solver':
      projectComponent = <MapFinder></MapFinder>;
      break;
    default:
      projectComponent = <NotFoundPage></NotFoundPage>;
  }

  return <div>{projectComponent}</div>;
}

export default ProjectPage;
