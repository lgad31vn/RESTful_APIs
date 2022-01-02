import mongoose from 'mongoose';
import { ContactSchema } from '../models/models';

// Create Contact constructor to create new contacts in the db
// and leveraging the ContactSchema as the model for new contacts
const Contact = mongoose.model('Contact', ContactSchema); //Contact database has the ContactSchema schema

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
