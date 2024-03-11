import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";

const FinalPaymentAgreement = () => {
  return (
    <Card className="bg-white lg:fixed lg:w-[400px] h-[440px] flex flex-col">
      <CardHeader>
        <CardTitle>최종결제 금액</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <hr className="my-4" />
      <CardFooter className="mt-auto">
        <Button className=" w-full">결제하기</Button>
      </CardFooter>
    </Card>
  );
};

export default FinalPaymentAgreement;
