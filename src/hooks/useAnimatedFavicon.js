// Module imports
import {
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'




/**
 * Renders a spritesheet into the favicon!
 *
 * @param {object} options All options.
 * @param {number} options.frameCount How many frames are in your animation.
 * @param {number} [options.frameRate = 100] The frame rate (in milliseconds) at which the sprite will be rendered.
 * @param {number} options.imageURL URL for the favicon spritesheet.
 * @param {'horizontal' | 'vertical'} [options.spritesheetDirection = 'horizontal'] Whether the spritesheet is a horizontal or vertical strip.
*/
export function useAnimatedFavicon(options) {
	const {
		frameCount,
		frameRate = 100,
		imageURL,
		spritesheetDirection = 'horizontal',
	} = options

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

		const sourceX = (spritesheetDirection === 'horizontal') ? currentFrame * canvasElement.width : 0
		const sourceY = (spritesheetDirection === 'vertical') ? currentFrame * canvasElement.height : 0

		context.drawImage(
			imageElement,
			sourceX,
			sourceY,
			canvasElement.width,
			canvasElement.height,
			0,
			0,
			canvasElement.width,
			canvasElement.height,
		)

		currentFrameRef.current += 1

		if (currentFrameRef.current > (frameCount - 1)) {
			currentFrameRef.current = 0
		}

		document
			.querySelector('[rel="icon"]')
			.setAttribute('href', canvasElement.toDataURL('image/png'))
	}, [isImageLoaded])

	useEffect(() => {
		setInterval(updateCanvas, frameRate)
	}, [
		isImageLoaded,
		updateCanvas,
	])

	useEffect(() => {
		const imageElement = imageRef.current

		if (!imageElement) {
			return
		}

		imageElement.src = imageURL
		imageElement
			.decode()
			.then(() => setIsImageLoaded(true))
	}, [
		imageURL,
		setIsImageLoaded,
	])
}
