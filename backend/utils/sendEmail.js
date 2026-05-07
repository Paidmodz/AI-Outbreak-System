const nodemailer =
    require("nodemailer");

const sendEmail = async (
    subject,
    text
) => {

    try {

        const transporter =
            nodemailer.createTransport({

                service: "gmail",

                auth: {

                    user:
                        "YOUR_GMAIL@gmail.com",

                    pass:
                        "YOUR_APP_PASSWORD"

                }

            });

        const mailOptions = {

            from:
                "YOUR_GMAIL@gmail.com",

            to:
                "YOUR_RECEIVER@gmail.com",

            subject,

            text

        };

        await transporter.sendMail(
            mailOptions
        );

        console.log(
            "Email Sent Successfully"
        );

    } catch (error) {

        console.log(error);

    }

};

module.exports = sendEmail;