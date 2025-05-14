import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import { initOrderPayload } from "@/lib/order-payload";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);
  const order = initOrderPayload();
  const handleClick = () => {
    console.log(order);
  };

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        عزيري <strong>{name}</strong>!
      </p>
      <p>
        انت بصدد الانتهاء من الطلب، اضغط على زر "تأكيد الطلب" أدناه لإرسال طلبك.
      </p>
      <Button onClick={handleClick}>تأكيد الطلب</Button>
    </div>
  );
};
