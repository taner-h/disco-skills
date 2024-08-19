import type { Choice } from "./homepage";

export function UserChoice({ options }: { options: Choice[] }) {
  return (
    <div className="space-y-1">
      {options.map((option, index) => (
        <p key={index}>
          {index + 1}. -{" "}
          <span
            onClick={() => option.callback()}
            className={`${
              option.isClicked ? "text-[#d94421]/50" : "text-[#d94421]"
            } hover:text-white cursor-pointer`}
          >
            {option.text}
          </span>
        </p>
      ))}
    </div>
  );
}
