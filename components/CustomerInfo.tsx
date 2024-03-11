import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const CustomerInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문자정보</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between w-full">
        <div className="">
          <p>홍길동</p>
          <p className="text-slate-400">01012345678</p>
          <p className="text-slate-400">devecamp@gmail.com</p>
        </div>
        <Button variant="outline">수정</Button>
      </CardContent>
    </Card>
  );
};

export default CustomerInfo;
