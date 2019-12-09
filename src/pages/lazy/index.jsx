import React, { lazy, Suspense } from 'react'

const LazyPage = lazy(() => import(/* webpackChunkName: "lazy-page" */'./lazy-page'))

function Lazy() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <LazyPage />
      </Suspense>
    </div>
  )
}

export default Lazy
