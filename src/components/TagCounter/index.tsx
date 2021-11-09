import { useTagsFacade } from 'domains/tags/hooks/tags.hook'
import React from 'react'

const TagCounter = (props: any) => {

  const [
    { tags, isLoading },
    tagEditor,
    setTagEditor,
    addTag,
    actionState,
  ] = useTagsFacade('TagCounter')

  return (
    <div>
      <span>Total de {tags.length} tags!</span>
    </div>
  )
}

export default TagCounter