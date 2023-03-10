import { FC, Fragment, useEffect, useState } from 'react'
import { Board, Cell, Player } from 'models'
import { CellComponent } from 'components'

interface IBoardProps {
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
}

export const BoardComponent: FC<IBoardProps> = ({
	board,
	setBoard,
	currentPlayer,
	swapPlayer,
}) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	const click = (cell: Cell) => {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			swapPlayer()
			setSelectedCell(null)
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell)
			}
		}
	}

	const highlightCells = () => {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	useEffect(() => {
		highlightCells()
	}, [selectedCell])

	return (
		<div>
			<h3>Текущий игрок: {currentPlayer?.color}</h3>
			<div className='board'>
				{board.cells.map((row, index) => (
					<Fragment key={index}>
						{row.map((cell) => (
							<CellComponent
								click={click}
								cell={cell}
								key={cell.id}
								selected={
									cell.x === selectedCell?.x &&
									cell.y === selectedCell.y
								}
							/>
						))}
					</Fragment>
				))}
			</div>
		</div>
	)
}
