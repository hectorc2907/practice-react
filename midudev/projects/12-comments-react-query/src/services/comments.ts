export interface Comment {
  title: string;
  message: string;
  preview?: boolean;
}

export interface CommentWithId extends Comment {
  id: string;
}

const apiKey = "$2a$10$Q.gkkbGZdvYn5P8AUrDwh./TfvQJTvyYL7RurZ8hFc0EbUCNssk8G";

export const getComments = async (): Promise<CommentWithId[]> => {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/667eff22acd3cb34a85eac8a",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": apiKey,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments.");
  }
  const json = await response.json();
  return json?.record;
};

export const postComment = async (comment: Comment): Promise<CommentWithId> => {
  const comments = await getComments();
  const id = crypto.randomUUID();
  const newComment = { ...comment, id };
  const commentsToSave = [...comments, newComment];
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/667eff22acd3cb34a85eac8a",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": apiKey,
      },
      body: JSON.stringify(commentsToSave),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to post comment.");
  }
  return newComment;
};
