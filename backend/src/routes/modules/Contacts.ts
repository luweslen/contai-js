import Router from 'koa-router';
import { ContactsController } from 'src/controllers/Contacts';

const router: Router = new Router({
  prefix: '/contacts',
});

router.post('/', ContactsController.create);

router.put('/:id', ContactsController.update);

router.delete('/:id', ContactsController.delete);

router.get('/:id', ContactsController.get);

router.get('/', ContactsController.getAll);

export const ContactsRoutes = router.routes();
