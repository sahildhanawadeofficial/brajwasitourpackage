import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server'; // Import NextResponse for API routes

export async function POST(req) { // Use 'export async function POST' for App Router

    try {
        const body = await req.json(); // Get the JSON body from the request

        // Validate that the body is an object and not empty, if desired
        if (!body || typeof body !== 'object' || Object.keys(body).length === 0) {
            return NextResponse.json({ error: "Request body cannot be empty or invalid." }, { status: 400 });
        }

        // Format the key-value pairs from the body into a readable string
        const emailText = Object.entries(body)
            .map(([key, val]) => `${key}: ${val}`) // Format each key-value pair as "key: value"
            .join('\n'); // Join them with newlines for readability in the email

        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can use other services or direct SMTP configuration
            auth: {
                user: process.env.FROM_EMAIL, // Use a more descriptive name, e.g., FROM_EMAIL
                pass: process.env.EMAIL_PASS // Use a more descriptive name, e.g., EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: `${process.env.TO_EMAIL},${process.env.TO_SAHIL_EMAIL}`, // Assuming multiple recipients
            subject: 'New Contact Form Submission',
            text: `A new submission has been received:\n\n${emailText}` // Include a brief intro for context
        };

        await transporter.sendMail(mailOptions);

        // Use NextResponse.json for sending JSON responses in Next.js App Router
        return NextResponse.json({ message: "Thank you for your message! We'll be connecting with you very soon." }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        // Provide a more user-friendly error message if possible
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
    }
}