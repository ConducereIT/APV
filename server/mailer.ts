import nodemailer from "nodemailer"
import { GenezioDeploy } from "@genezio/types";
import juice from "juice";

@GenezioDeploy()
export class Mailer{

    private transporter: nodemailer.Transporter;
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.SEND_MAIL_HOST,
            service: process.env.SEND_MAIL_SERVICE,
            auth:{
                user: process.env.SEND_MAIL_USER,
                pass: process.env.SEND_MAIL_PASS,    
            }
        })
    }

    async registerMail(
        to: string,
        subject: string,
        nume: string,
        dataEveniment: string,
        oraEveniment: string,
        locatieEveniment: string,
    ): Promise<boolean>{
        const html = `<!doctype html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Aleargă pentru Viață - Ediția a XV-a</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #081043; padding: 30px; border-radius: 10px; border: 4px solid #081043;">
            <div style="text-align: center;">
                    <a href="https://ibb.co/g9SP8mx"><img src="https://i.ibb.co/H4txyBj/logo-apv-XV.png" alt="Logo Aleargă pentru Viață" style="max-width: 75%; height: auto; display: inline-block; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);"></a>
            </div>
            <h1 style="color: #fff; text-align: center; margin-bottom: 30px;">Bună, ${nume}!</h1>
            <p style="color: #fff; text-align: center; font-size: 16px;">Îți mulțumim că te-ai înscris la "Aleargă pentru Viață", ediția a XV-a!</p>
            <div style="background-color: #2E86AA; padding: 15px; border-radius: 5px; margin-top: 30px; margin-bottom: 30px;">
                <h2 style="color: #fff; font-size: 18px; margin-top: 0;">Detalii eveniment:</h2>
                <p style="color: #fff;" ><strong style="color: #fff;">Data:</strong> ${dataEveniment}</p>
                <p style="color: #fff;" ><strong style="color: #fff;">Ora:</strong> ${oraEveniment}</p>
                <p style="color: #fff;" ><strong style="color: #fff;">Locație:</strong> ${locatieEveniment}</p>
                <p style="color: #fff;" ><strong>Te rugăm să aduci:</strong></p>
                <ul style="margin: 0; padding-left: 20px; color: #fff;">
                    <li>Șapcă</li>
                    <li>Sticlă cu apă</li>
                    <li>Îmbrăcăminte și încălțăminte sport confortabilă</li>
                </ul>
            </div>
            <p style="color: #fff; text-align: center; font-size: 16px;">Te rugăm să fii prezent cu 30 de minute înainte de începerea cursei la care te-ai înscris.</p>
            <p style="color: #fff; text-align: center; font-size: 16px;">Vom alerga împreună pentru o cauză nobilă!</p>
            <p style="color: #fff; text-align: center; font-size: 16px;">Cu drag,</p>
            <p style="color: #fff; text-align: center; font-size: 16px;">Echipa "Aleargă Pentru Viață"</p>
            <p style="color: #fff; text-align: center; font-size: 16px; margin-bottom: 0;"><a href="https://apv.lsebucuresti.org/" style="text-decoration: none; color: #007bff;">https://apv.lsebucuresti.org/</a></p>
        </div>
        </body>
        </html>`;

        const inlineHtml = juice(html);

        try {
            await this.transporter.sendMail({
                from: process.env.SEND_MAIL_USER,
                to,
                subject,
                html: inlineHtml,
            });

            return true;
        } catch (error) {
            console.error("Error sending email:", error);
            return false;
        } 
    }

    async sendRaceCompletionEmail(
        to: string,
        subject: string,
        nume: string,
        cursa: string,
        minuteAlergate: string
    ){
        const html = `<!doctype html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Aleargă pentru Viață - Ediția a XV-a</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #081043; padding: 30px; border-radius: 10px; border: 4px solid #081043;">
            <div style="text-align: center;">
                    <a href="https://ibb.co/g9SP8mx"><img src="https://i.ibb.co/H4txyBj/logo-apv-XV.png" alt="Logo Aleargă pentru Viață" style="max-width: 75%; height: auto; display: inline-block; box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);"></a>
            </div>
            <h1 style="color: #fff; text-align: center; margin-bottom: 20px;">Felicitari, ${nume}!</h1>
            <p style="color: #fff; text-align: center; font-size: 14px;">Detalii ${cursa}, ediția a XV-a!</p>
            <div style="background-color: #2E86AA; padding: 15px; border-radius: 5px; margin-top: 30px; margin-bottom: 30px; text-align: center;">
            <h2 style="color: #fff; font-size: 18px; margin-top: 0;">Ai terminat ${cursa} în ${minuteAlergate} de minute!</h2>
        </div>        
            <p style="color: #fff; text-align: center; font-size: 16px;">Iti multumim ca ai alergat alaturi de noi pentru o cauză nobilă!</p>
            <p style="color: #fff; text-align: center; font-size: 16px;">Cu drag,</p>
            <p style="color: #fff; text-align: center; font-size: 16px;">Echipa "Aleargă Pentru Viață"</p>
            <p style="color: #fff; text-align: center; font-size: 16px; margin-bottom: 0;"><a href="https://apv.lsebucuresti.org/" style="text-decoration: none; color: #007bff;">https://apv.lsebucuresti.org/</a></p>
        </div>
        </body>
        </html>`;

        const inlineHtml = juice(html);

        
        try {
            await this.transporter.sendMail({
                from: process.env.SEND_MAIL_USER,
                to,
                subject,
                html: inlineHtml,
            });

            return true;
        } catch (error) {
            console.error("Error sending email:", error);
            return false;
        } 
    }

}