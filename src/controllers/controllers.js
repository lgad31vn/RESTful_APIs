import mongoose from 'mongoose';
import { ContactSchema } from '../models/models';

// Create Contact constructor to create new contacts in the db
// and leveraging the ContactSchema as the model for new contacts
const Contact = mongoose.model('Contact', ContactSchema); //Contact database has the ContactSchema schema

// get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: 1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  // Another way
  //   Contact.find({}, (err, contact) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json(contact);
  //   });
};

// add new contact
export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);

  const contact = await newContact.save();
  res.json(contact);

  //   let newContact = new Contact(req.body);

  //   newContact.save((err, contact) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.send('New contact added');
  //     res.json(contact);
  //   });
};

// get contact with id
export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactID);
};
