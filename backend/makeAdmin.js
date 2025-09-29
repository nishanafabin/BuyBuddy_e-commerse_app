import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const makeUserAdmin = async (email) => {
	try {
		await connectDB();
		
		const user = await User.findOne({ email: email });
		
		if (!user) {
			console.log(`User with email ${email} not found`);
			process.exit(1);
		}
		
		user.role = "admin";
		await user.save();
		
		console.log(`User ${email} has been made an admin successfully!`);
		console.log(`User details:`, {
			name: user.name,
			email: user.email,
			role: user.role
		});
		
		process.exit(0);
	} catch (error) {
		console.error("Error making user admin:", error);
		process.exit(1);
	}
};

// Get email from command line arguments
const email = process.argv[2];

if (!email) {
	console.log("Please provide an email address");
	console.log("Usage: node backend/makeAdmin.js your-email@example.com");
	process.exit(1);
}

makeUserAdmin(email);