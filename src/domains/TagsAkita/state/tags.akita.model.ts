import { ID, guid } from '@datorama/akita';

export interface ITag {
  id: ID
  text: string
  active: boolean
}

export interface ITags {
  tags: ITag[]
}

export function createTag(newTag: Partial<ITag>) {
  return {
    id: guid(),
    ...newTag
  } as ITag
}

export function createTags(newTags: Partial<ITag>[]) {
  console.log({ newTags })
  // return [...newTags]
  return newTags.map(newTag => ({ id: guid(), ...newTag })) as ITag[]
}
