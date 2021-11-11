import { ITag } from "domains/tags/state/tag.model";
import { get } from "integrationServices/api";
import { createTag, createTags } from "./tags.akita.model";
import { TagsStore, tagsStore } from "./tags.akita.store";

export class TagsService {
  constructor(private tagstore: TagsStore) {}

  async fetch() {
    const { data } = await get<ITag[]>('/tags');
    console.log({ data })
    this.tagstore.set(createTags(data))
  }
}

export const tagsService = new TagsService(tagsStore);