import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Email / Password login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    localStorage.setItem("token", data.session?.access_token || "");
    navigate("/profile");

  };

  // Google login
  const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/profile",
    },
  });

  if (error) {
    setError(error.message);const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/profile",
    },
  });

  if (error) {
    setError(error.message);
  }
};

  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center">
          <div className="w-12 h-12 rounded-lg mr-3 bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
            CP
          </div>
          <h1 className="text-2xl font-bold mt-2">ConnectPro</h1>
        </div>

        {/* Welcome text */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-semibold">Welcome back</h2>
          <p className="text-gray-500 text-sm">
            Sign in to your account to continue
          </p>
        </div>

        {/* Google button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
        >
          <span className="mr-2 text-lg">G</span>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center text-gray-400 text-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2">OR CONTINUE WITH</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <a
              href="/forgot-password"
              className="text-xs text-teal-500 mt-1 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-500/90 transition"
          >
            Sign in
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-teal-500 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
