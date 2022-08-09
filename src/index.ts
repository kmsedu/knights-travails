import {Square} from './Square';

const knightsTravails = (start: number[], end: number[]) => {
  const source = new Square(start[0], start[1]);
  const visitedQueue = [source];
  const alreadyVisitedSquares = new Map();
  const path = [];

  while (visitedQueue.length) {
    const vertex = visitedQueue.shift();
    alreadyVisitedSquares.set(vertex?.coords, vertex);

    vertex?.possibleMoves().forEach(move => {
      if (move) {
        if (!alreadyVisitedSquares.has(move.coords)) {
          move.predecessor = vertex;
          visitedQueue.push(move);
        }
      }
    });
  }

  let current = alreadyVisitedSquares.get(`[${end[0]}, ${end[1]}]`);
  while (current) {
    path.push(current.coords);
    current = current.predecessor;
  }

  return path.reverse();
};

console.log(knightsTravails([0, 0], [7, 6]));
