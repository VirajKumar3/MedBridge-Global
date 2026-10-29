import { NextResponse } from 'next/server';
import { DOCTORS } from '@/lib/data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty');
    const city = searchParams.get('city');

    let result = DOCTORS;

    if (specialty && specialty !== 'All') {
      result = result.filter(d => d.department.toLowerCase().includes(specialty.toLowerCase()));
    }

    if (city && city !== 'All') {
      result = result.filter(d => d.city.toLowerCase().includes(city.toLowerCase()));
    }

    return NextResponse.json({ success: true, count: result.length, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch doctors' }, { status: 500 });
  }
}
