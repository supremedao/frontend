import "./markup.scss";
import ReactMarkdown from "react-markdown";
import Typography from "@/components/Typography";

function MarkupLayout({ children }) {
  return (
    <section className="markup py-10">
      {!children && <Typography>Not found 404</Typography>}
      {children && <ReactMarkdown>{children}</ReactMarkdown>}
    </section>
  );
}

export default MarkupLayout;
