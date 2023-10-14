import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const document = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        subtitle: document.data.subtitle,
        image: document.data.image,
        category: document.data.category,
        date: document.data.date,
        author: document.data.author,
        markdown: document.content,
      };
    })
  );
};

export default getPosts;

export const getUniqueCategories = async () => {
  const posts = await getPosts();
  const allCategories: string[] = posts.reduce((categories: string[], post) => {
    // Divide a string de categoria em um array de categorias
    const postCategories = post.category.split(',');
    // Adiciona as categorias do post à lista geral de categorias
    categories.push(...postCategories);
    return categories;
  }, []);

  // Use um Set para remover duplicatas e, em seguida, converta-o de volta para um array
  const uniqueCategories = Array.from(new Set(allCategories));

  return uniqueCategories;
};