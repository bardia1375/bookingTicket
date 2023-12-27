import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Main,
  LeftItems,
  RightItems,
  AirLine,
  Luggage,
  TicketType,
  Row,
  Col,
  Items,
  PayoutMain,
  Seat,
  SeatContain,
  SeatMain,
} from "./Styles";
import { Card, Filed, Button } from "../../../Components/common";
import Logo from "assets/tk.webp";
import AirLinePng from "assets/AirLine.png";
import Modal from "Components/common/Modal";
import SeatContainer from "./SeatContainer";

const ReserveTicket: React.FC = () => {
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
  ];
  const [price, setPrice] = useState(0);
  const [priceList, setPriceList] = useState([
    {
      Logo: Logo,
      Tax: "34500000",
      AirlineName: "ترکیش",
      AirlineNumber: "TK7689",
      TimeOut: "۱۸:۲۲",
      NameOut: "تهران",
      TimeIn: "۲۱:۲۲",
      NameIn: "دبی",
      Luggage: "۲۵ کیلوگرم",
      TravelType: "اکونومی",
      ReamainSeat: "۹ باقیمانده",
      price: "386000000 ",
      TicketType: "بیزینس",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  interface seatType {
    id: string;
    seatNumber: string;
    price: number;
  }

  const numbersArray: seatType[] = [
    {
      id: "1",
      seatNumber: "D",
      price: 10000000,
    },
    {
      id: "2",
      seatNumber: "C",
      price: 10000000,
    },
    {
      id: "3",
      seatNumber: "B",
      price: 10000000,
    },
    {
      id: "4",
      seatNumber: "A",
      price: 10000000,
    },
    // {
    //   id: "5",
    //   seatNumber: "H2",
    // },
    // {
    //   id: "6",
    //   seatNumber: "G2",
    // },
    // {
    //   id: "7",
    //   seatNumber: "F2",
    // },
    // {
    //   id: "8",
    //   seatNumber: "E2",
    // },
    // {
    //   id: "9",
    //   seatNumber: "D3",
    // },
    // {
    //   id: "10",
    //   seatNumber: "C3",
    // },
    // {
    //   id: "11",
    //   seatNumber: "B3",
    // },
    // {
    //   id: "12",
    //   seatNumber: "A3",
    // },
    // {
    //   id: "13",
    //   seatNumber: "D4",
    // },
    // {
    //   id: "14",
    //   seatNumber: "C4",
    // },
    // {
    //   id: "15",
    //   seatNumber: "B4",
    // },
    // {
    //   id: "16",
    //   seatNumber: "A4",
    // },
  ];
  const left: seatType[] = [
    {
      id: "5",
      seatNumber: "H",
      price: 1000000,
    },
    {
      id: "6",
      seatNumber: "G",
      price: 10000000,
    },
    {
      id: "7",
      seatNumber: "F",
      price: 10000000,
    },
    {
      id: "8",
      seatNumber: "E",
      price: 10000000,
    },
  ];
  console.log(numbersArray); // [0, 1, 2, ..., 20]
  const numbersArraySeat = [...Array(10).keys()];
  const [change, setChange] = useState("red");
  const changeColor = (index, row, col) => {
    console.log("status", col + (row + 1));
  };
  return (
    <div>
      <Container>
        <div>
          {tiketsList.map((el) => (
            <Card width="60vw" Title="اطلاعات مسافر اصلی">
              <Main>
                <RightItems>
                  <Col>
                    <Row>
                      <Filed placeholder="نام لاتین" width="25vw" />
                      <Filed
                        placeholder="نام خانوادگی لاتین"
                        width="25vw"
                      />{" "}
                    </Row>
                    <Row>
                      <Filed placeholder="شماره پاسپورت" width="25vw" />
                      <Filed placeholder="کد ملی" width="25vw" />
                    </Row>
                  </Col>
                  <Button Text="انتخاب مکان" onClick={openModal} />
                </RightItems>
              </Main>
            </Card>
          ))}
        </div>
        <div>
          {priceList.map((el) => (
            <Card width="30vw" Title="صورتحساب">
              <PayoutMain>
                <Items>
                  <div>بزرگسال</div>
                  <div>{price}</div>
                </Items>
                <Items>
                  <div>مالیات خدمات</div>
                  <div>{(price * 9) / 100}</div>
                </Items>
                <Items>
                  <div>مبلغ قابل پرداخت</div>
                  <div>{price + (price * 9) / 100} ریال</div>
                </Items>
              </PayoutMain>
              <Button Text="پرداخت" padding="8px 4px" />
            </Card>
          ))}
        </div>
      </Container>
      <Modal onClose={closeModal} isOpen={isModalOpen}>
        <div>
          <Card width="30vw" Title="رزرو صندلی">
            {numbersArraySeat.map((mainItem, rowIndex) => (
              <SeatContain>
                <div style={{ display: "flex", gap: "8px" }}>
                  {left.map((item, columnIndex) => (
                    <SeatContainer
                      change={change === "blue"} // Change this condition based on your logic
                      columnIndex={columnIndex}
                      item={item}
                      rowIndex={rowIndex}
                      mainItem={mainItem}
                      price={price}
                      setPrice={setPrice} // Pass setPriceList here
                    />
                  ))}
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {numbersArray.map((item, columnIndex) => (
                    <SeatContainer
                      change={change === "blue"} // Change this condition based on your logic
                      columnIndex={columnIndex}
                      item={item}
                      mainItem={mainItem}
                      rowIndex={rowIndex}
                      price={price}
                      setPrice={setPrice} // Pass setPriceList here
                    />
                  ))}
                </div>
              </SeatContain>
            ))}

            <Button Text="پرداخت" padding="8px 4px" />
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default ReserveTicket;
