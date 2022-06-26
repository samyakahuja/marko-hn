const BASE_URL = "https://node-hnapi.herokuapp.com";
const STORIES_MAP = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  jobs: "jobs",
};

export const getStories = async (category: string, page: number = 0) => {
  const storyCategory = STORIES_MAP[category];

  if (!storyCategory) {
    return Promise.reject(new Error(`category: ${category} not found`));
  }

  const response = await fetch(`${BASE_URL}/${storyCategory}?page=${page}`);
  const data = await response.json();
  return data;
};

export const getStory = async (id: string) => {
  const response = await fetch(`${BASE_URL}/item/${id}`);
  const data = await response.json();
  return data;
};
