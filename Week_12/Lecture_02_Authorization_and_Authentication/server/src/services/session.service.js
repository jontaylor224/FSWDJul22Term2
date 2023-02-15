import { sign } from "jsonwebtoken";
import {
  access_token_secret,
  access_token_ttl,
  refresh_token_secret,
  refresh_token_ttl,
} from "../config/auth.config";
import Session from "../models/session.model";

export const createSession = async (payload) => {
  // Create 2 tokens: 1 access and 1 refresh
  const accessToken = generateAccessToken(payload);

  const refreshToken = generateRefreshToken(payload);

  // Create a session in my db
  await Session.create({
    user: payload.sub,
    currentAccessToken: accessToken,
    currentRefreshToken: refreshToken,
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const fetchSessionByRefreshToken = async (token) => {
  return Session.findOne({ refreshToken: token });
};

export const fetchSessionByUser = async (userId) => {
  return Session.findOne({ user: userId });
};

export const fetchSessionByAccessToken = async (token) => {
  return Session.findOne({ currentAccessToken: token }).populate("user");
};

export const deleteSessionById = async (sessionId) => {};
export const deleteSessionByUser = async (user) => {
  return Session.deleteOne({ user: user });
};

export const generateAccessToken = (payload) => {
  const token = sign(payload, access_token_secret, {
    expiresIn: access_token_ttl,
  });

  return token;
};

export const generateRefreshToken = (payload) => {
  const token = sign(payload, refresh_token_secret, {
    expiresIn: refresh_token_ttl,
  });

  return token;
};
