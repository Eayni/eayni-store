import { Steps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useCheckoutStore } from "@/stores/checkout-store";

import { Button } from "@/components/ui/button";

type Props = {
  setStep: Dispatch<SetStateAction<Steps>>;
};

export const StepType = ({ setStep }: Props) => {
  const { client_type, setClientType } = useCheckoutStore((state) => state);

  const handleChange = (value: string) => {
    setClientType(value);
  };

  const onSubmit = () => {
    if (client_type === "Individual") {
      setStep("user");
    }
    if (client_type === "Company") {
      setStep("company");
    }
  };

  const options = [
    {
      id: "individual",
      value: "Individual",
      label: "عميل افراد",
      description: "خاص بالافراد",
      disabled: false,
    },
    {
      id: "company",
      value: "Company",
      label: "شركات",
      description: "خاص بالشركات ، القطاع الخاص والجهات ",
      disabled: false,
    },
  ];

  return (
    <div>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          يرجي تحديد الجهه
        </h2>

        <div className="flex flex-col gap-4" role="radiogroup">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full border cursor-pointer flex items-center justify-center `}
                role="radio"
                aria-checked={client_type === option.value}
                onClick={() => {
                  if (!option.disabled) {
                    handleChange(option.value);
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    !option.disabled &&
                    (e.key === "Enter" || e.key === " ")
                  ) {
                    e.preventDefault();
                    handleChange(option.value);
                  }
                }}
              >
                {client_type === option.value && (
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                )}
              </div>
              <label
                className={`ml-3 ${
                  option.disabled ? "text-gray-400" : "text-gray-700"
                }`}
                onClick={() => {
                  handleChange(option.value);
                }}
              >
                <span className="text-base">{option.label}</span>
                <p
                  className={`text-sm ${
                    option.disabled ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {option.description}
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end between mt-4">
        <Button onClick={onSubmit} type="submit">
          التالي
        </Button>
      </div>
    </div>
  );
};
