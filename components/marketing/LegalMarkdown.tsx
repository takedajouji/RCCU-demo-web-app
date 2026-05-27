import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export function LegalMarkdown({ content }: { content: string }) {
  return (
    <article className="markdown-body max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
