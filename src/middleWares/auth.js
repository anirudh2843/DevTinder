const adminAuth = (req, res, next) => {
  const token = "anirudh";
  const isAuth = token == "anirudh";
  if (!isAuth) {
    res.status(401).send("unauthorized hacker");
  } else {
    next();
  }
};

const userAuth=(req, res, next)=>{
    const token = "anirudh";
    const isAuth = token == "anirudh";
    if (!isAuth) {
      res.status(401).send("unauthorized hacker");
    } else {
      next();
    }
}

module.exports = { adminAuth, userAuth };
