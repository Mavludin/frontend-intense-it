export const POSTS_URL = "https://5fb3db44b6601200168f7fba.mockapi.io/api/posts";

export const getPosts = async () => {
  try {
    const response = await fetch(POSTS_URL);

    if (!response.ok) {
      throw new Error("Ошибка при получении постов");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
