import React, { useState } from "react";
import styled from "styled-components";
import { Container, Items, Main } from "./Styles";
import { Card, Filed, Button, Dropdown } from "../../Components/common";
import { Calendar, CalendarProvider, DatePicker } from "zaman";
import "./calender.css"
const CalendarCard: React.FC = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <Container>
      <Card>
        <Main>
          <Items>
            <Dropdown
              placeholder="تاریخ بازگشت"
              width="20vw"
              firstData="مبدا"
              dropData={[
                { id: 1, Title: "تهران" },
                { id: 2, Title: "شیراز" },
                { id: 3, Title: "دبی" },
                { id: 4, Title: "استانبول" },
              ]}
            />
            <Dropdown
              placeholder="تاریخ بازگشت"
              width="20vw"
              firstData="مقصد"
              dropData={[
                { id: 1, Title: "تهران" },
                { id: 2, Title: "شیراز" },
                { id: 3, Title: "دبی" },
                { id: 4, Title: "استانبول" },
              ]}
            />
            {/* <Filed placeholder="تاریخ رفت" width="20vw" /> */}
            {/* <Dropdown   placeholder="تاریخ بازگشت" width="20vw" firstData="انتخاب کنید" dropData={[{id:1,Title:"تهران"},{id:2,Title:"شیراز"},{id:3,Title:"دبی"},{id:4,Title:"استانبول"}]}/> */}
          </Items>

          {true ? (
            <div className="libWrapper">
              <DatePicker
                round="x4"
                position="center"
                onChange={(e) => console.log(e)}         
                defaultValue={new Date()} // Set your default value here
                />
            </div>
          ) : null}

          <Button Text="جستجو" />
        </Main>
      </Card>
    </Container>
  );
};

export default CalendarCard;
