// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    const formbricksPayload = {
      name,
      email,
      phone,
      company,
      free_text_question_1: message, // assume this is Formbricks' internal name for your message field
    };

    const fbRes = await fetch("https://formbricks.com/f/cmc9erjae3xmsxr01fl9eamh2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formbricksPayload),
    });

    if (!fbRes.ok) {
      console.error("Formbricks response error:", await fbRes.text());
      return res.status(500).json({ error: "Formbricks submission failed" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
