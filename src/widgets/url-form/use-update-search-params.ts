import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { createUrl } from '@/shared/lib/create-url'

const useUpdateSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)

    router.push(createUrl(pathname, params))
  }

  return updateSearchParams
}

export { useUpdateSearchParams }
