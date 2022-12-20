import { Figure, FigureNames } from 'models/figures/Figure'
import { Colors, Cell } from 'models'

import { figuresLogo } from 'common/assets'

const { blackKnight, whiteKnight } = figuresLogo

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackKnight : whiteKnight
		this.name = FigureNames.KNIGHT
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}
