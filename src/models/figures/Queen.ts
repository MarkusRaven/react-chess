import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackQueen, whiteQueen } = figuresLogo

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackQueen : whiteQueen
		this.name = FigureNames.QUEEN
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyVertical(target)) {
			return true
		}
		if (this.cell.isEmptyHorizontal(target)) {
			return true
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true
		}
		return false
	}
}
