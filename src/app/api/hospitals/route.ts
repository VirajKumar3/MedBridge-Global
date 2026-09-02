import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hospitals = await prisma.hospital.findMany();
    return NextResponse.json({ success: true, data: hospitals });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch hospitals' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
