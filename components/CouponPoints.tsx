"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coupon, coupons } from "@/lib/coupons";

interface Props {
  coupon: Coupon;
  setCoupon: Dispatch<SetStateAction<Coupon>>;
  pointUsage: number;
  setPointUsage: Dispatch<SetStateAction<number>>;
}

const CouponPoints: React.FC<Props> = ({ coupon, setCoupon, pointUsage, setPointUsage }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    const parsedValue = parseInt(inputValue.replace(/,/g, ""), 10);
    if (parsedValue <= pointUsage) {
      setPointUsage(parsedValue);
    } else {
      alert("입력된 값이 보유 포인트보다 큽니다.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>쿠폰/ 포인트</CardTitle>
      </CardHeader>
      <CardContent>
        <p>쿠폰</p>
        <Select value={coupon} onValueChange={setCoupon}>
          <SelectTrigger className="mb-4">
            <SelectValue placeholder="쿠폰을 선택해주세요.">{coupon.description}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {coupons.map((coupon) => (
                <SelectItem key={coupon.id} value={coupon}>
                  {coupon.description}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p>쿠폰 번호</p>
        <div className="flex w-full  items-center space-x-2 mb-4">
          <Input type="text" placeholder="쿠폰 번호 입력" />
          <Button type="submit">번호확인</Button>
        </div>
        <p>포인트</p>
        <div className="flex w-full  items-center space-x-2">
          <Input type="number" placeholder="7,600" value={inputValue} onChange={handleInputChange} />
          <Button type="button" onClick={handleSubmit}>
            전액사용
          </Button>
        </div>
        <p>보유포인트 7,600</p>
        <p className="text-slate-400">5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</p>
      </CardContent>
    </Card>
  );
};

export default CouponPoints;
