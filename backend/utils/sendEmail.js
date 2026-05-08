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
                        "arshidnice1blp@gmail.com",

                    pass:
                        "keiz bfnw pmng srma"

                }

            });

        const mailOptions = {

            from:
                "arshidnice1blp@gmail.com",

            to:
                "kidzhub2004@gmail.com",

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