import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { initOrderPayload } from "@/lib/order-payload";
import { initOrderPaymentRedirect } from "@/services";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);
  const order = initOrderPayload();
  const handleClick = async () => {
    initOrderPaymentRedirect(order).then((res) => {
      window.location.href = res;
    });
  };

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        عزيري <strong>{name}</strong>!
      </p>
      <p>
        أنت بصدد الانتقال إلى بوابة الدفع الإلكتروني. يُرجى عدم تحديث الصفحة أو
        إغلاق المتصفح أثناء عملية الدفع لضمان إتمام العملية بنجاح. عند جاهزيتك،
        اضغط على زر "تأكيد الطلب" أدناه لإرسال طلبك.
      </p>
      <Button onClick={handleClick}>تأكيد الطلب </Button>
    </div>
  );
};
