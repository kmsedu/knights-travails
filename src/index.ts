import {knightsTravails} from './knights-travails';

function prettyPrint(moveArray: string[]) {
  const formatMove = (move: string) => {
    const coords = move.replace(/\[|\]/g, '').split(', ');
    const [x, y] = coords;
    const letter = String.fromCharCode(Number(x) + 97);

    return `N${[letter, Number(y) + 1].join('')}`;
  };

  console.log('Starting square:', formatMove(moveArray[0]));
  console.log('Target square:', formatMove(moveArray[moveArray.length - 1]));
  const path = moveArray.map(move => formatMove(move));
  console.log('Path:', path);
}

prettyPrint(knightsTravails([0, 0], [7, 7]));
