import sanitizeHtml from "sanitize-html";

// Truncate sanitized HTML without breaking tags
export default function truncateHtml(html: string, maxLength: number): string {
  const sanitized = sanitizeHtml(html, {
    allowedTags: ["b", "i", "em", "strong"],
    allowedAttributes: {},
  });

  let result = "";
  let currentLength = 0;

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = sanitized;

  function traverse(node: ChildNode) {
    if (currentLength >= maxLength) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      const remaining = maxLength - currentLength;
      const trimmed = text.slice(0, remaining);
      currentLength += trimmed.length;
      result += trimmed;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.nodeName.toLowerCase();
      result += `<${tag}>`;
      node.childNodes.forEach(traverse);
      result += `</${tag}>`;
    }
  }

  tempDiv.childNodes.forEach(traverse);

  return result.trim() + "...";
}
