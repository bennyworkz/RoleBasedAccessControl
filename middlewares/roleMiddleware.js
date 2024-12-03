exports.authorize = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        console.log(
          `Unauthorized access attempt by user ${req.user.username} with role ${req.user.role}`
        );
        return res.status(403).json({ message: "Access denied" });
      }
      next();
    };
  };
  