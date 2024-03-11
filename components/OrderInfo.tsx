import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const OrderInfo = () => {
  const productData = [
    {
      imageSrc: "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0019/A00000019042003ko.jpg?l=ko",
      productName: "어퓨 마데카소사이드 테트라좀시카 크림",
      description: "용량: 120ml - 2개",
      price: "56,000원",
    },
    {
      imageSrc: "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0019/A00000019899902ko.jpg?l=ko",
      productName: "닥터포헤어 헤리티지 샴푸 750ml 단품 3종 택1",
      description: "얼그레이 블리스 750ml - 1개",
      price: "28,900원",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문상품정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {productData.map((product, index) => (
          <div key={index}>
            <div className="flex gap-4">
              <img className="w-24 h-24" src={product.imageSrc} alt={product.productName} />
              <div className="space-y-2">
                <p>{product.productName}</p>
                <p className="text-slate-400">{product.description}</p>
                <p className="text-slate-900">{product.price}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrderInfo;
