// src/pages/api/contact.ts

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
        message, // If you've renamed the Formbricks question to "message"
        // OR: free_text_question_1: message — if you haven't renamed it
      }
    };

    const fbRes = await fetch("https://formbricks.com/f/cmc9erjae3xmsxr01fl9eamh2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await fbRes.text();
    console.log("Formbricks response:", text);

    if (!fbRes.ok) throw new Error(text);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Formbricks submission error:", err);
    return res.status(500).json({ error: "Submission failed" });
  }
}
