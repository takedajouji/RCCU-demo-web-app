"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { submitAppointment } from "@/app/actions/forms";
import { appointmentSchema, type AppointmentFields } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ComplianceNote } from "@/components/forms/ComplianceNote";
import { FormField } from "@/components/forms/FormField";
import { Honeypot } from "@/components/forms/Honeypot";

export function AppointmentForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFields>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", email: "", phone: "", preferredDate: "", message: "", company_website: "" },
  });

  function onSubmit(values: AppointmentFields) {
    setServerError(null);
    startTransition(async () => {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
      const res = await submitAppointment(undefined, fd);
      if (res.success) router.push("/wealth/appointments/success");
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

      <FormField id="name" label="Name" error={errors.name?.message}>
        <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
      </FormField>

      <FormField id="email" label="Email" error={errors.email?.message}>
        <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
      </FormField>

      <FormField id="phone" label="Phone" optional error={errors.phone?.message}>
        <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </FormField>

      <FormField id="service" label="Service" error={errors.service?.message}>
        <Select id="service" defaultValue="" {...register("service")} aria-invalid={!!errors.service}>
          <option value="" disabled>
            Select a service
          </option>
          <option value="planning">Financial planning</option>
          <option value="retirement">Retirement strategies</option>
          <option value="other">Other</option>
        </Select>
      </FormField>

      <FormField id="preferredDate" label="Preferred date" optional error={errors.preferredDate?.message}>
        <Input id="preferredDate" type="date" {...register("preferredDate")} />
      </FormField>

      <FormField id="message" label="What would you like to discuss?" optional error={errors.message?.message}>
        <Textarea id="message" placeholder="Share any goals or questions" {...register("message")} />
      </FormField>

      <ComplianceNote />

      <Button type="submit" disabled={pending}>
        {pending ? "Requesting…" : "Request appointment"}
      </Button>
    </form>
  );
}
