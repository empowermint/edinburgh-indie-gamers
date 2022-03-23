import { micromark } from 'micromark'; // Turns MD into HTML
import { frontmatter, frontmatterHtml } from 'micromark-extension-frontmatter'; // Removes YAML data
import { gfm, gfmHtml } from 'micromark-extension-gfm'; // Supports GitHub Flavoured Markdown
import matter from 'gray-matter'; // Parses YAML data
const fs = require('fs');
// import fs from 'fs';

const postDirectory = './content/posts/';
const pageDirectory = './content/';

export const getPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map(fileName => {
    fileName = fileName.replace(/\.md$/, '');
    const fileContent = getContents(fileName, 'post');
    const category = fileContent.yaml.category.toLowerCase();
    return {
      params: {
        postSlug: [category, fileName]
      }
    }
  })
}

export const getPageSlugs = () => {
  const fileNames = fs.readdirSync(pageDirectory);
  return fileNames.map(fileName => {
    fileName = fileName.replace(/\.md$/, '');
    return {
      params: {
        pageSlug: fileName
      }
    }
  })
}

export const getContents = (slug, type) => {
  const filePath = (type === 'post' ? postDirectory : pageDirectory) + slug + '.md';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const contentHtml = micromark(content, {
    allowDangerousHtml: true,
    extensions: [gfm(), frontmatter()],
    extensionsHtml: [gfmHtml(), frontmatterHtml()]
  });

  return { yaml: data, content: contentHtml };
}
