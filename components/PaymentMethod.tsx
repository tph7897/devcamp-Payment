"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>결제방법</CardTitle>
      </CardHeader>
      <CardContent>
        <ToggleGroup className="grid grid-cols-3 gap-4" type="single">
          <ToggleGroupItem value="tossPay" aria-label="tossPay">
            <div className="">토스페이</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="kakaoPay" aria-label="kakaoPay">
            <div className="">카카오페이</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="naverPay" aria-label="naverPay">
            <div className="">네이버페이</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="creditCard" aria-label="creditCard">
            <div className="">신용카드</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="virtualAccount" aria-label="virtualAccount">
            <div className="">가상계좌</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="bankTransfer" aria-label="bankTransfer">
            <div className="">무통장 입금</div>
          </ToggleGroupItem>
          <ToggleGroupItem value="mobilePayment" aria-label="mobilePayment 결제">
            <div className="">핸드폰 결제</div>
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-slate-400 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            현금 영수증 신청
          </label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PaymentMethod;
