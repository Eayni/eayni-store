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
  cr: z.string().min(2, "الحقل مطلوب"),
  name: z.string().min(2, "الحقل مطلوب"),
  taxـnumber: z.string().min(2, "الحقل مطلوب"),
  national_address: z.string().min(2, "الحقل مطلوب"),
});

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};

export const StepCompany = ({ setStep }: Props) => {
  const { company, setCompany } = useCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...company },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setCompany(values);
    setStep("user");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="cr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 dark:text-gray-100">
                    السجل التجاري
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 dark:text-gray-100">
                    اسم الشركه
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxـnumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 dark:text-gray-100">
                    الرقم الضريبي
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="national_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 dark:text-gray-100">
                    العنوان الوطني
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
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
