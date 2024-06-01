import { getBuys } from "@/actions/buys";
import { Buy } from "@/types";
import DataTable from "./DataTable";

const page = async () => {
  const buys: Buy[] = (await getBuys()) as Buy[];

  return (
    <div className="container mx-auto p-4">
      <DataTable buys={buys} />
    
    </div>
  );
};

export default page;
