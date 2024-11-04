import { dbConnect } from "@/lib/dbConnect";
import { userModal } from "@/lib/modals/UserModal";

export async function POST(request) {
  dbConnect();
  const data = request.json();
  //   Check User
  let checkUser = userModal.findOne({
    email: data.email,
  });
  if (checkUser) {
    return Response.json(
      { error: true, meassage: "User already exsist" },
      {
        status: 404,
      }
    );
  }
  //   hashed password Convert
  const saltRound = 10;
  //   let hashedPassword=
}
