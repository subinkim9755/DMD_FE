'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SelectInfo from '@/components/beforePage/SelectInfo'
import ProgressBar from '@/components/beforePage/ProgressBar'

const TOTAL_STEPS = 7

const STEP_TITLES = [
  '직업을 선택해 주세요',
  '무기를 선택해 주세요',
  '방어구를 선택해 주세요',
  '악세서리를 선택해 주세요',
  '특수장비를 선택해 주세요',
  '캐릭터 스킬정보를 입력해 주세요',
]

const SUMMARY_FIELD_ORDER = [
  '직업', '무기', '무기 강화', '무기 연마', '보조장비 연마',
  '어깨', '어깨 강화', '상의', '상의 강화', '하의', '하의 강화', '벨트', '벨트 강화', '신발', '신발 강화',
  '팔찌', '팔찌 강화', '목걸이', '목걸이 강화', '반지', '반지 강화',
  '보조장비', '보조장비 강화', '마법석', '마법석 강화', '귀걸이', '귀걸이 강화',
  '캐릭터 스킬',
]

export default function MainPage() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [showSummary, setShowSummary] = useState(false)

  const updateField = (type: string, value: string) => {
    setFormData((prev) => ({ ...prev, [type]: value }))
  }

  if (showSummary) {
    return (
      <section className="flex flex-col items-center justify-center overflow-visible w-full min-h-screen bg-white py-8 px-4">
        <div className="flex flex-col gap-6 w-full items-center justify-center md:max-w-[740px]">
          <h2 className="text-2xl font-bold text-gray-800">입력하신 정보</h2>
          <ul className="w-full border border-gray-200 rounded-lg divide-y divide-gray-200 overflow-hidden">
            {SUMMARY_FIELD_ORDER.filter((key) => formData[key] != null && formData[key] !== '').map((key) => (
              <li key={key} className="flex justify-between items-center px-4 py-3 bg-gray-50 even:bg-white">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-900">{formData[key]}</span>
              </li>
            ))}
          </ul>
          <Link href="/result">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              결과 보기
            </button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center overflow-visible w-full min-h-screen bg-white py-8 px-4">
      <div className="flex flex-col gap-8 w-full md:max-w-[740px] lg:max-w-[1400px]">
        {/* 프로그레스바 */}
        <div className="w-full">
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        </div>

        {/* 단계별 선택 영역 */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-2xl font-bold text-gray-800">
            {STEP_TITLES[step]}
          </h2>

          {step === 0 && (
            <div className="w-full max-w-[1400px]">
              <SelectInfo type="직업" info={['전사', '마법사', '궁수', '도적', '클레릭']} value={formData['직업']} onChange={(v) => updateField('직업', v)} />
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-col gap-4 w-full max-w-[1400px]">
              <SelectInfo type="무기" info={['레벨 1 무기', '레벨 2 무기', '레벨 3 무기', '레벨 4 무기', '레벨 5 무기', '레벨 6 무기', '레벨 7 무기', '레벨 8 무기', '레벨 9 무기', '레벨 10 무기']} value={formData['무기']} onChange={(v) => updateField('무기', v)} />
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4 w-full max-w-[1400px]">
              <SelectInfo type="방어구" info={['어느 말괄량이의 탐사복', '포이즈닝 퀸 스파이더', '거인의 스펙쿨룸 아이언', '수호자의 초합금', '스틱키 애시드 웨펀', '섬뜩한 강철용', '빛의 헌신자', '여명을 쏘아 올리는 자', '그란데 전투기갑 파츠', '콰트로 카시테움', '레거시:마력의 소용돌이', '레거시:자연의 수호자']} value={formData['어깨']} onChange={(v) => updateField('어깨', v)} />
            </div>
          )}

          {step === 3 && (
            <div className="w-full max-w-[1400px] flex flex-col gap-4">         
              <SelectInfo type="악세서리" info={['엘팅 메모리얼의 기억', '섬뜩한 빛의 관리자', '부식된 메탈기어', '화력개조 탄띠', '신비로운 빛의 소용돌이', '콰트로 마누스 연산장치', '레거시:에테리얼 리베넌트', '래거시:지나온 영광의 시대']} value={formData['악세서리']} onChange={(v) => updateField('악세서리', v)} />
              </div>
          )}

          {step === 4 && (
            <div className="w-full max-w-[1400px] flex flex-col gap-4">
              <SelectInfo type="특수장비" info={['개구쟁이 호문쿨루스', '라이트닝 에너지 코어', '철갑을 두른 탑의 수호꾼', '깊은 불구덩이의 섬멸자', '허영 속 어둠의 피조물', '부정한 빛의 우상']} value={formData['보조장비']} onChange={(v) => updateField('보조장비', v)} />
            </div>
          )}

          {step === 5 && (
            <div className="w-full max-w-[1400px]">
              <SelectInfo type="캐릭터 스킬" info={['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']} value={formData['캐릭터 스킬']} onChange={(v) => updateField('캐릭터 스킬', v)} />
            </div>
          )}

          {/* 이전 / 다음 버튼 */}
          <div className="flex gap-3 mt-4">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                이전
              </button>
            )}
            {step < TOTAL_STEPS - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                다음
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSummary(true)}
                className="px-6 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                완료
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
