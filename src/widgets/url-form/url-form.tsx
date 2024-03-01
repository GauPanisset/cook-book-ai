'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import { z } from 'zod'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import { useUpdateSearchParams } from './use-update-search-params'

const UrlForm: React.FunctionComponent = () => {
  const [isError, setIsError] = React.useState(false)

  const searchParams = useSearchParams()
  const updateSearchParams = useUpdateSearchParams()

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      url: { value: string }
    }

    const result = z.string().url().safeParse(target.url.value)

    if (!result.success) {
      console.error(result.error)
      setIsError(true)
      return
    }

    setIsError(false)

    const url = result.data
    updateSearchParams('url', url)
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-row space-x-4">
        <Input
          defaultValue={decodeURIComponent(searchParams.get('url') ?? '')}
          placeholder="Website url"
          name="url"
          onChange={() => setIsError(false)}
        />
        <Button type="submit">Submit</Button>
      </div>

      {isError && (
        <p className="mt-2 text-xs text-destructive">
          The provided URL is not valid
        </p>
      )}
    </form>
  )
}

export default UrlForm
