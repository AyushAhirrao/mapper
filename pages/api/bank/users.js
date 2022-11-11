import nc from "next-connect";
import { getAllUser } from "../../../controller/users";

const handler = nc();
handler.get(getAllUser)
// handler.post(setContactData)
export default handler
