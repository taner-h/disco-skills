export function UserChoice({ options }: { options: string[] }) {
  return (
    <div className="space-y-1">
      {options.map((option, index) => (
        <p>
          {index + 1}. -{" "}
          <span className="text-[#d94421] hover:text-white cursor-pointer">
            {option}
          </span>
        </p>
      ))}
    </div>
  );
}
