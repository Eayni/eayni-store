import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { initOrderPayload } from "@/lib/order-payload";
import { initOrderPaymentRedirect } from "@/services";
import { useState } from "react";

export const StepFinish = () => {
  const [loading, setLoading] = useState(false);
  const { name } = useCheckoutStore((state) => state);
  const order = initOrderPayload();
  const handleClick = async () => {
    setLoading(true);
    // Check if the order is valid
    initOrderPaymentRedirect(order)
      .then((res) => {
        window.location.href = res;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-4 text-center flex flex-col gap-5">
      <p className="text-gray-800 dark:text-gray-100">
        عزيري <strong>{name}</strong>!
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        أنت بصدد الانتقال إلى بوابة الدفع الإلكتروني. يُرجى عدم تحديث الصفحة أو
        إغلاق المتصفح أثناء عملية الدفع لضمان إتمام العملية بنجاح. عند جاهزيتك،
        اضغط على زر "تأكيد الطلب" أدناه لإرسال طلبك.
      </p>
      <Button disabled={loading} onClick={handleClick}>
        {loading ? "توجه لبوابه الدفع..." : "الدفع"}
      </Button>
    </div>
  );
};
