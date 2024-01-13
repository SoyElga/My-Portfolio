import React, { useRef, useState } from 'react';
import { POST } from '../../../utils/AuthService';

import Grid from './components/Grid';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import GrassTile from './assets/grass.png';
import WallTile from './assets/wall.png';
import CharacterTile from './assets/character.png';
import GoalTile from './assets/goal.png';
import AStarPseudocode from './assets/A_star_pseudo.svg';

import './MapFinder.css'

function MapFinder(props) {
    const [selectedBlock, setSelectedBlock] = useState(0);
    const [solution, setSolution] = useState([]);

    const blocks = [GrassTile, WallTile, CharacterTile, GoalTile];
    const gridRef = useRef();

    const handleReset = () => {
        gridRef.current.resetGrid();
        setSolution([])
      };

    const handleButtonSolveLab = async () => {
        try{
            const gridState = gridRef.current.getMapInformation();
            const response = await POST('/solve-labyrinth/a-star', gridState)
            if (response.statusCode === 200) {
                setSolution(response.data)
            } else {
                alert(`Error: ${response.message}`)
            }
        } catch (error) {
            alert(`There was an error in the connection: ${error}`)
        }
    };

    return (
        <div>
            <h1 className='page-title'>Labyrinth solver</h1>
            <div className='project-page'>
                <div className='content'>
                    <div className='map'>
                        <Grid ref={gridRef} selectedOption={selectedBlock} solution={solution.length > 0 ? solution : null}></Grid>
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
                    <h1 className='algorith-name-banner'>A* Algorith</h1>
                    <img className="pseudocode" src={ AStarPseudocode } alt="A star Pseudocode" />
                    <Button variant='warning' className='solve-button' onClick={handleButtonSolveLab}>Solve Labyrinth</Button>
                </div>  
            </div>
        </div>
    );
}

export default MapFinder;