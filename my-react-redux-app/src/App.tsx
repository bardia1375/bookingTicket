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
// import Filed from "./Components/common/Filed"
import { Card } from "Components/common/Card";
import TicketsCard from "pages/Tickets/TicketsCard";
import ReserveTicket from "pages/Tickets/ReserveTicket/ReserveTicket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import Myorders from "pages/Myorders/Myorders";

const Container = styled.div`
  height: auto;
  padding: 32px 12vw;
  /* display:flex; */
  align-items: center;
  justify-content: center;
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
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/TicketsCard" element={<TicketsCard />} />
        </Route>
        <Route path="/TicketsCard/ReserveTicket" element={<ReserveTicket />} />
        <Route path="/MyOrders" element={<Myorders />} />
        <Route
          path="/TicketsCard/ReserveTicket/MyOrders"
          element={<Myorders />}
        ></Route>
        {/* <Navbar /> */}
        {/* <CalendarCard /> */}
        {/* <Route path="/tickets" element={<CalendarCard />} /> */}
        {/* <TicketsCard /> */}
        {/* <ReserveTicket /> */}
        {/* <ImgCard /> */}
        {/* <Picture /> */}
        {/* <ImgCard /> */}
        {/* <Footer /> */}
        {/*       
      <Card width="50%">
        <Filed placeholder="مبدا"/>
        <Filed placeholder="مبدا"/>
        <Filed placeholder="مبدا"/>
      </Card> */}
      </Routes>
    </Router>
  );
};

export default App;
