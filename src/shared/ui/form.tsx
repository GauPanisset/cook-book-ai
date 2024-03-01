'use client'

import { cn } from '@/shared/lib/shadcn'

type Props = {
  children: React.ReactNode
  className: string
  onSubmit: () => void
}

const Form: React.FunctionComponent<Props> = ({
  children,
  className,
  onSubmit,
}) => {
  return (
    <form className={cn(className)} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export { Form }
