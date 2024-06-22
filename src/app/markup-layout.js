import ReactMarkdown from "react-markdown";
import Typography from "@/components/Typography";
import Header from "@/components/Header";

function MarkupLayout({ children }) {
  return (
    <>
      <Header />
      <section className="prose lg:prose-lg">
        {!children && <Typography>Not found 404</Typography>}
        {children && <ReactMarkdown>{children}</ReactMarkdown>}
      </section>
    </>
  );
}

export default MarkupLayout;
