import { createInterface } from "readline";
import { readFileSync } from "fs";
import { resolve } from "path";
import querystring from "querystring";

const SCOPE = "user-top-read";
const DEFAULT_REDIRECT_URI = "http://127.0.0.1:8888/callback";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env");

  try {
    const contents = readFileSync(envPath, "utf8");

    for (const line of contents.split("\n")) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim();
      }
    }
  } catch {
    console.error("Could not read .env — create one in the project root first.");
    process.exit(1);
  }
}

function prompt(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  return new Promise((resolvePrompt) => {
    rl.question(question, (answer) => {
      rl.close();
      resolvePrompt(answer.trim());
    });
  });
}

loadEnv();

const clientId =
  process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri =
  process.env.SPOTIFY_TOKEN_REDIRECT_URI || DEFAULT_REDIRECT_URI;

if (!clientId || !clientSecret) {
  console.error(
    "Missing NEXT_PUBLIC_SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env"
  );
  process.exit(1);
}

const authUrl =
  "https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: SCOPE,
  });

console.log("\nBefore continuing, add this redirect URI in your Spotify app:");
console.log(`  ${redirectUri}\n`);
console.log("1. Open this URL in your browser:\n");
console.log(authUrl);
console.log(
  "\n2. After authorizing, Spotify redirects to a URL that may not load."
);
console.log("   Copy the 'code' parameter from the address bar.\n");

const rawInput = await prompt("Paste the code (or full redirect URL): ");

const code = rawInput.includes("code=")
  ? new URL(rawInput).searchParams.get("code")
  : rawInput;

if (!code) {
  console.error("No authorization code found.");
  process.exit(1);
}

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const response = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: querystring.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
  }),
});

const data = await response.json();

if (!response.ok) {
  console.error("Token exchange failed:", data.error_description || data.error);
  process.exit(1);
}

console.log("\n3. Update SPOTIFY_REFRESH_TOKEN in .env with:\n");
console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
console.log("Then restart yarn dev.\n");
