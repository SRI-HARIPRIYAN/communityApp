import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// Fetch blogs
export const fetchBlogs = async ({ queryKey }) => {
	const [key, page] = queryKey;
	const { data } = await axios.get(`${BASE_URL}/events?page=${page}&limit=10`);
	return data;
};

// Fetch events created by user
export const fetchUserEvents = (userId) =>
	axios.get(`${BASE_URL}/events?userId=${userId}`).then((res) => res.data);

export const Fetchevent = (eventId) =>
	axios.get(`${BASE_URL}/events/${eventId}`).then((res) => res.data);

//create a new event
export const createEvent = (formData) =>
	axios.post(`${BASE_URL}/events`, formData, { withCredentials: true }).then((res) => res.data);

//delete event
export const deleteEvent = (eventId) =>
	axios.delete(`${BASE_URL}/events/${eventId}`, { withCredentials: true }).then((res) => res.data);

// Sign up a user
export const SignupData = ({ userName, email, password }) =>
	axios.post(`${BASE_URL}/auth/signup`, { userName, email, password }).then((res) => res.data);

// Log in a user
export const logindata = ({ userName, password }) =>
	axios.post(`${BASE_URL}/auth/login`, { userName, password }).then((res) => res.data);

// Sign out a user
export const signout = () =>
	axios.post(`${BASE_URL}/auth/logout`, {}, { withCredentials: true }).then((res) => res.data);

// Upload profile image
export const uploadImage = (formData) =>
	axios
		.post(`${BASE_URL}/profile/upload`, formData, {
			withCredentials: true,
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
		.then((res) => res.data);

// Update profile data
export const updateProfile = (profile) =>
	axios.put(`${BASE_URL}/profile`, profile, { withCredentials: true }).then((res) => res.data);

// Get the paneldata
export const getPanelData = () =>
	axios.get(`${BASE_URL}/profile`, { withCredentials: true }).then((res) => res.data);

// Fetch comments
export const commentsFetch = (blogId) =>
	axios.get(`${BASE_URL}/comment/getPostComments/${blogId}`).then((res) => res.data);

// Create comment
export const createComment = (comment) =>
	axios
		.post(`${BASE_URL}/comment/create`, comment, { withCredentials: true })
		.then((res) => res.data);

export const getgroups = async (role = "member") => {
	return axios.get(`${BASE_URL}/group?role=${role}`).then((res) => res.data);
};

export const getgroupInfo = async (groupId) => {
	return axios.get(`${BASE_URL}/group/${groupId}`);
};

export const fetchChat = async (groupid) => {
	return axios.get(`${BASE_URL}/message/${groupid}`);
};

//attendance endpoints
export const getAttendances = async (eventId) => {
	return axios.get(`${BASE_URL}/attendance/${eventId}`).then((res) => res.data);
};
export const checkAttendance = async ({ eventId, decodedText }) => {
	const response = await axios.post(`${BASE_URL}/attendance/scan/${eventId}`, decodedText);
	return response.data;
};

export const request = async (data) => {
	return axios.post(`${BASE_URL}/group/request`, data, { withCredentials: true });
};

export const getGroupJoinRequests = async () => {
	return axios
		.get(`${BASE_URL}/group/r/request`, { withCredentials: true })
		.then((res) => res.data);
};

export const approve = async (data) => {
	return axios.post(`${BASE_URL}/group/approve`, data, { withCredentials: true });
};

export const updateLike = (eventId) => {
	axios.post(`${BASE_URL}/like/${eventId}`);
};

export const getGroupByEventId = (eventId) =>
	axios
		.get(`${BASE_URL}/group/byEvent/${eventId}`, { withCredentials: true })
		.then((res) => res.data);

export const getAppliedEvents = (eventId) =>
	axios.get(`${BASE_URL}/payment/${eventId}`, { withCredentials: true }).then((res) => res.data);

export const updateEvent = (formData, eventId) =>
	axios
		.put(`${BASE_URL}/events/${eventId}`, formData, { withCredentials: true })
		.then((res) => res.data);

export const fetchRoles = () => axios.get(`${BASE_URL}/auth/check-role`).then((res) => res.data);

export const sendMessage = (message, groupId) =>
	axios.post(`${BASE_URL}/message/send`, { message, groupId }, { withCredentials: true });

export const setCookie = () =>
	axios.get(`${BASE_URL}/test-cookie`, {
		withCredentials: true,
	});
