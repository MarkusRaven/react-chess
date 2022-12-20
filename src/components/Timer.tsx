import { FC, useEffect, useRef, useState } from 'react'
import { Colors, Player } from 'models'

interface ITimerProps {
	currentPlayer: Player | null
	restart: () => void
}

export const Timer: FC<ITimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState<number>(300)
	const [whiteTime, setWhiteTime] = useState<number>(300)
	const timer = useRef<null | ReturnType<typeof setInterval>>(null)

	useEffect(() => {
		startTimer()
	}, [currentPlayer])

	const startTimer = () => {
		if (timer.current) {
			clearInterval(timer.current)
		}
		const callback =
			currentPlayer?.color === Colors.WHITE
				? decrementWhiteTimer
				: decrementBlackTimer
		timer.current = setInterval(callback, 1000)
	}

	const decrementBlackTimer = () => {
		setBlackTime((v) => v - 1)
	}

	const decrementWhiteTimer = () => {
		setWhiteTime((v) => v - 1)
	}

	const handleRestart = () => {
		setWhiteTime(300)
		setBlackTime(300)
		restart()
	}

	return (
		<div>
			<div>
				<button onClick={handleRestart}>Restart game</button>
			</div>
			<h2>Черные - {blackTime}</h2>
			<h2>Белые - {whiteTime}</h2>
		</div>
	)
}
