import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const sampleProducts = [
	{
		name: "Classic Blue Jeans",
		description: "Comfortable and stylish blue jeans perfect for everyday wear",
		price: 79.99,
		image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
		category: "jeans",
		isFeatured: true,
	},
	{
		name: "Slim Fit Jeans",
		description: "Modern slim fit jeans with premium denim fabric",
		price: 89.99,
		image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
		category: "jeans",
		isFeatured: false,
	},
	{
		name: "Cotton T-Shirt",
		description: "Soft cotton t-shirt available in multiple colors",
		price: 24.99,
		image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
		category: "t-shirts",
		isFeatured: true,
	},
	{
		name: "Graphic Tee",
		description: "Trendy graphic t-shirt with unique design",
		price: 29.99,
		image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500",
		category: "t-shirts",
		isFeatured: false,
	},
	{
		name: "Running Shoes",
		description: "Lightweight running shoes for optimal performance",
		price: 129.99,
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
		category: "shoes",
		isFeatured: true,
	},
	{
		name: "Casual Sneakers",
		description: "Comfortable casual sneakers for daily wear",
		price: 89.99,
		image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
		category: "shoes",
		isFeatured: false,
	},
	{
		name: "Sunglasses",
		description: "Stylish sunglasses with UV protection",
		price: 59.99,
		image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
		category: "glasses",
		isFeatured: true,
	},
	{
		name: "Reading Glasses",
		description: "Comfortable reading glasses with anti-glare coating",
		price: 39.99,
		image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500",
		category: "glasses",
		isFeatured: false,
	},
	{
		name: "Winter Jacket",
		description: "Warm winter jacket with water-resistant fabric",
		price: 199.99,
		image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
		category: "jackets",
		isFeatured: true,
	},
	{
		name: "Denim Jacket",
		description: "Classic denim jacket for layering",
		price: 89.99,
		image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
		category: "jackets",
		isFeatured: false,
	},
	{
		name: "Business Suit",
		description: "Professional business suit for formal occasions",
		price: 399.99,
		image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
		category: "suits",
		isFeatured: true,
	},
	{
		name: "Casual Suit",
		description: "Comfortable casual suit for semi-formal events",
		price: 299.99,
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
		category: "suits",
		isFeatured: false,
	},
	{
		name: "Leather Handbag",
		description: "Premium leather handbag with multiple compartments",
		price: 149.99,
		image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
		category: "bags",
		isFeatured: true,
	},
	{
		name: "Canvas Backpack",
		description: "Durable canvas backpack for everyday use",
		price: 69.99,
		image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
		category: "bags",
		isFeatured: false,
	},
];

const seedDatabase = async () => {
	try {
		await connectDB();
		
		// Clear existing products
		await Product.deleteMany({});
		console.log("Cleared existing products");
		
		// Insert sample products
		await Product.insertMany(sampleProducts);
		console.log("Sample products inserted successfully");
		
		console.log("Database seeded successfully!");
		process.exit(0);
	} catch (error) {
		console.error("Error seeding database:", error);
		process.exit(1);
	}
};

seedDatabase();