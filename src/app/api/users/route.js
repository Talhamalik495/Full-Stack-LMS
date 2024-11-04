import { dbConnect } from "@/lib/dbConnect";

export async function POST() {
  dbConnect();
}
