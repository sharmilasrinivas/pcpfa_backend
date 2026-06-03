import axios from "axios";

import User from "../models/User.js";
import Project from "../models/Project.js";
import Issue from "../models/Issue.js";
import Comment from "../models/Comment.js";

const BASE_URL =
"https://t4e-testserver.onrender.com/api";

const syncData = async () => {

  const tokenResponse =
  await axios.post(
    `${BASE_URL}/public/token`,
    {
      studentId:"E0323014",
      password:"307864",
      set:"setB"
    }
  );

  const {
    token,
    dataUrl
  } = tokenResponse.data;

  const datasetResponse =
  await axios.get(
    `${BASE_URL}${dataUrl}`,
    {
      headers:{
        Authorization:
        `Bearer ${token}`
      }
    }
  );

  const {
    users = [],
    projects = [],
    issues = [],
    comments = []
  } = datasetResponse.data.data;

  let inserted = 0;
  let duplicates = 0;
  let rejected = 0;

  // USERS

  for(const user of users){

    try{

      const exists =
      await User.findOne({
        userId:user.userId
      });

      if(exists){
        duplicates++;
        continue;
      }

      await User.create(user);

      inserted++;

    }
    catch(error){

      console.log(
        "USER ERROR:",
        error.message
      );

      rejected++;
    }

  }

  // PROJECTS

  for(const project of projects){

    try{

      const exists =
      await Project.findOne({
        projectId:
        project.projectId
      });

      if(exists){
        duplicates++;
        continue;
      }

      await Project.create(
        project
      );

      inserted++;

    }
    catch(error){

      console.log(
        "PROJECT ERROR:",
        error.message
      );

      rejected++;
    }

  }

  // ISSUES

  for(const issue of issues){

    try{

      const exists =
      await Issue.findOne({
        issueId:
        issue.issueId
      });

      if(exists){
        duplicates++;
        continue;
      }

      await Issue.create(
        issue
      );

      inserted++;

    }
    catch(error){

      console.log(
        "ISSUE ERROR:",
        error.message
      );

      rejected++;
    }

  }

  // COMMENTS

  for(const comment of comments){

    try{

      const exists =
      await Comment.findOne({
        commentId:
        comment.commentId
      });

      if(exists){
        duplicates++;
        continue;
      }

      await Comment.create(
        comment
      );

      inserted++;

    }
    catch(error){

      console.log(
        "COMMENT ERROR:",
        error.message
      );

      rejected++;
    }

  }

  console.log({
    inserted,
    duplicates,
    rejected
  });

  return {

    totalFetched:
      users.length +
      projects.length +
      issues.length +
      comments.length,

    inserted,
    duplicates,
    rejected

  };

};

export default syncData;