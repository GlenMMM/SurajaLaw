// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
export default async function contact(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { name, email, time, date, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: process.env.user,
      to: "ultraqmik@gmail.com",
      replyTo: email,
      subject: `SURAJA LAW OFFICES contact form submission from ${name}`,
      html: `<p>Ada Permintaan Penjadwalan Konsultasi Baru, dari</p><br>
      <p><strong>Nama: </strong> ${name}</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Nomor Whatsapp: </strong> ${phone}</p><br>
      <p><strong>Tanggal: </strong> ${date}</p><br>
      <p><strong>Jam Konsultasi: </strong> ${time}</p><br>
      <p>Hubungi pemohon untuk memastikan penjadwalan konsultasi.</p>
      `,
    });

    console.log("Message Sent", email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
