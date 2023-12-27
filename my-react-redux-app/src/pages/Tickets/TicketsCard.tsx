import React from "react";
import styled from "styled-components";
import {
  Container,
  Items,
  Main,
  LeftItems,
  RightItems,
  AirLine,
  Luggage,
  TicketType,
} from "./Styles";
import { Card, Filed, Button } from "../../Components/common";
import Logo from "assets/tk.webp";
import AirLinePng from "assets/AirLine.png";

const TicketsCard: React.FC = () => {
  const tiketsList = [
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۱۸:۲۲",
      NameOut: "تهران",
      TimeIn: "۲۱:۲۲",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۳۸,۶۰۰,۰۰۰ ریال",
      TicketType: "بیزینس",
    },
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۲۲:۱۵",
      NameOut: "تهران",
      TimeIn: "۱:۰۵",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۱۲,۶۰۰,۰۰۰ ریال",
      TicketType: "چارتری",
    },
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۲۲:۱۵",
      NameOut: "تهران",
      TimeIn: "۱:۰۵",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۱۲,۶۰۰,۰۰۰ ریال",
      TicketType: "چارتری",
    },
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۲۲:۱۵",
      NameOut: "تهران",
      TimeIn: "۱:۰۵",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۱۲,۶۰۰,۰۰۰ ریال",
      TicketType: "چارتری",
    },
    {
      Logo: Logo,
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۲۲:۱۵",
      NameOut: "تهران",
      TimeIn: "۱:۰۵",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "۱۲,۶۰۰,۰۰۰ ریال",
      TicketType: "چارتری",
    },
  ];
  return (
    <Container>
      {tiketsList.map((el) => (
        <Card>
          <Main>
            <RightItems>
              <AirLine>
                <img src={Logo} />
                <div>{el.AirlineName}</div>
                <div>{el.AirlineNumber}</div>
              </AirLine>
              <Items>
                <div>
                  <p>{el.TimeIn}</p>
                  <p>{el.NameIn}</p>
                </div>
                <img src={AirLinePng} width="300px" />
                <div>
                  <p>{el.TimeOut}</p>
                  <p>{el.NameOut}</p>
                </div>
              </Items>
              <Luggage>
                <div>{el.Luggage}</div>
                <div>{el.TravelType}</div>
                <div>{el.ReamainSeat}</div>
              </Luggage>
              <div></div>
            </RightItems>
            <LeftItems>
              <div className="price">{el.price}</div>
              <Button Text="خرید" padding="0.4rem 1.5rem" />
            </LeftItems>
          </Main>
          <TicketType>{el.TicketType}</TicketType>
        </Card>
      ))}
    </Container>
  );
};

export default TicketsCard;
