import { unstable_cache } from "next/cache";
import { getPool } from "@/lib/db";

export type WheelItem = {
  id: string;
  refItemId: number;
  name: string;
  image: string;
  probability: number;
  quantity: number;
};

async function queryWheelItems(): Promise<WheelItem[]> {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      select w.*, c.AssocFileIcon128
      from SRO_VT_COREWEB.dbo.__wheel w
      join SRO_VT_SHARD.dbo._refobjcommon c
        on c.ID = w.refitemid
    `);

    return (result.recordset ?? []).map((row, index) => {
      const iconPath = String(row.AssocFileIcon128 ?? "")
        .replace(/\\/g, "/")
        .replace(/^\/+/, "")
        .replace(/\.ddj$/i, ".jpg");

      const refItemId = Number(row.refitemid ?? 0);
      return {
        id: String(row.ID ?? `${refItemId}-${index}`),
        refItemId,
        name: String(row.ItemName ?? "Unknown Item"),
        image: iconPath ? `/images/${iconPath}` : "/favicon.png",
        probability: Number(row.Probability ?? 0),
        quantity: Number(row.ItemQuantity ?? 0),
      };
    });
  } catch {
    return [];
  }
}

const getWheelItemsCached = unstable_cache(queryWheelItems, ["wheel-items"], {
  revalidate: 60,
});

export async function getWheelItems() {
  return getWheelItemsCached();
}
