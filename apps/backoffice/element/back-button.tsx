'use client'

import { ArrowLeft } from '@carbon/icons-react'
import { Button } from '@carbon/react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  return (
    <Button
      renderIcon={ArrowLeft}
      onClick={() => {
        router.back()
      }}
    >
      Back
    </Button>
  )
}
