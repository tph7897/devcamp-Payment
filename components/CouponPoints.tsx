"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Coupon, coupons } from "@/lib/coupons";

interface Props {
  value: Coupon;
  onValueChange: Dispatch<SetStateAction<Coupon>>;
}

const CouponPoints: React.FC<Props> = ({ value, onValueChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>쿠폰/ 포인트</CardTitle>
      </CardHeader>
      <CardContent>
        <p>쿠폰</p>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="mb-4">
            <SelectValue placeholder="쿠폰을 선택해주세요.">{value.description}</SelectValue>
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
          <Input type="text" placeholder="2,300" />
          <Button type="submit">전액사용</Button>
        </div>
        <p>보유포인트 2,300</p>
        <p className="text-slate-400">5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</p>
      </CardContent>
    </Card>
  );
};

export default CouponPoints;
