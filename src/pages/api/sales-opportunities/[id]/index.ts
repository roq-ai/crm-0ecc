import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { salesOpportunityValidationSchema } from 'validationSchema/sales-opportunities';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.sales_opportunity
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSalesOpportunityById();
    case 'PUT':
      return updateSalesOpportunityById();
    case 'DELETE':
      return deleteSalesOpportunityById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSalesOpportunityById() {
    const data = await prisma.sales_opportunity.findFirst(convertQueryToPrismaUtil(req.query, 'sales_opportunity'));
    return res.status(200).json(data);
  }

  async function updateSalesOpportunityById() {
    await salesOpportunityValidationSchema.validate(req.body);
    const data = await prisma.sales_opportunity.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSalesOpportunityById() {
    const data = await prisma.sales_opportunity.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
