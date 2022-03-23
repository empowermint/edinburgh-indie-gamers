import { micromark } from 'micromark'; // Turns MD into HTML
import { frontmatter, frontmatterHtml } from 'micromark-extension-frontmatter'; // Removes YAML data
import { gfm, gfmHtml } from 'micromark-extension-gfm'; // Supports GitHub Flavoured Markdown
import matter from 'gray-matter'; // Parses YAML data
import fs from 'fs';

const directory = './content/posts/';

export const getFileSlugs = () => {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map(fileName => {
    fileName = fileName.replace(/\.md$/, '');
    const fileContent = getPost(fileName);
    const category = fileContent.yaml.category.toLowerCase();
    return {
      params: {
        postSlug: [category, fileName]
      }
    }
  })
}

export const getPost = (slug) => {
  const filePath = directory + slug + '.md';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = micromark(content, {
    allowDangerousHtml: true,
    extensions: [gfm(), frontmatter()],
    extensionsHtml: [gfmHtml(), frontmatterHtml()]
  });

  return { yaml: data, content: contentHtml };
}
