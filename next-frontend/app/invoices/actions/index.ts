"use server";

import { cookies } from "next/headers";
import { Invoice } from "@/@types";

export async function getInvoices(): Promise<Invoice[]> {
  const cookiesStore = await cookies();
  const apiKey = cookiesStore.get("apiKey")?.value;
  const response = await fetch("http://localhost:8080/invoice", {
    headers: {
      "X-API-KEY": apiKey as string,
    },
    cache: "force-cache",
    next: {
      tags: [`accounts/${apiKey}/invoices`],
    },
  });
  return response.json();
}
