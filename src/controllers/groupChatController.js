import { validationResult } from "express-validator";
import { groupChat } from '../services'

const addNewGroup = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = Object.values(validationErrors.mapped()).map(
      (item) => item.msg
    );
    return res.status(500).send(errors);
  }

  try {
    let currentUserId = req.user._id;
    let arrayMemberIds = req.body.arrIds;
    let groupChatName = req.body.groupChatName;

    let newGroupChat = await groupChat.addNewGroup(currentUserId, arrayMemberIds, groupChatName);
    return res.status(200).send({ groupChat: newGroupChat });
  } catch (error) {
    console.error(error)
    return res.status(500).send(error);
  }
};

const leaveGroupChat = async (req, res) => {
  try {
    let groupId = req.body.groupId;
    let currentUserId = req.user._id;
    let newGroupChat = await groupChat.leaveGroupChat(currentUserId, groupId);
    res.status(200).send({ groupChat: newGroupChat });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const findUsersToAddGroupChat = async (req, res) => {
  try {
    let keyword = req.query.keyword;
    let groupId = req.query.groupId;
    let usersInfo = await groupChat.findUsersToAddGroupChat(req.user._id, groupId, keyword);
    res.render("main/members/sections/_findUsersToAddGroupChat.ejs", { usersInfo });
  } catch (error) {
    res.status(500).send(error);
  }
};

const addMemberToGroupChat = async (req, res) => {
  try {
    let memberId = req.body.memberId;
    let groupId = req.body.groupId;
    let newGroupChat = await groupChat.addMemberToGroupChat(groupId, memberId);
    res.status(200).send(newGroupChat);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = {
  addNewGroup,
  leaveGroupChat,
  findUsersToAddGroupChat,
  addMemberToGroupChat
};
