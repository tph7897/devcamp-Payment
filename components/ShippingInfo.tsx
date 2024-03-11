import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const ShippingInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>배송정보</CardTitle>
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

export default ShippingInfo;
