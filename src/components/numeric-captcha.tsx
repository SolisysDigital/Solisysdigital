'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const CODE_LENGTH = 5

function generateCode(): string {
  let code = ''
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += Math.floor(Math.random() * 10).toString()
  }
  return code
}

function drawCaptcha(canvas: HTMLCanvasElement, code: string) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const { width, height } = canvas

  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = '#f3f4f6'
  ctx.fillRect(0, 0, width, height)

  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.4)`
    ctx.beginPath()
    ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2 + 0.5, 0, Math.PI * 2)
    ctx.fill()
  }

  for (let i = 0; i < 6; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 150}, ${Math.random() * 150}, ${Math.random() * 150}, 0.6)`
    ctx.lineWidth = Math.random() * 2 + 0.5
    ctx.beginPath()
    ctx.moveTo(Math.random() * width, Math.random() * height)
    ctx.bezierCurveTo(
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height,
      Math.random() * width,
      Math.random() * height
    )
    ctx.stroke()
  }

  const charWidth = width / (CODE_LENGTH + 1)
  for (let i = 0; i < code.length; i++) {
    ctx.save()
    const x = charWidth * (i + 0.75)
    const y = height / 2 + (Math.random() * 10 - 5)
    ctx.translate(x, y)
    ctx.rotate(Math.random() * 0.5 - 0.25)
    ctx.font = `${Math.floor(Math.random() * 8 + 28)}px monospace`
    ctx.fillStyle = `rgb(${Math.random() * 80}, ${Math.random() * 80}, ${Math.random() * 80})`
    ctx.fillText(code[i], 0, 0)
    ctx.restore()
  }
}

type NumericCaptchaProps = {
  onChange: (isValid: boolean) => void
  error?: boolean
}

export function NumericCaptcha({ onChange, error }: NumericCaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [code, setCode] = useState(generateCode)
  const [input, setInput] = useState('')

  const refresh = useCallback(() => {
    setCode(generateCode())
    setInput('')
    onChange(false)
  }, [onChange])

  useEffect(() => {
    if (canvasRef.current) {
      drawCaptcha(canvasRef.current, code)
    }
  }, [code])

  const handleInputChange = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, CODE_LENGTH)
    setInput(digits)
    onChange(digits.length === CODE_LENGTH && digits === code)
  }

  return (
    <div className="space-y-2">
      <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
        Security code *
      </label>
      <div className="flex items-center gap-3">
        <canvas
          ref={canvasRef}
          width={180}
          height={56}
          className="rounded-lg border border-gray-300 bg-gray-100"
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={refresh}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
          title="Get a new code"
        >
          ↻ New code
        </button>
      </div>
      <input
        type="text"
        id="captcha"
        name="captcha"
        inputMode="numeric"
        autoComplete="off"
        required
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        className={`w-full rounded-lg border px-4 py-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 ${
          error ? 'border-red-400' : 'border-gray-300'
        }`}
        placeholder="Enter the numbers shown above"
        maxLength={CODE_LENGTH}
      />
      {error && (
        <p className="text-sm text-red-600">Incorrect security code. Please try again.</p>
      )}
    </div>
  )
}
