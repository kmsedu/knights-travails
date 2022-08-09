import {Square} from './square';

export function knightsTravails(start: number[], end: number[]) {
  const source = new Square(start[0], start[1]);
  const visitedQueue = [source];
  const alreadyVisitedSquares = new Map();
  const path = [];

  while (visitedQueue.length) {
    const vertex = visitedQueue.shift();
    alreadyVisitedSquares.set(vertex?.coords, vertex);
    if (vertex?.coords === `[${end[0]}, ${end[1]}]`) break;

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
}
