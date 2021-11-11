import { useEffect, useState } from 'react'
import { ITag, ITagState } from '../state/tag.model'
import tagStore from 'domains/tags/state/tag.store'
import { getTags, postNewTag, putTag } from '../service/tag.service'
import { guid } from '@datorama/akita'

export enum ActionEnum {
  None,
  Editing,
  Inserting,
}

/**
 * Hook for Tag store management
 *
 * @export
 * @return {*}  {[
 *   ITagState,
 *   string,
 *   Function,
 *   Function,
 *   { state: ActionEnum; setState: Function }
 * ]}
 */
export function useTagsFacade(componentId: string): [
  ITagState,
  ITag,
  Function,
  Function,
  { state: ActionEnum; setState: Function }
] {
  const [tagState, setTagState] = useState<ITagState>(tagStore.initialState)
  const [tagEditor, setTagEditor] = useState<ITag>({
    id: guid(),
    text: '',
    active: true,
  })
  const [actionState, setActionState] = useState<ActionEnum>(ActionEnum.None)

  const addTag = () => {
    if (actionState === ActionEnum.Inserting) {
      const newTag: ITag = { id: guid(), text: tagEditor.text, active: true }
      postNewTag(newTag)
      setTagEditor({ id: guid(), text: '', active: true })
      setActionState(ActionEnum.None)
    } else {
      putTag(tagEditor)
      setTagEditor({ id: guid(), text: '', active: true })
      setActionState(ActionEnum.None)
    }
  }

  useEffect(() => {
    tagStore.init()
    const tagSubscription = tagStore.subscribe((store) => {
      console.log({ store })
      setTagState(store);
    })
    console.log('Effect de: ', componentId)
    getTags()

    return () => tagSubscription.unsubscribe()
  }, [])

  return [
    tagState,
    tagEditor,
    setTagEditor,
    addTag,
    { state: actionState, setState: setActionState },
  ]
}
