import {
  createSession,
  fetchSessionByRefreshToken,
  fetchSessionByUser,
  generateAccessToken,
} from "./session.service";
import { fetchUserByEmail } from "./user.service";

export const authenticateUser = async ({ email, password }) => {
  // 1. Get user from email
  const user = await fetchUserByEmail(email);

  // 2. Verify user exists
  if (!user) {
    return false;
  }
  // 3. If user exists, compare Passwords
  const passwordIsValid = await user.comparePassword(password);

  if (!passwordIsValid) {
    return false;
  }

  const payload = { sub: user._id, email: user.email };
  const tokens = await createSession(payload);

  return { ...tokens, user: payload };
};

export const authenticateSessionByRefreshToken = async (payload, token) => {
  const { sub, email } = payload;
  console.log("Payload: ", payload);
  console.log("Token:", token);
  // 1. Retrieve the session based on the user
  const session = await fetchSessionByUser(sub);
  // 2. Verify session
  if (session.currentRefreshToken !== token) return false;
  // 3. Generate a new refresh token
  const newAccessToken = generateAccessToken({ sub, email });

  // 4. Save the new access token
  session.currentAccessToken = newAccessToken;
  await session.save();

  return { accessToken: newAccessToken, user: { sub, email } };
};
