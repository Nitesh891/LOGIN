import mysql from "mysql2/promise";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const {
    FirstName, LastName, FatherName, dob,
    email, Phone, Password, Gender, Address, Trade
  } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: "your-mysql-host",
      user: "your-mysql-username",
      password: "your-mysql-password",
      database: "website"
    });

    const insertFormdata = `
      INSERT INTO Formdata (firstname, lastname, fathername, dob, email, phone, password, gender, address, trade)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const insertLogin = `
      INSERT INTO Login (username, password)
      VALUES (?, ?)`;

    await connection.execute(insertFormdata, [FirstName, LastName, FatherName, dob, email, Phone, Password, Gender, Address, Trade]);
    await connection.execute(insertLogin, [FirstName, Password]);

    await connection.end();
    res.status(200).send("✅ Registration successful!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving to database.");
  }
}
