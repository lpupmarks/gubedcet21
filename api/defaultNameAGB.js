export default function handler(req, res) {
  const defaultName = process.env.DEFAULT_NAME_AGB || "Name Here";
  res.status(200).json({ name: defaultName });
}
