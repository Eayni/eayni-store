"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-adress";
import { StepFinish } from "@/components/checkout/step-finish";
import { Steps } from "@/types/checkout-steps";
import { StepType } from "./step-type";
import { StepCompany } from "./step-company";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<Steps>("type");

  let progressPct = 0;
  switch (step) {
    case "type":
      progressPct = 10;
      break;

    case "company":
      progressPct = 30;
      break;

    case "user":
      progressPct = 50;
      break;
    case "address":
      progressPct = 70;
      break;
    case "finish":
      progressPct = 100;
      break;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === "type" && "نوع العميل"}
            {step === "company" && "بيانات الشركه"}
            {step === "user" && "بيانات المستخدم"}
            {step === "address" && "بيانات العنوان"}
            {step === "finish" && "تأكيد الطلب"}
          </DialogTitle>
        </DialogHeader>

        <Progress value={progressPct} />

        <div className="flex flex-col gap-3">
          {step === "type" && <StepType setStep={setStep} />}
          {step === "company" && <StepCompany setStep={setStep} />}
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
