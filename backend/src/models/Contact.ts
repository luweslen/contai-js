import { PrismaClient, Prisma } from '@prisma/client';

export type ContactType = Prisma.contactsCreateInput

export type GetAllParamsType = {
  sortBy?: string;
  sortIn?: string;
  skip?: number;
  limit?: number;
  total?: number;
}

class ContactModel {
  private prisma = new PrismaClient();

  public async create(body: ContactType) {
    const createdContact = await this.prisma.contacts.create({
      data: {
        ...body,
      },
    });

    return createdContact;
  }

  public async update(id: string, body: ContactType) {
    const updatedContact = await this.prisma.contacts.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });

    return updatedContact;
  }

  public async delete(id: string) {
    const deletedContact = await this.prisma.contacts.delete({
      where: {
        id,
      },
    });

    return deletedContact;
  }

  public async get(id: string) {
    const contact = await this.prisma.contacts.findUnique({
      where: {
        id,
      },
    });

    return contact;
  }

  public async getAll(params?: GetAllParamsType) {
    const sortBy = {};

    if ('sortBy' in params && params.sortBy) {
      sortBy[params.sortBy] = params.sortIn || 'asc';
    }

    const contacts = await this.prisma.contacts.findMany({
      where: {

      },
      skip: params.skip || 0,
      orderBy: sortBy,
      take: params.limit || 10,
    });

    const total = await this.prisma.contacts.count();

    return {
      params: {
        ...params,
        total,
      },
      contacts,
    };
  }
}

export { ContactModel };
