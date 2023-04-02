import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  // Get request body data
  const { body } = req;

  // Guards
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!body.name || !body.email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (body.name.length > 200) {
    return res.status(400).json({ message: "Name too long" });
  }

  if (body.email.length > 200) {
    return res.status(400).json({ message: "Email too long" });
  }

  if (body.consent === "false") {
    return res.status(400).json({ message: "Consent not given" });
  }

  // Open Notion client connection as "pch.wales forms" integration
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  // Create a new page in the S02 participant tracker database
  const response = await notion.pages.create({
    "parent": {
      "database_id": process.env.NOTION_DATABASE_ID_S02,
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": body.name
            }
          }
        ]
      },
      "Contact details": {
        "rich_text": [
          {
            "text": {
              "content": body.email
            }
          }
        ]
      },
    }
  });

  // Send OK response
  res.status(200).json(response);
};