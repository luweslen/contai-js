import Router from 'koa-router';

import { ContactsRoutes } from './modules/Contacts';

const router: Router = new Router({
  prefix: '/v1',
});

router.use(ContactsRoutes);

export { router };
