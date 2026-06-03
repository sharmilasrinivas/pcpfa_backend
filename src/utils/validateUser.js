const validateUser = (user) => {

  if (!user.userId) return false;

  if (!user.name) return false;

  if (!user.email) return false;

  const validRoles = [
    "admin",
    "manager",
    "developer",
    "tester"
  ];

  if (
    user.role &&
    !validRoles.includes(
      user.role.trim().toLowerCase()
    )
  ) {
    return false;
  }

  return true;
};

export default validateUser;