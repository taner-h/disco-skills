export function Notification({ state }: { state: "Success" | "Failure" }) {
  return (
    <div
      className={`${
        state === "Success" ? "notif-success" : "notif-fail"
      }  flex items-center justify-center h-[48px] w-[400px] font-[Dobra-Light] text-white tracking-widest text-4xl`}
    >
      CHECK {state.toUpperCase()}
    </div>
  );
}
