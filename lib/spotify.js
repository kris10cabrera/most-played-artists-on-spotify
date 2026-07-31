import querystring from "querystring";
import crypto from "crypto";

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

function getServerCredentials() {
  const clientId = (process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "").trim();
  const clientSecret = (process.env.SPOTIFY_CLIENT_SECRET || "").trim();
  const refreshToken = (process.env.SPOTIFY_REFRESH_TOKEN || "").trim();

  return { clientId, clientSecret, refreshToken };
}

// PKCE helper functions
export const generateCodeVerifier = (length = 128) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  return Array.from(crypto.randomBytes(length))
    .map((x) => possible[x % possible.length])
    .join('');
};

export const generateCodeChallenge = (codeVerifier) => {
  return crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

// Token exchange for Authorization Code flow
export const exchangeCodeForToken = async (code, codeVerifier) => {
  const clientId = (process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "").trim();
  const redirectUri = (process.env.NEXT_PUBLIC_REDIRECT_URI || "").trim();

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  });

  return response.json();
};

// Fallback to refresh token method if no code available
const getAccessToken = async () => {
  const { clientId, clientSecret, refreshToken } = getServerCredentials();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify server credentials in environment variables");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export const getRecentlyPlayed = async () => {
  const tokenResponse = await getAccessToken();
  const { access_token, error, error_description } = tokenResponse;

  if (!access_token) {
    const detail = error_description || error;
    throw new Error(
      detail
        ? `Spotify token refresh failed: ${detail}`
        : "Failed to refresh Spotify access token"
    );
  }

  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to fetch top artists");
  }

  if (!data.items) {
    throw new Error("Spotify response did not include top artists");
  }

  return data;
};