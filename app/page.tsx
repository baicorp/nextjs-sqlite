import { insertFood } from "@/actions/crud";
import DeleteBtn from "@/components/DeleteBtn";
import SubmitBtn from "@/components/SubmitBtn";
import { db } from "@/db/drizzle";
import { foodTable } from "@/db/schema";

export default async function Home() {
  return (
    <div className="grid grid-cols-2 place-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form className="flex flex-col gap-2" action={insertFood}>
        <div className="flex flex-col">
          <label htmlFor="food-name">Name of the food</label>
          <input
            type="text"
            id="food-name"
            name="food-name"
            className="outline-none p-2 rounded-md text-black"
          />
        </div>
        <SubmitBtn />
      </form>
      <ListMakanan />
    </div>
  );
}

async function ListMakanan() {
  const foods = await db.select().from(foodTable);
  return (
    <div>
      <h2 className="font-bold text-4xl mb-4">List Makanan</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <DeleteBtn foodId={food.id} foodName={food.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
