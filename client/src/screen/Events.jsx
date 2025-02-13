import { ToastContainer } from "react-toastify";
import EventList from "../components/EventList";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { setCookie } from "../services/api";
const Events = () => {
	const handleCookie = async (e) => {
		e.preventDefault();
		const res = await setCookie();
		console.log(res);
	};
	return (
		<div className="w-full h-screen">
			<Header />
			<button onClick={handleCookie}>Test cookie</button>
			<section>
				<EventList />
				<ScrollToTop />
			</section>
			<ToastContainer />
		</div>
	);
};
export default Events;
