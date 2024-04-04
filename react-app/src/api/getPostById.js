export const POSTS_URL = "https://5fb3db44b6601200168f7fba.mockapi.io/api/posts";

export const getPostById = async (id) => {
  try {
    const response = await fetch(`${POSTS_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Ошибка при получении поста");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
