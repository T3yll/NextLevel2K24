import dbConnect from "../../mongodb";
import BuyM from "../../models/Buy";
import { revalidateTag, unstable_cache, unstable_noStore } from "next/cache";

const deleteBuy = async (id: string) => {
    try {
      await dbConnect();
      const buy = await BuyM.findByIdAndDelete(id);
      revalidateTag("buys");
      return buy;
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getBuys = async () => {
    await dbConnect();
    unstable_noStore();
    return unstable_cache(
      async () => {
        const buys = await BuyM.find({}).populate(["user","game"]) .lean();
  
        // const plainGames = games.map(convertToPlainObject);
  
        return buys;
      },
      ["buys"],
      {
        tags: ["buys"],
        revalidate: 20,
      }
    )();
  };


  export {
    deleteBuy,
    getBuys
  }