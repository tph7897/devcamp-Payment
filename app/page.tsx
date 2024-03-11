import CouponPoints from "@/components/CouponPoints";
import CustomerInfo from "@/components/CustomerInfo";
import FinalPaymentAgreement from "@/components/FinalPaymentAgreement";
import OrderInfo from "@/components/OrderInfo";
import PaymentMethod from "@/components/PaymentMethod";
import ShippingInfo from "@/components/ShippingInfo";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <Card>
      <div className="grid place-items-center p-4 lg:w-[1024px]">
        <header>
          <h1 className="text-2xl">결제하기</h1>
        </header>
        <main className="flex flex-wrap gap-4 mt-4 ">
          <section className="flex-auto space-y-4 w-[576px]">
            <OrderInfo />
            <CustomerInfo />
            <ShippingInfo />
            <CouponPoints />
            <PaymentMethod />
            {/* <article className="bg-white border h-[190px]">주문상품정보</article>
            <article className="bg-white h-[165px]">주문자정보</article>
            <article className="bg-white h-[300px]">배송정보</article>
            <article className="bg-white h-[380px]">쿠폰/ 포인트</article>
            <article className="bg-white h-[375px]">결제방법</article> */}
          </section>
          <section className="flex-auto space-y-4 w-[400px]">
            <FinalPaymentAgreement />
            {/* <article className="bg-white lg:fixed lg:w-[400px] h-[440px] ">최종결제금액, 전체동의</article> */}
          </section>
        </main>
      </div>
    </Card>
  );
}
