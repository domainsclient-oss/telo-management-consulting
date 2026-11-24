"use server";

export type ContactField = "name" | "email" | "phone" | "service" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Shown above the form when the whole submission fails. */
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** What the person typed, so a failed submit does not clear the form. */
  values?: Partial<Record<ContactField, string>>;
};

const SERVICES = [
  "Digital Growth",
  "BPO, Staffing & Training",
  "Software Solutions",
  "Merchandise",
  "Something else",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (text(formData, "company_website", 200)) return { status: "success" };

  const values = {
    name: text(formData, "name", 120),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    service: text(formData, "service", 60),
    message: text(formData, "message", 4000),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Enter your name.";
  if (!values.email) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email))
    errors.email = "Enter a valid email address, like name@company.com.";
  if (values.phone && !/^[0-9+()\-\s.]{6,}$/.test(values.phone))
    errors.phone = "Enter a valid phone number, or leave it empty.";
  if (values.service && !SERVICES.includes(values.service))
    errors.service = "Choose a service from the list.";
  if (values.message.length < 10)
    errors.message = "Tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // Delivery uses Resend (https://resend.com). See .env.example.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.warn(
      "Contact form: RESEND_API_KEY and CONTACT_TO_EMAIL are not set, so the message was not delivered.",
    );
    return {
      status: "error",
      message:
        "Your message was not sent: email delivery is not set up on this site yet.",
      values,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Telo website <${from}>`,
        to: [to],
        reply_to: values.email,
        subject: `Website enquiry from ${values.name}`,
        text: [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          `Phone: ${values.phone || "Not given"}`,
          `Service: ${values.service || "Not chosen"}`,
          "",
          values.message,
        ].join("\n"),
      }),
    });
    if (!response.ok) {
      console.error("Contact form: Resend replied", response.status, await response.text());
      throw new Error("Email service rejected the message");
    }
  } catch (error) {
    console.error("Contact form: delivery failed", error);
    return {
      status: "error",
      message:
        "Your message was not sent because of a problem on our side. Please try again in a few minutes.",
      values,
    };
  }

  return { status: "success" };
}
