import { MutationImportCasesArgs } from '@/__generated__/resolvers-types';

import { PrismaClient } from '@prisma/client';

// {
//   first_name: 'Ada',
//   last_name: 'Lindemann',
//   birth_day: '01/10/1992',
//   gender: 'male',
//   address_1: 'qHF4',
//   address_2: '8riU',
//   city: 'Kandy',
//   zip_code: '4',
//   region: 'GPa',
//   mobile_number1: '9091001750',
//   mobile_number2: '9077579348',
//   email: '.@yopmail.com',
//   client_reference: '64555',
//   life_time_id: '426',
//   principal_loan: '70629.13',
//   employer_name: '',
//   employment_position: 'kMNWWf'
// }

const CreateCases = async (
  args: MutationImportCasesArgs,
  caseBatch,
  cases,
  prisma: PrismaClient
) => {
  try {
    for (const Case of cases) {
      await prisma.cases.create({
        data: {
          caseBatch: {
            connect: {
              id: caseBatch.id,
            },
          },
          person: {
            create: {
              birthDay: Case.birth_day,
              firstName: Case.first_name,
              gender: Case.gender,
              lastName: Case.last_name,
              address: {
                create: {
                  address: Case.address_1,
                  city: Case.city,
                  region: Case.region,
                  zipCode: Case.zip_code,
                },
              },
              contacts: {
                create: {
                  contactValue: Case.mobile_number1,
                  type: 'MOBILE',
                },
              },
            },
          },
          clientReference: Case.client_reference,
          caseReference: '42112',
          caseUniqueBatchId: '421124',
        },
      });
    }

    await prisma.case_batch.update({
      data: {
        status: 'SUCCESS',
      },
      where: {
        id: caseBatch.id,
      },
      select: {
        status: true,
      },
    });
  } catch (error) {
    console.log(error);
    await prisma.case_batch.update({
      data: {
        status: 'FAILED',
      },
      where: {
        id: caseBatch.id,
      },
      select: {
        status: true,
      },
    });
  }
};

export default CreateCases;
