import { useRef } from "react";

export default function Home() {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSvg = () => {
    const htmlStr = svgRef.current!.outerHTML;
    const blob = new Blob([htmlStr], { type: "image/svg+xml" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("download", "circle.svg");
    a.setAttribute("href", url);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Demo SVG download</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        width="100"
        height="100"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="green"
          stroke-width="4"
          fill="yellow"
        />
      </svg>
      <button onClick={downloadSvg}>Download</button>
    </div>
  );
}
