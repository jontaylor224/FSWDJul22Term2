export const auth_url = process.env.AUTH_URL || "/auth";
export const access_token_secret =
  process.env.ACCESS_TOKEN_SECRET || "peterpiperpickedapeckofpickledpeppers";
export const access_token_ttl = process.env.ACCESS_TOKEN_TTL || "2h";
export const refresh_token_secret =
  process.env.REFRESH_TOKEN_SECRET || "itspeanutbutterjellytimewhereyaat";
export const refresh_token_ttl = process.env.REFRESH_TOKEN_TTL || "60d";
export const refresh_cookie_max_age =
  process.env.REFRESH_TOKEN_MAX_AGE || 1000 * 60 * 60 * 24 * 60;
