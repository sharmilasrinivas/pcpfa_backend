const sanitizeUser = (user) => {

  return {

    userId:
      user.userId?.trim(),

    name:
      user.name?.trim(),

    email:
      user.email?.trim().toLowerCase(),

    role:
      user.role
        ?.trim()
        ?.toLowerCase(),

    department:
      user.department?.trim(),

    status:
      user.status
        ?.trim()
        ?.toLowerCase()

  };

};

export default sanitizeUser;