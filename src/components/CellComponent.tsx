import { Cell } from 'models'
import { FC } from 'react'

interface ICellProps {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

export const CellComponent: FC<ICellProps> = ({ cell, selected, click }) => {
	return (
		<div
			onClick={() => click(cell)}
			className={['cell', cell.color, selected ? 'selected' : ''].join(
				' '
			)}
			style={{
				background: cell.available && cell.figure ? 'green' : '',
			}}>
			{cell.available && !cell.figure && <div className={'available'} />}
			{cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
		</div>
	)
}
