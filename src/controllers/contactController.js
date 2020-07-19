import { contact } from "../services/index";
import { validationResult } from "express-validator";

const findUsersContact = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = Object.values(validationErrors.mapped()).map(
      (item) => item.msg
    );
    return res.status(500).send(errors);
  }

  try {
    const currentUserId = req.user._id;
    const keyword = req.params.keyword;

    const users = await contact.findUsersContact(currentUserId, keyword);
    return res.render("main/contact/sections/_findUsersContact", { users });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const searchFriends = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = Object.values(validationErrors.mapped()).map(
      (item) => item.msg
    );
    return res.status(500).send(errors);
  }

  try {
    const currentUserId = req.user._id;
    const keyword = req.params.keyword;

    const users = await contact.searchFriends(currentUserId, keyword);
    return res.render("main/groupChat/sections/_searchFriends", { users });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addNew = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const contactId = req.body.uid;

    const newContact = await contact.addNew(currentUserId, contactId)
    const response = { success: !!newContact };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const removeContact = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const contactId = req.body.uid;

    const removeContact = await contact.removeContact(currentUserId, contactId)
    return res.status(200).send({ success: !!removeContact });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const removeRequestContactSent = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const contactId = req.body.uid;

    const removeReq = await contact.removeRequestContactSent(currentUserId, contactId)
    return res.status(200).send({ success: !!removeReq });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const removeRequestContactReceived = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const contactId = req.body.uid;

    const removeReq = await contact.removeRequestContactReceived(currentUserId, contactId)
    return res.status(200).send({ success: !!removeReq });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const approveRequestContactReceived = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const contactId = req.body.uid;

    const approveReq = await contact.approveRequestContactReceived(currentUserId, contactId)
    return res.status(200).send({ success: !!approveReq });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const readMoreContacts = async (req, res) => {
  try {
    // get skip number from query param
    const skipNumberContacts = +req.query.skipNumber;
    // get more item
    const newContactUsers = await contact.readMoreContacts(
      req.user._id,
      skipNumberContacts
    );

    return res.status(200).send(newContactUsers);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const readMoreContactsSent = async (req, res) => {
  try {
    // get skip number from query param
    const skipNumberContacts = +req.query.skipNumber;
    // get more item
    const newContactUsers = await contact.readMoreContactsSent(
      req.user._id,
      skipNumberContacts
    );

    return res.status(200).send(newContactUsers);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const readMoreContactsReceived = async (req, res) => {
  try {
    // get skip number from query param
    const skipNumberContacts = +req.query.skipNumber;
    // get more item
    const newContactUsers = await contact.readMoreContactsReceived(
      req.user._id,
      skipNumberContacts
    );

    return res.status(200).send(newContactUsers);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  findUsersContact,
  addNew,
  removeRequestContactSent,
  readMoreContacts,
  readMoreContactsSent,
  readMoreContactsReceived,
  removeRequestContactReceived,
  approveRequestContactReceived,
  removeContact,
  searchFriends
};
