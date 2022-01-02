import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name',
  },
  lastName: {
    type: String,
    required: 'Enter a last name',
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
// Create Contact constructor to create new contacts in the db
// and leveraging the ContactSchema as the model for new contacts
// module.exports = Contact = mongoose.model('Contact', ContactSchema); //export and contruct at the same time
