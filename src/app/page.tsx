import { Suspense } from 'react'

import { RecipeExtract } from '@/widgets/recipe-extract'
import { UrlForm } from '@/widgets/url-form'

type Props = {
  searchParams: { url?: string }
}

const Home: React.FunctionComponent<Props> = ({ searchParams }) => {
  const { url } = searchParams

  return (
    <main className="m-auto max-w-4xl space-y-8 p-8">
      <UrlForm />
      {url ? (
        <Suspense fallback={<div>Loading...</div>}>
          <RecipeExtract url={url} />
        </Suspense>
      ) : null}
    </main>
  )
}

export default Home
