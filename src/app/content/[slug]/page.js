import MarkupLayout from "../../../app/markup-layout";
import path from "path";
import { readFile, access } from "fs/promises";
const CONTENT_MARKDOWN_FOLDER = path.join(process.cwd(), "_content-markdown");
import fs from "fs";

async function readPostFile(slug) {
  const filePath = path.resolve(
    path.join(CONTENT_MARKDOWN_FOLDER, `${slug}.mdx`),
  );
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

async function Page({ params }) {
  console.log("params", params);
  // return 123;
  const markdown = await readPostFile(params.slug);

  return <MarkupLayout>{markdown}</MarkupLayout>;
}

export async function generateStaticPaths() {
  const paths = fs
    .readdirSync(CONTENT_MARKDOWN_FOLDER)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => `content/${slug}`); // ({ params: { slug: `content/${slug}` } }));

  return {
    paths,
    fallback: true,
  };
}

export default Page;
