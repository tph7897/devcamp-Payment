import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ShippingInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>배송정보</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-between w-full">
        <div className="">
          <p>홍길동</p>
          <p className="text-slate-400">01012345678</p>
          <p className="">대구 달서구 두류공원로 200 이월드 (두류동)</p>
          <p className="">이월드</p>
          <p className="">(42666)</p>
        </div>
        <Button variant="outline">변경</Button>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <span>배송메모</span>
        <Input placeholder="부재중 일시 문 앞에 놔둬주세요" />
      </CardFooter>
    </Card>
  );
};

export default ShippingInfo;
