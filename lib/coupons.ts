export interface Coupon {
  id: number;
  type: "percentage" | "fixed";
  value: string;
  description: string;
}

export const coupons: Coupon[] = [
  {
    id: 1,
    type: "percentage",
    value: "30%",
    description: "30% 할인 쿠폰",
  },
  {
    id: 2,
    type: "percentage",
    value: "10%",
    description: "10% 할인 쿠폰",
  },
  {
    id: 3,
    type: "fixed",
    value: "5000",
    description: "5천 원 할인 쿠폰",
  },
  {
    id: 4,
    type: "fixed",
    value: "3000",
    description: "3천 원 할인 쿠폰",
  },
];
