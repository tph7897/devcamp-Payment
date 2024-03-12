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
          <section className="flex-auto space-y-4 lg:w-[576px]">
            <OrderInfo />
            <CustomerInfo />
            <ShippingInfo />
            <CouponPoints />
            <PaymentMethod />
          </section>
          <section className="flex-auto space-y-4 lg:w-[400px]">
            <FinalPaymentAgreement />
          </section>
        </main>
      </div>
    </Card>
  );
}
