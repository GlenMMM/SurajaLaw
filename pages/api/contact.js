// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nodemailer from "nodemailer";
// import Cors from "cors";

// Initializing the cors middleware
// const cors = Cors({
//   methods: ["GET", "HEAD"],
// });
// export default async function contact(req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   const { name, email, time, date, phone } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.user,
//       pass: process.env.pass,
//     },
//   });

//   try {
//     const emailResponse = await transporter.sendMail({
//       from: process.env.user,
//       to: "ultraqmik@gmail.com",
//       replyTo: email,
//       subject: `SURAJA LAW OFFICES contact form submission from ${name}`,
//       html: `<p>Ada Permintaan Penjadwalan Konsultasi Baru, dari</p><br>
//       <p><strong>Nama: </strong> ${name}</p><br>
//       <p><strong>Email: </strong> ${email}</p><br>
//       <p><strong>Nomor Whatsapp: </strong> ${phone}</p><br>
//       <p><strong>Tanggal: </strong> ${date}</p><br>
//       <p><strong>Jam Konsultasi: </strong> ${time}</p><br>
//       <p>Hubungi pemohon untuk memastikan penjadwalan konsultasi.</p>
//       `,
//     });

//     console.log("Message Sent", email.messageId);
//   } catch (err) {
//     console.log(err);
//   }

//   res.status(200).json(req.body);
// }

// api v2
export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    secure: true,
  });
  const { name, email, time, date, phone, topic, msg } = req.body;
  const mailData = {
    from: process.env.user,
    to: "ultraqmik@gmail.com",
    replyTo: email,
    subject: `SURAJA LAW OFFICES contact form submission from ${name}`,
    html: `<p><strong>Ada Permintaan Penjadwalan Konsultasi Baru, dari </strong></p>
          <p><strong>Nama: </strong> ${name}</p>
          <p><strong>Email: </strong> ${email}</p>
          <p><strong>Nomor Whatsapp: </strong> ${phone}</p>
          <p><strong>Tanggal: </strong> ${date}</p>
          <p><strong>Jam Konsultasi: </strong> ${time}</p>
          <p><strong>Topic Konsultasi: </strong> ${topic}</p>
          <p><strong>Deskripsi Masalah: </strong> ${msg}</p>          
          <p><strong>Hubungi pemohon untuk memastikan penjadwalan konsultasi.</strong></p>
          `,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
