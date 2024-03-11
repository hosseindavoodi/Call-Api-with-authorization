import { NextApiRequest, NextApiResponse } from "next";

const EXPECTED_ACCESS_TOKEN = "MyTOKEN###4354";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }

  const { authorization } = req.headers;

  if (!authorization || authorization !== `Bearer ${EXPECTED_ACCESS_TOKEN}`) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const responseData = {
    message: "Authorization successful",
    data: {
      example: "Some data you want to send",
    },
  };

  res.status(200).json(responseData);
}
