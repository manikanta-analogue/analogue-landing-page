import { NextResponse } from "next/server";

const HELLO_LEADS_BASE_URL = "https://app.helloleads.io";
const HELLO_LEADS_EVENT_FORM_URL =
  "https://app.helloleads.io/app/account/eventform/b28eaf5c8c86c93f39a6b5274bedce49";
const HELLO_LEADS_VISITOR_POST_URL = `${HELLO_LEADS_BASE_URL}/index.php/app/account/visitorPost`;
const HELLO_LEADS_EVENT_META = {
  eventName: "Google ads",
  eventId: "470192",
  organizationId: "85925",
  userId: "116611",
  userEmail: "digital.analouge1@gmail.com",
  sendGreet: "1",
  lead_share: "1",
};

export async function POST(request) {
  try {
    const values = await request.json();
    const phone = String(values.phone || "").replace(/\D/g, "");

    if (!values.name || !values.email || !values.service || !values.budget || !values.description || phone.length !== 10) {
      return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
    }

    const notes = [
      `Service: ${values.service}`,
      `Budget: ${values.budget}`,
      `Description: ${values.description}`,
      `Source Form: ${HELLO_LEADS_EVENT_FORM_URL}`,
    ].join("\n");

    const leadPayload = new URLSearchParams({
      firstName: values.name,
      email: values.email,
      mobile: phone,
      mobileCode: "+91",
      notes,
      customlist: "",
      middleName: "",
      cityCode: "",
      surName: "",
      ...HELLO_LEADS_EVENT_META,
    });

    const response = await fetch(HELLO_LEADS_VISITOR_POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Referer: HELLO_LEADS_EVENT_FORM_URL,
      },
      body: leadPayload.toString(),
    });

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = null;
    }

    if (!response.ok || result?.status === "error") {
      return NextResponse.json(
        { message: "HelloLeads event form submission failed", details: result || responseText },
        { status: response.status || 502 }
      );
    }

    return NextResponse.json({ message: "Lead submitted successfully", details: result });
  } catch (error) {
    return NextResponse.json({ message: "Unable to submit lead" }, { status: 500 });
  }
}
