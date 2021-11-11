import { ID } from "@datorama/akita";

export type ITag = {
  id: ID
  text: string
  active: boolean
}

export interface ITagState {
  tags: ITag[]
  isLoading: boolean
}
