import MarkupLayout from "../../../app/markup-layout";
import ReactMarkdown from "react-markdown";
import path from "path";
import { readFile, access } from "fs/promises";
const POSTS_FOLDER = path.join(process.cwd(), "src/app/content/[slug]");

async function readPostFile(slug) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

async function Page({ params }) {
  const markdown = await readPostFile(params.slug);

  return <MarkupLayout>{markdown}</MarkupLayout>;
}

export default Page;
