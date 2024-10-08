"use client";
import { useFormStatus } from "react-dom";
import Loading from "./Loading";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? "bg-zinc-500" : "bg-white"
      } text-black dis font-bold px-4 py-2 rounded-lg`}
    >
      <span className="flex justify-center items-center gap-2">
        Add Food {pending && <Loading />}
      </span>
    </button>
  );
}
