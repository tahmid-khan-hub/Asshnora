import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { message, fileData, fileType }: {
      message: string;
      fileData?: string;
      fileType?: string;
    } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const parts: Array<
      | { text: string }
      | { inlineData: { mimeType: string; data: string } }
    > = [{ text: message }];

    if (fileData) {
      parts.push({
        inlineData: {
          mimeType: fileType || "application/pdf",
          data: fileData, // base64-encoded
        },
      });
    }

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
    });

    return NextResponse.json({
      reply: result.response.text(),
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to Gemini API" },
      { status: 500 }
    );
  }
}
