"use client";

import CouponPoints from "@/components/CouponPoints";
import CustomerInfo from "@/components/CustomerInfo";
import FinalPaymentAgreement from "@/components/FinalPaymentAgreement";
import OrderInfo from "@/components/OrderInfo";
import PaymentMethod from "@/components/PaymentMethod";
import ShippingInfo from "@/components/ShippingInfo";
import { Card } from "@/components/ui/card";
import { Coupon } from "@/lib/coupons";
import { useState } from "react";

export default function Home() {
  const [productPrice, setProductPrice] = useState<number>(84900);
  const [coupon, setCoupon] = useState<Coupon>({
    id: 0,
    type: "fixed",
    value: "0",
    description: "쿠폰을 선택해주세요.",
  });
  const [pointUsage, setPointUsage] = useState<number>(0);
  const [shippingFee, setShippingFee] = useState<number>(2500);
  return (
    <Card>
      <div className="grid place-items-center p-4 lg:w-[1024px]">
        <header>
          <h1 className="text-2xl">결제하기</h1>
        </header>
        <main className="flex flex-wrap gap-4 mt-4 ">
          <section className="flex-auto space-y-4 lg:w-[576px]">
            <OrderInfo />
            <CustomerInfo />
            <ShippingInfo />
            <CouponPoints value={coupon} onValueChange={setCoupon} />
            <PaymentMethod />
          </section>
          <section className="flex-auto space-y-4 lg:w-[400px]">
            <FinalPaymentAgreement productPrice={productPrice} coupon={coupon} pointUsage={pointUsage} shippingFee={shippingFee} />
          </section>
        </main>
      </div>
    </Card>
  );
}
