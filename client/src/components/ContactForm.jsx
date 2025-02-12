import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner.jsx";
import { toast } from "react-toastify";
const ContactForm = () => {
	const [from_name, setFromName] = useState("");
	const [from_email, setFromEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		if (!from_name.trim() || !from_email.trim() || !message.trim()) {
			toast.info("Please fill all details");
			return;
		}
		setLoading(true);
		emailjs
			.send(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				{
					to_name: "Alcognerd",
					from_name: from_name,
					from_email: from_email,
					message: message,
					reply_to: from_email,
				},
				{
					publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					toast.success("Email sent");
					console.log("SUCCESS!");
				},
				(error) => {
					toast.error("Unable to send email. Please try again later");
					console.log("FAILED...", error);
				}
			);
		setFromName("");
		setFromEmail("");
		setMessage("");
		setLoading(false);
	};
	return (
		<div className="sm:w-1/2 md:max-w-[300px]">
			<h2 className="text-center font-semibold text-lg md:text-2xl text-blue-400 my-4">
				📧 Email Support
			</h2>
			<form onSubmit={sendEmail} className="  flex flex-col gap-5 rounded-lg backdrop-blur-md ">
				<div className="flex flex-col gap-2 ">
					<label htmlFor="name" className="font-semibold ">
						User name
					</label>
					<input
						className="bg-black bg-opacity-50 border-2 border-black focus:border-blue-400  hover:border-blue-400  outline-none transition duration-200 rounded-md h-10 pl-2"
						type="text"
						name="from_name"
						id="name"
						placeholder="username"
						value={from_name}
						onChange={(e) => setFromName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="font-semibold">
						E-mail
					</label>
					<input
						className="bg-black bg-opacity-50 border-2 border-black focus:border-blue-400  hover:border-blue-400 outline-none transition duration-200 rounded-md h-10 pl-2"
						type="email"
						name="from_email"
						id="email"
						placeholder="me@email.com"
						value={from_email}
						onChange={(e) => setFromEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-semibold" htmlFor="message">
						Message
					</label>
					<textarea
						className="bg-black bg-opacity-50 border-2 border-black focus:border-blue-400  hover:border-blue-400 outline-none transition duration-200 rounded-md min-h-10  pl-2 py-2 "
						name="message"
						id="message"
						placeholder="Your feedback / complaint"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<button
					type="submit"
					disabled={loading}
					className={` w-fit mx-auto  text-white  px-4 py-1 rounded-md bg-blue-700 hover:bg-blue-600 transition `}
				>
					{loading ? <Spinner /> : "Send"}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
