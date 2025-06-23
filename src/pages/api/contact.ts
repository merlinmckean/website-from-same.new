import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    const payload = {
      surveyId: "cmc9erjae3xmsxr01fl9eamh2", // from your Formbricks dashboard
      data: {
        name,
        email,
        phone,
        company,
        message,
      },
    };

    const fbRes = await fetch("https://app.formbricks.com/api/survey-responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const fbResponseBody = await fbRes.text();
    console.log("Formbricks response:", fbResponseBody);

    if (!fbRes.ok) {
      throw new Error(`Formbricks responded with status ${fbRes.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Formbricks submission error:", err);
    return res.status(500).json({ error: "Submission failed" });
  }
}
