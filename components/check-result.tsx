import { Dice } from "./dice";
import { Notification } from "./notification";

type Result = 1 | 2 | 3 | 4 | 5 | 6;

export function CheckResult({ outcome }: { outcome: "Success" | "Failure" }) {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getFailure(): [Result, Result] {
    while (true) {
      const a = getRandomInt(1, 6) as Result;
      const b = getRandomInt(1, 6) as Result;
      if (a + b <= 6) return [a, b];
    }
  }

  function getSuccess(): [Result, Result] {
    while (true) {
      const a = getRandomInt(1, 6) as Result;
      const b = getRandomInt(1, 6) as Result;
      if (a + b >= 7) return [a, b];
    }
  }

  const results = outcome === "Success" ? getSuccess() : getFailure();

  return (
    <div className="flex flex-col gap-7 fixed left-[35%] bottom-[12%]">
      <div className="flex gap-[30px] justify-center">
        {results.map((result, index) => (
          <Dice key={index} result={result} />
        ))}
      </div>
      <Notification state={outcome} />
    </div>
  );
}
