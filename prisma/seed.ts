import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create Users
  const patientUser = await prisma.user.upsert({
    where: { email: 'john.doe@example.com' },
    update: {},
    create: {
      email: 'john.doe@example.com',
      name: 'John Doe',
      role: 'PATIENT',
    },
  });

  const hospitalAdmin = await prisma.user.upsert({
    where: { email: 'admin@apollo.example.com' },
    update: {},
    create: {
      email: 'admin@apollo.example.com',
      name: 'Dr. Smith (Admin)',
      role: 'HOSPITAL_ADMIN',
    },
  });

  // Create Patient Profile
  let patient = await prisma.patient.findUnique({
    where: { userId: patientUser.id },
  });

  if (!patient) {
    patient = await prisma.patient.create({
      data: {
        userId: patientUser.id,
        country: 'Nigeria',
        cityPreference: 'Delhi',
        budget: 15000, // in USD roughly or generic currency
      },
    });
  }

  // Create Hospitals
  const hospitalsData = [
    {
      name: 'Apollo Hospitals',
      city: 'Delhi',
      trustScore: 98,
      intlPatientDesk: true,
      accreditation: 'JCI, NABH',
    },
    {
      name: 'Fortis Healthcare',
      city: 'Mumbai',
      trustScore: 94,
      intlPatientDesk: true,
      accreditation: 'JCI',
    },
    {
      name: 'Max Super Speciality',
      city: 'Delhi',
      trustScore: 95,
      intlPatientDesk: true,
      accreditation: 'NABH',
    },
    {
      name: 'Medanta - The Medicity',
      city: 'Gurgaon',
      trustScore: 97,
      intlPatientDesk: true,
      accreditation: 'JCI, NABH',
    },
  ];

  for (const h of hospitalsData) {
    const existing = await prisma.hospital.findFirst({ where: { name: h.name } });
    if (!existing) {
      await prisma.hospital.create({ data: h });
    }
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
