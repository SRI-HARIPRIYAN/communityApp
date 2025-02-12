import React from "react";
import Header from "../components/Header.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
const About = () => {
	return (
		<div className="text-white min-h-screen p-2">
			<Header />
			<section className="p-4 text-center flex flex-col gap-3 ">
				<h1 className="font-bold text-3xl sm:text-[32px] md:text-[40px] text-blue-400">
					About Us
				</h1>
				<p className="text-sm sm:text-[16px] ">
					Welcome to <span className="font-bold text-green-400 text-lg">Alcognerd</span>, your
					all-in-one event management platform designed to simplify planning, organizing, and
					executing events seamlessly.
				</p>
			</section>
			<hr className="w-3/5 md:w-2/5 mx-auto opacity-55 my-7 md:my-10 border-gray-400 border-[1.5px]" />
			<section className="px-4 pt-2 text-center flex flex-col gap-3">
				<h2 className="font-bold text-3xl sm:text-[32px] md:text-[40px] text-blue-400">
					Our Mission
				</h2>
				<p className="text-sm mb-4 sm:text-[16px]">
					We aim to empower event organizers, businesses, and individuals by providing an
					intuitive, feature-rich platform that makes event planning effortless.
				</p>
				<p className="text-sm pb-4  sm:text-[16px]">
					From ticket booking to attendee management, we streamline the process so you can
					focus on creating memorable experiences.
				</p>
			</section>
			<hr className="w-3/5 md:w-2/5 mx-auto opacity-55 my-7 md:my-10 border-gray-400 border-[1.5px]" />
			<section className="pt-4">
				<div className="text-center">
					<h2 className="font-bold text-2xl mb-3 sm:mb-5 sm:text-[40px] text-blue-400">
						What We Offer
					</h2>
				</div>
				<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Seamless Event Creation
						</h3>
						<p className="text-sm">Organize public or private events with ease.</p>
					</article>
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Secure Online Payments
						</h3>
						<p className="text-sm">
							Integrated payment gateway for hassle-free transactions.
						</p>
					</article>
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Real-time Attendance Tracking
						</h3>
						<p className="text-sm">QR-based check-ins for smooth event entry.</p>
					</article>
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Task & Team Management
						</h3>
						<p className="text-sm">Assign roles and track progress effortlessly. </p>
					</article>
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Customizable Event Pages
						</h3>
						<p className="text-sm">Showcase your event with stunning visuals and details.</p>
					</article>
					<article className="flex flex-col items-center group text-center gap-2 sm:gap-4 border-gray-400 border-2 rounded-md p-2 sm:p-6 bg-gray-500 hover:bg-gray-600 transition">
						<h3 className="font-semibold group-hover:underline group-hover:transition">
							✅ Free to edit
						</h3>
						<p className="text-sm">Edit all the data you have created.</p>
					</article>
				</div>
			</section>
			<section className="text-lg font-mono text-center my-7 md:my-10 sm:text-2xl">
				<p>Join us and take your events to the next level with Alcognerd </p>
			</section>
			<section className="flex flex-col gap-4 justify-center">
				<h2 className="font-bold text-center text-3xl sm:text-[32px] md:text-[40px] text-blue-400">
					Contact Us
				</h2>

				<p className="text-sm text-center md:text-lg">
					We’d love to hear from you! Whether you have questions, feedback, or need assistance,
					feel free to reach out.
				</p>
				<div className="flex flex-col sm:flex-row justify-around p-2 my-3 gap-8">
					<div className="opacity-75 flex flex-col gap-4">
						<h3>🌐 Follow Us on Social Media</h3>
						<p>
							🔹 <FaLinkedin className="inline" />{" "}
							<a href="https://www.google.com" target="_blank">
								/alcognerd
							</a>
						</p>
						<h3 className="pl-1 mt-3">
							<MdOutlineSupportAgent className="inline text-blue-300 text-lg " />
							<span className="pl-2">Support</span>
						</h3>
						<p>🔹📩 help.alcognerd@gmail.com</p>
					</div>
					<ContactForm />
				</div>
			</section>
			<div className="p-3 sm:text-[16px] text-center my-4">
				We're here to help and make your event management experience smoother than ever! --- Let
				me know if you need modifications or additional details!
			</div>
			<div className="text-center text-sm my-4">
				<p>&copy;alcognerd-2025 All rights reserved</p>
			</div>
		</div>
	);
};

export default About;
