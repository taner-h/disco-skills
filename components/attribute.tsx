"use client";

export default function Attribute({
  attributeName = "",
  score = 1,
  updateFunction,
}: {
  attributeName: string;
  score: number;
  updateFunction: any;
}) {
  const isOverClass = score > 6 ? "text-c-accent" : "text-c-white";

  return (
    <aside className="flex flex-col items-center justify-center h-full w-full">
      <h5 className={`text-xl hidden md:inline lg:text-2xl ${isOverClass}`}>
        {attributeName}
      </h5>
      <h5 className={`text-2xl md:hidden ${isOverClass}`}>
        {attributeName.slice(0, 3)}
      </h5>
    </aside>
  );
}
