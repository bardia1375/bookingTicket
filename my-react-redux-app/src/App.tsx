// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/actions/userActions";
import { RootState } from "./redux/types";
import styled from "styled-components";
import Footer from "pages/Footer/Footer";
import Navbar from "pages/Navbar/Navbar";
import CalendarCard from "pages/CalendarCard/CalendarCard";
import ImgCard from "pages/ImgCard/ImgCard";
import Picture from "pages/Picture/Picture";
import Filed from "./Components/common/Filed"
import { Card } from "Components/common/Card";
const Container = styled.div`
  @apply text-center p-8;
`;

const UserInfo = styled.div`
  @apply bg-gray-100 p-8 mt-8 rounded-md shadow-md;
`;

const UserName = styled.h1`
  @apply text-3xl font-bold text-gray-800;
`;

const UserEmail = styled.p`
  @apply text-gray-600;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <CalendarCard />
      <ImgCard />
      <Picture />
      <ImgCard />
      <Footer />
      
      <Card width="50%">
        <Filed placeholder="مبدا"/>
        <Filed placeholder="مبدا"/>
        <Filed placeholder="مبدا"/>
      </Card>
    </Container>
  );
};

export default App;
