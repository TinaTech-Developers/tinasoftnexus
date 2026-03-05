import User from "../../../../../models/User";
import connectDB from "../../../../../lib/mongodb"; // your mongoose connection

export async function POST(req) {
  await connectDB();

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password required" }),
        { status: 400 },
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Email already registered" }),
        { status: 400 },
      );
    }

    // Create user
    const user = new User({ email, password });
    await user.save();

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 },
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
