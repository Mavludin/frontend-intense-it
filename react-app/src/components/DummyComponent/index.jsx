import React from 'react'

export const DummyComponentMemo = ({ num, getPosts }) => {
  return (
    <button onClick={getPosts}>
        Get posts
    </button>
  )
}

export const DummyComponent = React.memo(DummyComponentMemo)
