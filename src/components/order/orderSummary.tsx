import React from "react";
import { Order } from "@/types/order";
import { getOrderStatus, getOrderStatusColor } from "@/lib/order-status";

type Props = {
  order: Order;
};

const currency = (value: number) =>
  new Intl.NumberFormat("en-SA", {
    style: "currency",
    currency: `SAR`,
  }).format(value);

export const OrderSummary: React.FC<Props> = ({ order }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-white space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">ملخص الطلب</h2>
        <span className="text-sm text-gray-500">#{order?.code}</span>
      </div>

      {/* Client Info */}
      <section>
        <h3 className="font-medium text-gray-700">بيانات العميل</h3>
        <div className="text-sm text-gray-600">
          <p>{order?.client?.name}</p>
          <p>{order?.client?.email}</p>
          <p>{order?.client?.phone}</p>
        </div>
      </section>

      {/* Shipping Info */}
      <section>
        <h3 className="font-medium text-gray-700">عنوان</h3>
        <div className="text-sm text-gray-600">
          <p>
            {order?.address?.street}, {order?.address?.number}
          </p>
          <p>
            {order?.address?.district}, {order?.address?.city}
          </p>
        </div>
      </section>
      <section>
        {order?.items?.map(({ product, quantity, _id }) => (
          <div key={_id} className="flex justify-between py-1 text-sm">
            <span>
              {product.name} × {quantity}
            </span>
            <span>{currency(product.price * quantity)}</span>
          </div>
        ))}
      </section>

      <section className="text-sm space-y-1 text-gray-700">
        <div className="flex justify-between">
          <span>المجموع الجزئي</span>
          <span>{currency(order?.invoice?.sub_total)}</span>
        </div>
        <div className="flex justify-between">
          <span>مصاريف الشحن</span>
          <span>{currency(order?.invoice?.shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span>خصم</span>
          <span>-{currency(order?.invoice?.discount)}</span>
        </div>
        <div className="flex justify-between">
          <span>ضريبه</span>
          <span>{currency(order?.invoice?.tax)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>الاجمالي</span>
          <span>{currency(order?.invoice?.total)}</span>
        </div>
      </section>

      {/* Status */}
      <section className="flex justify-between items-center">
        <p>
          <span>حاله الطلب : </span>
          <span className={getOrderStatusColor(order?.status)}>
            <b>{getOrderStatus(order?.status)}</b>
          </span>
        </p>
        <p>
          <strong>تاريخ الطلب:</strong>{" "}
          {new Date(order?.createdAt).toLocaleString()}
        </p>
      </section>
    </div>
  );
};
