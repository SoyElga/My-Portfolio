import React, { useRef, useState } from 'react';
import Grid from './components/Grid';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import GrassTile from './assets/grass.png'
import WallTile from './assets/wall.png'
import CharacterTile from './assets/character.png'
import GoalTile from './assets/goal.png'

import './MapFinder.css'

function MapFinder(props) {
    const [selectedBlock, setSelectedBlock] = useState(0)

    const blocks = [GrassTile, WallTile, CharacterTile, GoalTile]
    const gridRef = useRef();

    const handleReset = () => {
        gridRef.current.resetGrid();
      };

    return (
        <div>
            <h1>Labyrinth solver</h1>
            <div className='project-page'>
                <div className='content'>
                    <div className='map'>
                        <Grid ref={gridRef} selectedOption={selectedBlock}></Grid>
                        <div className='selector'>
                        {blocks.map((block, blockIndex) => (
                        <div 
                            key={blockIndex}
                            className={`option ${selectedBlock === blockIndex ? 'active' : ''}`} 
                            style={{
                                backgroundImage: `url(${block})`,
                                backgroundSize: 'cover'
                            }}
                            onClick={() => setSelectedBlock(blockIndex)}
                        >
                        </div>
                    ))}
                        </div>
                        <Button variant="success" className='reset-button' onClick={handleReset}>Restart Map</Button>
                    </div>
                </div>
                <div className='solving-options'>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Solving options
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>Breadth-First Search</Dropdown.Item>
                        <Dropdown.Item>Depth-First Search</Dropdown.Item>
                        <Dropdown.Item>A* Search</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button variant='warning'>Solve Labyrinth</Button>
                </div>  
            </div>
        </div>
    );
}

export default MapFinder;