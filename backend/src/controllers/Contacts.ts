import { Context } from 'koa';
import { ContactModel, ContactType } from '../models/Contact';

class ContactsController {
  private static model = new ContactModel();

  public static async create(ctx: Context) {
    const body = ctx.request.body as ContactType;

    const response = await ContactsController.model.create(body);

    if (!response) {
      ctx.body = {
        error: 'Error creating new contact',
      };
      return;
    }

    ctx.body = {
      message: 'Contact created successfully',
    };
    ctx.status = 201;
  }

  public static async update(ctx: Context) {
    const body = ctx.request.body as ContactType;
    const { id } = ctx.params;

    const response = await ContactsController.model.update(id, body);

    if (!response) {
      ctx.body = {
        error: 'Error updating new contact',
      };
      return;
    }

    ctx.body = {
      message: 'Contact updated successfully',
    };
  }

  public static async delete(ctx: Context) {
    const { id } = ctx.params;

    const response = await ContactsController.model.delete(id);

    if (!response) {
      ctx.body = {
        errors: 'Error removing new contact',
      };
      return;
    }

    ctx.body = {
      message: 'Contact removed successfully',
    };
  }

  public static async get(ctx: Context) {
    const { id } = ctx.params;

    const response = await ContactsController.model.get(id);

    if (!response) {
      ctx.body = {
        errors: 'Error getting new contact',
      };
      return;
    }

    ctx.body = {
      data: { contact: response },
    };
  }

  public static async getAll(ctx: Context) {
    const sortBy = ctx.query.sortBy as string || 'createdAt';
    const sortIn = ctx.query.sortIn as string || 'asc';
    const skip = Number(ctx.query.skip) || 0;
    const limit = Number(ctx.query.limit) || 10;

    const { contacts, params } = await ContactsController.model.getAll({
      sortBy,
      sortIn,
      skip,
      limit,
    });

    if (contacts.length <= 0) {
      ctx.status = 204;
    }

    ctx.body = {
      meta: params,
      data: {
        contacts: contacts,
      },
    };
  }
}

export { ContactsController };
