import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackRook, whiteRook } = figuresLogo

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackRook : whiteRook
		this.name = FigureNames.ROOK
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
		return false
	}
}
