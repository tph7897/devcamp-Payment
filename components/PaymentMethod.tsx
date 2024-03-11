import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const PaymentMethod = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>결제방법</CardTitle>
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

export default PaymentMethod;
