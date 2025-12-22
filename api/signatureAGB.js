export default function handler(req, res) {
  const sigBase64 = process.env.SIGNATURE_BASE64_AGB;

  if (!sigBase64) {
    return res.status(500).json({ error: "SIGNATURE_BASE64_AGB not configured" });
  }

  // Respond with the full data URI, ready to use as an <img src="">
  res.status(200).json({
    data: `data:image/png;base64,${sigBase64}`,
  });
}
