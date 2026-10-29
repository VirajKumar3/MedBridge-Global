import { NextResponse } from 'next/server';

const MOCK_QUOTATIONS = [
  {
    id: "QUOTE-MED-9941",
    hospitalName: "Medanta - The Medicity",
    patientName: "John Doe",
    patientCountry: "Nigeria",
    procedure: "Off-Pump Beating Heart CABG",
    treatmentCostUSD: 4570,
    treatmentCostINR: 380000,
    icuStayCostUSD: 1080,
    inpatientStayCostUSD: 720,
    diagnosticsCostUSD: 540,
    companionHotelUSD: 270,
    localTransportUSD: 120,
    totalEstimatedUSD: 7300,
    totalEstimatedINR: 607400,
    status: "CONFIRMED_BY_HOSPITAL",
    disclaimer: "Estimated Cost — Subject to Hospital Confirmation following direct clinical consultation.",
    validUntil: "2026-11-30",
    createdAt: "2026-09-02"
  },
  {
    id: "QUOTE-APO-8820",
    hospitalName: "Indraprastha Apollo Hospitals",
    patientName: "Fatima Al-Mansoor",
    patientCountry: "United Arab Emirates",
    procedure: "Bilateral Robotic Knee Replacement",
    treatmentCostUSD: 5200,
    treatmentCostINR: 430000,
    icuStayCostUSD: 600,
    inpatientStayCostUSD: 850,
    diagnosticsCostUSD: 480,
    companionHotelUSD: 320,
    localTransportUSD: 150,
    totalEstimatedUSD: 7600,
    totalEstimatedINR: 630800,
    status: "PENDING_HOSPITAL_REVIEW",
    disclaimer: "Estimated Cost — Subject to Hospital Confirmation following direct clinical consultation.",
    validUntil: "2026-11-15",
    createdAt: "2026-09-04"
  }
];

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    disclaimer: "Estimated Cost — Subject to Hospital Confirmation", 
    data: MOCK_QUOTATIONS 
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newQuotation = {
      id: `QUOTE-${Date.now()}`,
      ...body,
      status: "PENDING_HOSPITAL_REVIEW",
      disclaimer: "Estimated Cost — Subject to Hospital Confirmation",
      createdAt: new Date().toISOString().split('T')[0]
    };
    return NextResponse.json({ success: true, data: newQuotation });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process quotation request' }, { status: 400 });
  }
}
