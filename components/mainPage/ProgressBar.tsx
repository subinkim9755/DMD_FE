'use client'

import React from 'react'

interface ProgressBarProps {
  /** 현재 단계 (0부터 시작). 3단계면 0, 1, 2 */
  currentStep: number
  /** 전체 단계 수 */
  totalSteps: number
  className?: string
}

export default function ProgressBar({ currentStep, totalSteps, className = '' }: ProgressBarProps) {
  const progressPercent = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>단계 {currentStep + 1} / {totalSteps}</span>
        <span>{Math.round(progressPercent)}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}
