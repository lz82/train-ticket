import React, { lazy, Suspense } from 'react'

import Loading from '../loading'

const LazyPage = lazy(() => import(/* webpackChunkName: "lazy-page" */'./lazy-page'))

function Lazy() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyPage />
      </Suspense>
    </div>
  )
}

export default Lazy
