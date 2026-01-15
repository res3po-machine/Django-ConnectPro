import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "developer">("client");
  const [error, setError] = useState("");

  // Email / Password register
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1️⃣ Create auth user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    // 2️⃣ Store extra fields in profiles table
    const user = data.user;
    if (user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          username: fullName,
          role: role,
        })
        .eq("id", user.id);

      if (profileError) {
        setError(profileError.message);
        return;
      }
    }

    alert("Account created! Please check your email to confirm.");
    navigate("/login");
  };

  // Google register / login
  const handleGoogleRegister = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Create an account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join thousands of entrepreneurs networking daily
        </p>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="my-6 text-center text-gray-400 text-sm">
          OR CONTINUE WITH
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="john@email.com"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="••••••••"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">I am a</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={role === "client"}
                onChange={() => setRole("client")}
              />
              Client (Looking for developers)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={role === "developer"}
                onChange={() => setRole("developer")}
              />
              Developer (Looking for projects)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
        >
          Create account
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-teal-500 cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
