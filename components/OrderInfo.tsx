import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const OrderInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문상품정보</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default OrderInfo;
