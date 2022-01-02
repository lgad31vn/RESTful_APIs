import { addNewContact } from '../controllers/controllers';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res) => res.send('GET request successful!'))
    .post(addNewContact);
  app
    .route('/contact/:contactID')
    .put((req, res) => res.send('PUT request sucessful!'))
    .delete((req, res) => res.send('DELETE request successful!'));
};

export default routes;
