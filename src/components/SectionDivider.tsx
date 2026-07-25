export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "1px",
        background: "rgba(255,255,255,0.06)",
        boxShadow: "0 0 8px 1px rgba(99,102,241,0.18), 0 0 2px rgba(99,102,241,0.12)",
      }}
    />
  );
}
