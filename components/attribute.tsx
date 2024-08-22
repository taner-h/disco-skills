"use client";

export default function Attribute({
  attributeName = "",
}: {
  attributeName: string;
}) {
  return (
    <aside className="flex flex-col items-center justify-center h-full w-full">
      <h5 className={`text-xl hidden md:inline lg:text-2xl`}>
        {attributeName}
      </h5>
      <h5 className={`text-2xl md:hidden`}>{attributeName.slice(0, 3)}</h5>
    </aside>
  );
}
