import querystring from "querystring";
import crypto from "crypto";


const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

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
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      client_id,
      grant_type: 'authorization_code',
      code,
      redirect_uri,
      code_verifier: codeVerifier,
    }),
  });

  return response.json();
};

// Fallback to refresh token method if no code available
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};