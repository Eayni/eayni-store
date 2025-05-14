export function getOrderStatus(status: string) {
  const statusMap: { [key: string]: string } = {
    "client.init": "جديد",
    "client.cancel": "ملغي",
    "payment.success": "مدفوع",
    "payment.failure": "فشل الدفع",
    "order.accepted": "تم قبول الطلب",
    "order.rejected": "تم رفض الطلب",
    "order.picked": "تم استلام الطلب",
    "order.delivering": "قيد التوصيل",
    "order.delivered": "تم التوصيل",
    "order.returned": "تم إرجاع الطلب",
    "order.returned.success": "تم إرجاع الطلب بنجاح",
    "order.returned.failure": "فشل إرجاع الطلب",
    "order.returned.cancel": "إلغاء إرجاع الطلب",
    "order.returned.refund": "استرداد المبلغ",
    "order.returned.refund.success": "استرداد المبلغ بنجاح",
    "order.returned.refund.failure": "فشل استرداد المبلغ",
    "order.returned.refund.cancel": "إلغاء استرداد المبلغ",
    "order.returned.refund.pending": "استرداد المبلغ قيد الانتظار",
  };

  return statusMap[status] || status;
}

export function getOrderStatusColor(status: string) {
  const statusColorMap: { [key: string]: string } = {
    "client.init": "text-yellow-500",
    "client.cancel": "text-red-500",
    "payment.success": "text-green-500",
    "payment.failure": "text-red-500",
    "order.accepted": "text-blue-500",
    "order.rejected": "text-red-500",
    "order.picked": "text-blue-500",
    "order.delivering": "text-blue-500",
    "order.delivered": "text-green-500",
    "order.returned": "text-yellow-500",
    "order.returned.success": "text-green-500",
    "order.returned.failure": "text-red-500",
    "order.returned.cancel": "text-red-500",
    "order.returned.refund": "text-yellow-500",
    "order.returned.refund.success": "text-green-500",
    "order.returned.refund.failure": "text-red-500",
    "order.returned.refund.cancel": "text-red-500",
    "order.returned.refund.pending": "text-yellow-500",
  };

  return statusColorMap[status] || "";
}
