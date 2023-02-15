import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { api } from "../utils/apiConfig";

const AccountDetailPage = () => {
  const { uid } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/users/${uid}`)
      .then((res) => console.log(res))
      .catch((err) => navigate("/login"));
  }, [uid]);

  return <Container></Container>;
};

export default AccountDetailPage;
