import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // In a real app, this would parse FormData containing a file,
    // send it to an LLM / OCR service, and return structured JSON.
    // For this prototype, we simulate a delay and return mock data.
    
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockAnalysis = {
      patientDetails: {
        name: "John Doe",
        age: 52,
        gender: "Male"
      },
      primarySpecialty: "Cardiology",
      findings: [
        "Severe multi-vessel coronary artery disease",
        "History of Hypertension (controlled)",
        "Type 2 Diabetes Mellitus"
      ],
      clinicalPathway: [
        "Cardiology consultation and physical evaluation.",
        "Further diagnostic imaging (Echocardiogram).",
        "Potential surgical assessment for Coronary Artery Bypass Grafting (CABG)."
      ],
      recommendedHospitals: [
        { id: "h1", score: 96 },
        { id: "h3", score: 94 },
        { id: "h2", score: 92 }
      ],
      estimatedCostRange: {
        min: 680000,
        max: 820000,
        currency: "INR"
      }
    };

    return NextResponse.json({ success: true, data: mockAnalysis });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'AI Analysis failed' }, { status: 500 });
  }
}
