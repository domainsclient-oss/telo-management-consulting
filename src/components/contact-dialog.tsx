"use client";

import { useActionState, useEffect, useId, useState } from "react";
import { CircleCheck } from "lucide-react";
import {
  sendContactMessage,
  type ContactField,
  type ContactState,
} from "@/app/actions";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const OPEN_EVENT = "telo:open-contact";

/** Opens the contact popup from anywhere on the page. */
export function openContact() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/** A button that opens the contact popup. */
export function ContactButton({
  className,
  children = "Get in Touch",
  onOpen,
}: {
  className?: string;
  children?: React.ReactNode;
  /** Runs just before the popup opens, e.g. to close the mobile menu. */
  onOpen?: () => void;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => {
        onOpen?.();
        openContact();
      }}
      className={cn(
        buttonVariants(),
        "bg-brand-red-deep font-semibold text-white hover:bg-brand-red",
        className,
      )}
    >
      {children}
    </button>
  );
}

const services = [
  "Digital Growth",
  "BPO, Staffing & Training",
  "Software Solutions",
  "Merchandise",
  "Something else",
];

const fieldClass = "h-11 px-3 text-base md:text-base";
const initialState: ContactState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm font-medium text-destructive">
      {message}
    </p>
  );
}

function ContactForm({
  onSent,
  onClose,
}: {
  onSent: () => void;
  onClose: () => void;
}) {
  const [state, action, pending] = useActionState(
    sendContactMessage,
    initialState,
  );
  const uid = useId();
  const id = (field: ContactField | "form") => `${uid}-${field}`;
  const errorId = (field: ContactField) => `${uid}-${field}-error`;

  useEffect(() => {
    if (state.status === "success") onSent();
  }, [state.status, onSent]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 p-6 sm:p-8" role="status">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary-deep">
          <CircleCheck className="size-8" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em]">
          Message sent
        </h3>
        <p className="text-base text-muted-foreground">
          Thank you. We have your message and will reply by email.
        </p>
        <button
          type="button"
          onClick={onClose}
          className={cn(buttonVariants(), "mt-2 h-11 px-6 text-base font-semibold")}
        >
          Close
        </button>
      </div>
    );
  }

  const { errors = {}, values = {} } = state;
  const invalid = (field: ContactField) =>
    errors[field]
      ? { "aria-invalid": true, "aria-describedby": errorId(field) }
      : {};

  return (
    <form action={action} noValidate className="grid gap-5 p-6 sm:p-8">
      {state.message && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/30 bg-red-tint px-4 py-3 text-sm font-medium text-destructive"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor={id("name")}>Name</Label>
          <Input
            id={id("name")}
            name="name"
            autoComplete="name"
            required
            defaultValue={values.name}
            className={fieldClass}
            {...invalid("name")}
          />
          <FieldError id={errorId("name")} message={errors.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={id("email")}>Email</Label>
          <Input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            className={fieldClass}
            {...invalid("email")}
          />
          <FieldError id={errorId("email")} message={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor={id("phone")}>
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={values.phone}
            className={fieldClass}
            {...invalid("phone")}
          />
          <FieldError id={errorId("phone")} message={errors.phone} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={id("service")}>
            Service <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <select
            id={id("service")}
            name="service"
            defaultValue={values.service ?? ""}
            className="h-11 w-full rounded-lg border border-input bg-white px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
            {...invalid("service")}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError id={errorId("service")} message={errors.service} />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor={id("message")}>How can we help?</Label>
        <Textarea
          id={id("message")}
          name="message"
          rows={4}
          required
          defaultValue={values.message}
          className="min-h-28 px-3 py-2.5 text-base md:text-base"
          {...invalid("message")}
        />
        <FieldError id={errorId("message")} message={errors.message} />
      </div>

      {/* Honeypot for spam bots: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          buttonVariants(),
          "h-12 px-6 text-base font-semibold sm:justify-self-start",
        )}
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

/** The contact popup itself. Render once; open it with `openContact()`. */
export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  // Changing the key gives a fresh, empty form after a message has been sent.
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && sent) {
      setSent(false);
      setFormKey((key) => key + 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto p-0 text-base sm:max-w-xl">
        <div aria-hidden="true" className="flex h-1.5">
          <span className="flex-[3] bg-primary" />
          <span className="flex-[2] bg-brand-red" />
          <span className="flex-1 bg-brand-gold" />
        </div>
        <DialogHeader className="bg-accent px-6 py-6 pr-14 sm:px-8">
          <DialogTitle className="text-2xl leading-tight font-semibold tracking-[-0.02em]">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/75">
            Tell us what you need and we will get back to you.
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          key={formKey}
          onSent={() => setSent(true)}
          onClose={() => handleOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
