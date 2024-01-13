import React from 'react';
import { useState, useImperativeHandle, forwardRef } from 'react';

import './grid.css'

import GrassTile from '../assets/grass.png'
import WallTile from '../assets/wall.png'
import CharacterTile from '../assets/character.png'
import GoalTile from '../assets/goal.png'

const Grid = forwardRef((props, ref) => {
    const [grid, setGrid] = useState(createInitialGrid());
    const [isMouseDown, setIsMouseDown] = useState(false);
    //First row, then column
    const [characterPosition, setCharacterPosition] = useState([18,18])
    const [goalPosition, setGoalPosition] = useState([1,1])

    function createInitialGrid() {
        const gridSize = 20;
        let grid = [];
        
        for (let row = 0; row < gridSize; row++) {
            let currentRow = [];
            for (let col = 0; col < gridSize; col++) {
                currentRow.push(0);
            }
            grid.push(currentRow);
        }
    
        return grid;
    }

    useImperativeHandle(ref, () => ({
        resetGrid() {
          setGrid(createInitialGrid());
        },
        getMapInformation: () => {
          return {
              labyrinth: grid,
              start_row: characterPosition[0],
              start_col: characterPosition[1],
              goal_row: goalPosition[0],
              goal_col: goalPosition[1]
          };
      }

      }));

    const handleMouseOver = (row, col) => {
        if(isMouseDown && props.selectedOption < 2) {
          // Copia la cuadrícula actual y actualiza el valor del cuadrado
          const newGrid = grid.map((currentRow, rowIndex) => {
            if (rowIndex === row) {
              return currentRow.map((cell, colIndex) => {
                if (colIndex === col && !(rowIndex === characterPosition[0] && colIndex === characterPosition[1]) && !(rowIndex === goalPosition[0] && colIndex === goalPosition[1])) {
                  return props.selectedOption;
                }
                return cell;
              });
            }
            return currentRow;
          });
          setGrid(newGrid);
        }
      };

    const clickCharacterGoalPosition = (row, col) => {
        if (!(characterPosition[0] === row && characterPosition[1] === col)){
            if(!(goalPosition[0] === row && goalPosition[1] === col)){
                if(grid[row][col] === 0){
                    if (props.selectedOption === 2) {
                        setCharacterPosition([row, col])
                    } else if (props.selectedOption === 3) {
                        setGoalPosition([row, col])
                    }
                }
            }
        }
    }

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const isSolutionTile = (rowIndex, colIndex) => {
      if (props.solution) {
        return props.solution.some(([col, row]) => row === rowIndex && col === colIndex);
      }
    };

    return (
        <div className='map-container'>
            <div 
            className='grid' 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            >
              {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                  {row.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      className="grid-tile"
                      onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
                      onClick={() => clickCharacterGoalPosition(rowIndex, colIndex)}
                      style={{
                        backgroundImage: isSolutionTile(rowIndex, colIndex) 
                            ? `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url(${col === 0 ? GrassTile : WallTile})` 
                            : `url(${col === 0 ? GrassTile : WallTile})`,
                        backgroundSize: 'cover'
                    }}
                    >
                        {(characterPosition[0] === rowIndex && characterPosition[1] === colIndex) ?
                        <div className='character'
                            style={{
                              backgroundImage: `url(${CharacterTile})`,
                              backgroundSize: 'cover'
                            }}></div> : ''}
                        
                        {(goalPosition[0] === rowIndex && goalPosition[1] === colIndex) ?
                        <div className='goal'
                            style={{
                              backgroundImage: `url(${GoalTile})`,
                              backgroundSize: 'cover'
                            }}></div> : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
    );
});

export default Grid;