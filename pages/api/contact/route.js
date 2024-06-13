
import nodemailer from 'nodemailer';

export default async function POST(request,response) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;


    console.log("dealing with request")
    const formData = await request.body;
    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = formData.message;

    console.log(name,email);
    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: username,
            pass: password
        }
    });

    try {

        const mail =  transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Subject: ${subject} </p>
            <p>Message: ${message} </p>
            `,
        })

        response.status(200).json({ message: "Success: email was sent" });

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "COULD NOT SEND MESSAGE" });
    }


}
