import { Steps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckoutStore } from "@/stores/checkout-store";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "يرجى إدخال الاسم"),
  email: z
    .string()
    .min(2, " يرجى إدخال البريد الإلكتروني")
    .email("البريد الإلكتروني غير صالح"),
  phone: z
    .string()
    .regex(/^\d+$/, "رقم الهاتف غير صالح")
    .min(10, "رقم الهاتف يجب أن يكون 10 أرقام يبدا ب 05"),
});

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};

export const StepUser = ({ setStep }: Props) => {
  const { name, email, setEmail, phone, setPhone, setName } = useCheckoutStore(
    (state) => state
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name, email, phone },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setEmail(values.email);
    setPhone(values.phone);
    setStep("address");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم كاملا</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="الاسم كاملا" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="البريد الإلكتروني" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم الهاتف</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="رقم الهاتف" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between between mt-4">
          <Button variant="link" onClick={() => setStep("type")}>
            السابق
          </Button>
          <Button type="submit" variant="outline">
            التالي
          </Button>
        </div>
      </form>
    </Form>
  );
};
