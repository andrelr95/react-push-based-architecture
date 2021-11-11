import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { ITag } from "domains/tags/state/tag.model";

export interface TagsState extends EntityState<ITag> {}

@StoreConfig({ name: 'tags '})
export class TagsStore extends EntityStore<TagsState, ITag> {
  constructor() {
    super();
  }
}

export const tagsStore = new TagsStore()