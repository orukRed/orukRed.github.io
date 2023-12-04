import { Progress } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      Loading...
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </>

  )
}