import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const popularTagsActions = createActionGroup({
  source: "popular tags",
  events: {
    'Get popular tags': emptyProps(),
    'Get popular tags success': props<{ popularTags: string[] }>(),
    'Get popular tags failure': emptyProps(),
  },
});
