import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      Total order price: <b>{totalAmount} $</b>. Please
      <a href={paymentUrl}>follow this link</a> to pay for the order.
    </p>
  </div>
);
