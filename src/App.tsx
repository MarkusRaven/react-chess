import { useState, useEffect } from 'react'
import { BoardComponent, LostFigures, Timer } from 'components'
import { Board, Colors, Player } from 'models'

import 'App.css'

const App = () => {
	const [board, setBoard] = useState(new Board())
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	useEffect(() => {
		restart()
		setCurrentPlayer(whitePlayer)
	}, [])

	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	const swapPlayer = () => {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		)
	}

	return (
		<div className='app'>
			<Timer currentPlayer={currentPlayer} restart={restart} />
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
			<div>
				<LostFigures
					title={'Черные фигуры'}
					figures={board.lostBlackFigures}
				/>
				<LostFigures
					title={'Белые фигуры'}
					figures={board.lostWhiteFigures}
				/>
			</div>
		</div>
	)
}

export default App
