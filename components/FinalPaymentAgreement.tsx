import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Coupon } from "@/lib/coupons";

interface Props {
  productPrice: number;
  coupon: Coupon;
  pointUsage: number;
  shippingFee: number;
}

const FinalPaymentAgreement: React.FC<Props> = ({ productPrice, coupon, pointUsage, shippingFee }) => {
  function formatNumber(amount: number, locale = "ko-KR") {
    return new Intl.NumberFormat(locale).format(amount);
  }

  function PriceAfterCoupon(coupon: Coupon, productPrice: number) {
    let discount = 0;
    if (coupon) {
      if (coupon.type === "percentage") {
        // 퍼센트 할인
        discount = (parseFloat(coupon.value) / 100) * productPrice;
      } else if (coupon.type === "fixed") {
        // 고정 할인
        discount = parseFloat(coupon.value);
      }
    }
    return discount;
  }
  return (
    <Card className="bg-white lg:fixed lg:w-[400px] flex flex-col">
      <CardHeader>
        <CardTitle>최종결제 금액</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <p className="text-slate-400">상품가격</p>
          <p className="text-slate-400">쿠폰할인</p>
          <p className="text-slate-400">포인트사용</p>
          <p className="text-slate-400">배송비</p>
          <p className="text-right">{`${formatNumber(productPrice)}원`}</p>
          <p className="text-right">{`-${PriceAfterCoupon(coupon, productPrice)}원`}</p>
          <p className="text-right">{`-${formatNumber(pointUsage)}원`}</p>
          <p className="text-right">{`+${formatNumber(shippingFee)}원`}</p>
        </div>
        <div className="border-b my-4"></div>
        <div className="flex justify-between">
          <p className="text-slate-400">총 결제금액</p>
          <p className="text-right text-primary">{`${formatNumber(productPrice - PriceAfterCoupon(coupon, productPrice) - pointUsage + shippingFee)}원`}</p>
        </div>
      </CardContent>
      <hr className="mt-auto mb-4" />
      <CardFooter className="mt-auto flex flex-col space-y-3">
        <div className="flex items-center space-x-2 mr-auto">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            개인 정보 수집 및 이용 동의
          </label>
        </div>
        <div className="flex items-center space-x-2 mr-auto">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            구매조건 확인 및 결제진행에 동의
          </label>
        </div>
        <Button className=" w-full">결제하기</Button>
      </CardFooter>
    </Card>
  );
};

export default FinalPaymentAgreement;
