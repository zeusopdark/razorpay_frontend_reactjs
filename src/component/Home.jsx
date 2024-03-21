import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Home = () => {
  const realamount = 900;

  const handleSubmit = async () => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/checkout", {
      amount: realamount,
    });
    console.log(order);

    console.log(key);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Payment",
      description: "Razorpay tut",
      image: "./loginicon.png",
      order_id: order.id,
      callback_url: "http://localhost:4000/paymentVerification",
      prefill: {
        name: "Ankit",
        email: "ankit@gmail.com",
        contact: "9876543210",
      },
      notes: {
        address: "razorpay official",
      },
      theme: {
        color: "#FF0000",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleSubmit}>
            {realamount}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
