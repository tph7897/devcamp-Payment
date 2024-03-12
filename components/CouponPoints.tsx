import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CouponPoints = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>쿠폰/ 포인트</CardTitle>
      </CardHeader>
      <CardContent>
        <p>쿠폰</p>
        <Select>
          <SelectTrigger className="mb-4">
            <SelectValue placeholder="쿠폰을 선택해주세요." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5000">5천 원 할인쿠폰</SelectItem>
              <SelectItem value="3000">3천 원 할인쿠폰</SelectItem>
              <SelectItem value="30%">30% 할인쿠폰</SelectItem>
              <SelectItem value="10%">10% 할인쿠폰</SelectItem>
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
