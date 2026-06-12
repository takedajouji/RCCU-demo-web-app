"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { submitContact } from "@/app/actions/forms";
import { contactSchema, type ContactFields } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ComplianceNote } from "@/components/forms/ComplianceNote";
import { FormField } from "@/components/forms/FormField";
import { Honeypot } from "@/components/forms/Honeypot";

export function ContactForm() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", company_website: "" },
  });

  function onSubmit(values: ContactFields) {
    setServerError(null);
    startTransition(async () => {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, v ?? ""));
      const res = await submitContact(undefined, fd);
      if (res.success) router.push("/contact/success");
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

      <FormField id="topic" label="Topic" error={errors.topic?.message}>
        <Select id="topic" defaultValue="" {...register("topic")} aria-invalid={!!errors.topic}>
          <option value="" disabled>
            Select a topic
          </option>
          <option value="accounts">Accounts</option>
          <option value="online-banking">Online banking</option>
          <option value="loans">Loans</option>
          <option value="other">Other</option>
        </Select>
      </FormField>

      <FormField id="message" label="Message" error={errors.message?.message}>
        <Textarea id="message" placeholder="How can we help?" {...register("message")} aria-invalid={!!errors.message} />
      </FormField>

      <ComplianceNote />

      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
