import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackKing, whiteKing } = figuresLogo

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackKing : whiteKing
		this.name = FigureNames.KING
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1

		if (
			(target.y === this.cell.y + direction ||
				target.y === this.cell.y) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true
		}

		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x || target.x === this.cell.x) &&
			this.cell.isEnemy(target)
		) {
			return true
		}
		return false
	}
	moveFigure(target: Cell): void {
		super.moveFigure(target)
	}
}
