const errorHandeler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
};
export default errorHandeler;
