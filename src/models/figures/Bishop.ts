import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackBishop, whiteBishop } = figuresLogo

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackBishop : whiteBishop
		this.name = FigureNames.BISHOP
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true
		}
		return false
	}
}
