import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPerInforAction } from "../../actions/userAction";
const AccountContainer = () => {
  const { credentials } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerInforAction(credentials));
  }, [credentials]);
  return (
    <section>
      <Container></Container>
    </section>
  );
};

export default AccountContainer;
