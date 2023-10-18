import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const parseDate = (dateStr: any) => {
    const parts = dateStr.split('/')
    if (parts.length === 3) {
        // Format: DD/MM/YYYY
        const day = parseInt(parts[0], 10)
        const month = parseInt(parts[1], 10) - 1
        const year = parseInt(parts[2], 10)
        return new Date(year, month, day)
    } else {
        return null
    }
}

const getPosts = async () => {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)

    const posts = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(postsDirectory, filename)
            const fileContents = await fs.readFile(filePath, 'utf8')
            const document = matter(fileContents)

            return {
                slug: filename.replace(/\.md$/, ''),
                title: document.data.title,
                subtitle: document.data.subtitle,
                image: document.data.image,
                category: document.data.category,
                date: document.data.date,
                author: document.data.author,
                markdown: document.content,
            }
        })
    )

    posts.sort((a, b) => {
        const dateA = parseDate(a.date)
        const dateB = parseDate(b.date)

        if (dateA == null || dateB == null) {
            return 0
        }

        return dateB.getTime() - dateA.getTime()
    })

    return posts
}

export default getPosts

export const getUniqueCategories = async () => {
    const posts = await getPosts()
    const allCategories: string[] = posts.reduce(
        (categories: string[], post) => {
            // Divide a string de categoria em um array de categorias
            const postCategories = post.category.split(',')
            // Adiciona as categorias do post à lista geral de categorias
            categories.push(...postCategories)
            return categories
        },
        []
    )

    // Use um Set para remover duplicatas e, em seguida, converta-o de volta para um array
    const uniqueCategories = Array.from(new Set(allCategories))

    return uniqueCategories
}
