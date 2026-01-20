import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "neha.patel@example.com",
    fullName: "Neha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "anjali.verma@example.com",
    fullName: "Anjali Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "pooja.iyer@example.com",
    fullName: "Pooja Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "kavya.reddy@example.com",
    fullName: "Kavya Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "sneha.kulkarni@example.com",
    fullName: "Sneha Kulkarni",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "aishwarya.joshi@example.com",
    fullName: "Aishwarya Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "shruti.mehta@example.com",
    fullName: "Shruti Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "amit.patil@example.com",
    fullName: "Amit Patil",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "rohit.verma@example.com",
    fullName: "Rohit Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "sachin.naik@example.com",
    fullName: "Sachin Naik",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "vikram.singh@example.com",
    fullName: "Vikram Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "manish.gupta@example.com",
    fullName: "Manish Gupta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "arjun.malhotra@example.com",
    fullName: "Arjun Malhotra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
    {
    email: "arjun@example.com",
    fullName: "Arjun Malhotra",
    password: "123456",
  },


];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("🇮🇳 Database seeded successfully with Indian users");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
