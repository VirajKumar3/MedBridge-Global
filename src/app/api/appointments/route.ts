import { NextResponse } from 'next/server';

const MOCK_APPOINTMENTS = [
  {
    id: "APT-1001",
    patientName: "John Doe",
    doctorName: "Dr. Naresh Trehan",
    department: "Cardiothoracic Surgery",
    hospital: "Medanta - The Medicity",
    type: "Pre-Travel Video Consultation",
    scheduledTime: "Tomorrow, 3:30 PM IST",
    status: "CONFIRMED",
    roomUrl: "https://telehealth.medbridge-global.com/room/apt-1001"
  },
  {
    id: "APT-1002",
    patientName: "Fatima Al-Mansoor",
    doctorName: "Dr. Ashok Rajgopal",
    department: "Robotic Joint Replacement",
    hospital: "Indraprastha Apollo Hospitals",
    type: "Pre-Travel Video Consultation",
    scheduledTime: "Thursday, 11:00 AM IST",
    status: "CONFIRMED",
    roomUrl: "https://telehealth.medbridge-global.com/room/apt-1002"
  }
];

export async function GET() {
  return NextResponse.json({ success: true, data: MOCK_APPOINTMENTS });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newAppointment = {
      id: `APT-${Date.now()}`,
      ...body,
      status: "CONFIRMED",
      roomUrl: `https://telehealth.medbridge-global.com/room/apt-${Date.now()}`
    };
    return NextResponse.json({ success: true, data: newAppointment });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to schedule appointment' }, { status: 400 });
  }
}
