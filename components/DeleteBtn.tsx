"use client";

import { deleteFood } from "@/actions/crud";

export default function DeleteBtn({
  foodId,
  foodName,
}: {
  foodId: string;
  foodName: string;
}) {
  return (
    <div className="flex gap-2">
      <span>{foodName}</span>
      <button onClick={() => deleteFood(foodId)} title={`delete ${foodName}`}>
        🗑️
      </button>
    </div>
  );
}
