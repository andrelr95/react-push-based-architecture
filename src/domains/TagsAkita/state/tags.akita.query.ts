import { QueryEntity } from "@datorama/akita";
import { ITag } from "./tags.akita.model";
import { TagsState, tagsStore, TagsStore } from "./tags.akita.store";

export class TagsQuery extends QueryEntity<TagsState, ITag> {
  constructor(protected store: TagsStore) {
    super(store);
  }
}

export const tagsQuery = new TagsQuery(tagsStore)