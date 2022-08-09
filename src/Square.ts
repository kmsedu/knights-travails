export class Square {
  constructor(private x: number, private y: number) {}
  public predecessor = null;
  public coords = `[${this.x}, ${this.y}]`;

  private readonly relativeCoords = [
    [1, 2],
    [-1, -2],
    [2, 1],
    [-2, -1],
    [-1, 2],
    [1, -2],
    [-2, 1],
    [2, -1],
  ];

  public possibleMoves() {
    const moves = this.relativeCoords.map(coords => {
      const newX = this.x + coords[0];
      const newY = this.y + coords[1];

      if (this.checkMoveValidity(newX, newY)) return new Square(newX, newY);

      return null;
    });

    return moves.filter(move => move !== null);
  }

  private checkMoveValidity(newX: number, newY: number) {
    return newX >= 0 && newX < 8 && newY >= 0 && newY < 8;
  }
}
