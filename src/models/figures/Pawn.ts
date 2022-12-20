import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackPawn, whitePawn } = figuresLogo

export class Pawn extends Figure {
	ifFirstStep: boolean = true

	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackPawn : whitePawn
		this.name = FigureNames.PAWN
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
		const firstStepDirection =
			this.cell.figure?.color === Colors.BLACK ? 2 : -2

		if (
			(target.y === this.cell.y + direction ||
				(this.ifFirstStep &&
					target.y === this.cell.y + firstStepDirection)) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true
		}

		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		) {
			return true
		}
		return false
	}

	moveFigure(target: Cell): void {
		super.moveFigure(target)
		this.ifFirstStep = false
	}
}
