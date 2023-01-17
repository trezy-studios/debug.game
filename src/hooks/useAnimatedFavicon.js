// Module imports
import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'





// Constants
const FRAME_COUNT = 4





export function useAnimatedFavicon() {
	const canvasRef = useRef(null)
	const currentFrameRef = useRef(0)
	const imageRef = useRef(null)

	if (typeof window !== 'undefined') {
		if (canvasRef.current === null) {
			canvasRef.current = document.createElement('canvas')
		}

		if (imageRef.current === null) {
			imageRef.current = document.createElement('img')
		}
	}

	const [isImageLoaded, setIsImageLoaded] = useState(false)

	const updateCanvas = useCallback(() => {
		const canvasElement = canvasRef.current
		const currentFrame = currentFrameRef.current
		const imageElement = imageRef.current

		if (!canvasElement) {
			return
		}

		if (!isImageLoaded) {
			return
		}

		canvasElement.height = 16
		canvasElement.width = 16

		const context = canvasElement.getContext('2d')

		context.clearRect(0, 0, canvasElement.width, canvasElement.height)

		context.drawImage(
			imageElement,
			currentFrame * canvasElement.width,
			0,
			canvasElement.width,
			canvasElement.height,
			0,
			0,
			canvasElement.width,
			canvasElement.height,
		)

		currentFrameRef.current += 1

		if (currentFrameRef.current > (FRAME_COUNT - 1)) {
			currentFrameRef.current = 0
		}

		document
			.querySelector('[rel="icon"]')
			.setAttribute('href', canvasElement.toDataURL('image/png'))
	}, [isImageLoaded])

	useEffect(() => {
		setInterval(updateCanvas, 100)
	}, [
		isImageLoaded,
		updateCanvas,
	])

	useEffect(() => {
		const imageElement = imageRef.current

		if (!imageElement) {
			return
		}

		imageElement.src = '/favicon-spritesheet.png'
		imageElement
			.decode()
			.then(() => setIsImageLoaded(true))
	}, [setIsImageLoaded])
}
