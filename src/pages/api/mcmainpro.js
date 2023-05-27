import fetch from "node-fetch";

export default async (req, res) => {
  const { nick } = req.query;

  try {
    const response = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${nick}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const result = await response.json();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch minecraft profile" });
  }
};
