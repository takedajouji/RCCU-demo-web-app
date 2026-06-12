"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { submitLoanInquiry } from "@/app/actions/forms";
import { loanInquirySchema, type LoanInquiryFields } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ComplianceNote } from "@/components/forms/ComplianceNote";
import { FormField } from "@/components/forms/FormField";
import { Honeypot } from "@/components/forms/Honeypot";

export function LoanInquiryForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanInquiryFields>({
    resolver: zodResolver(loanInquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "", company_website: "" },
  });

  function onSubmit(values: LoanInquiryFields) {
    setServerError(null);
    startTransition(async () => {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
      const res = await submitLoanInquiry(undefined, fd);
      if (res.success) router.push("/mortgage/apply/success");
      else setServerError(res.error);
    });
  }

  return (
    <form className="relative space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Honeypot field={register("company_website")} />
      {serverError ? (
        <div
          role="alert"
          className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700"
        >
          {serverError}
        </div>
      ) : null}

      <FormField id="name" label="Full name" error={errors.name?.message}>
        <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
      </FormField>

      <FormField id="email" label="Email" error={errors.email?.message}>
        <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
      </FormField>

      <FormField id="phone" label="Phone" error={errors.phone?.message}>
        <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} aria-invalid={!!errors.phone} />
      </FormField>

      <FormField id="loanType" label="Loan type" error={errors.loanType?.message}>
        <Select id="loanType" defaultValue="" {...register("loanType")} aria-invalid={!!errors.loanType}>
          <option value="" disabled>
            Select a loan type
          </option>
          <option value="purchase">Home purchase</option>
          <option value="refinance">Refinance</option>
          <option value="home-equity">Home equity</option>
          <option value="not-sure">Not sure yet</option>
        </Select>
      </FormField>

      <FormField id="message" label="Anything else?" optional error={errors.message?.message}>
        <Textarea id="message" placeholder="Tell us about your goals" {...register("message")} />
      </FormField>

      <ComplianceNote>
        This is a preliminary inquiry, not a loan application, and does not affect your credit.
        Never submit your Social Security number or account numbers here. A loan officer will
        follow up to continue securely.
      </ComplianceNote>

      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit inquiry"}
      </Button>
    </form>
  );
}
