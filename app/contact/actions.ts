"use server";

import { saveInquiry } from "@/lib/inquiries";

export async function submitContactForm(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const whatsapp = formData.get("whatsapp") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !whatsapp || !message) {
    return { success: false, error: "Nama, WhatsApp, dan Pesan wajib diisi." };
  }

  try {
    saveInquiry({ name, email, whatsapp, service, message });

    const waText = encodeURIComponent(
      `Halo CODING BANG, saya ${name}.\n\n${message}`
    );
    const waUrl = `https://wa.me/6285810289428?text=${waText}`;

    return {
      success: true,
      message: "Pesan berhasil dikirim! Kami akan menghubungi Anda segera.",
      waUrl,
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      error: "Gagal mengirim pesan. Silakan coba lagi.",
    };
  }
}
