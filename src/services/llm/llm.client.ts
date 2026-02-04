import axios from "axios";

const OLLAMA_BASE_URL =
  process.env.OLLAMA_BASE_URL || "http://localhost:11434";

function timestamp(): string {
  const now = new Date();
  return now.toISOString().split("T")[1].split(".")[0];
}

export async function callLLM(prompt: string): Promise<string> {
  const model = "mistral";

  // 🔍 BEFORE REQUEST LOG (PROOF)
  console.log(
    `[OLLAMA][REQUEST] ${timestamp()} | model=${model} | prompt="${prompt.slice(
      0,
      50
    )}..."`
  );

  try {
    const res = await axios.post(
      `${OLLAMA_BASE_URL}/api/generate`,
      {
        model,
        prompt,
        stream: false
      },
      {
        timeout: 120000
      }
    );

    const responseText: string = res.data?.response || "";

    // 🔍 AFTER RESPONSE LOG (PROOF)
    console.log(
      `[OLLAMA][RESPONSE] ${timestamp()} | response_length=${responseText.length}`
    );

    return responseText;
  } catch (err: any) {
    // 🔥 ERROR LOG (PROOF)
    if (
      err.code === "ECONNREFUSED" ||
      err.message?.includes("connect")
    ) {
      console.error(
        `[OLLAMA][ERROR] ${timestamp()} | Ollama unreachable at ${OLLAMA_BASE_URL}`
      );
    } else {
      console.error(
        `[OLLAMA][ERROR] ${timestamp()} | ${err.message}`
      );
    }
    throw err;
  }
}
