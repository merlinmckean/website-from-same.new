import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    const payload = {
      data: {
        name,
        email,
        phone,
        company,
        message, // or use free_text_question_1 here if Formbricks hasn't been renamed
      },
    };

    const fbRes = await fetch("https://formbricks.com/f/cmc9erjae3xmsxr01fl9eamh2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const contentType = fbRes.headers.get("content-type");
    let responseData;

    if (contentType?.includes("application/json")) {
      responseData = await fbRes.json();
    } else {
      responseData = await fbRes.text();
    }

    console.log("Formbricks response status:", fbRes.status);
    console.log("Formbricks response body:", responseData);

    if (!fbRes.ok) {
      throw new Error(`Formbricks responded with status ${fbRes.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Formbricks submission error:", err);
    return res.status(500).json({ error: "Submission failed" });
  }
}
