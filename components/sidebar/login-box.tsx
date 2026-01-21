"use client";

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, LogIn, UserPlus, User } from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";

export function LoginBox() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  return (
    <LycanBox title="Account" icon={<User className="h-4 w-4" />} contentClassName="p-0">
      <form onSubmit={handleLogin} className="space-y-3 p-4">
        {/* Username */}
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border border-[var(--border)] bg-[var(--input)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--lycan-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--lycan-gold)]"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-[var(--border)] bg-[var(--input)] px-3 py-2 pr-10 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--lycan-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--lycan-gold)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] py-2 text-sm font-semibold text-[var(--lycan-dark)] transition-all hover:scale-[1.02] hover:shadow-md"
        >
          <LogIn size={16} />
          Login
        </button>

        {/* Register Link */}
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-[var(--lycan-gold)] bg-transparent py-2 text-sm font-medium text-[var(--lycan-gold)] transition-all hover:bg-[var(--lycan-gold)]/10"
        >
          <UserPlus size={16} />
          Create Account
        </button>

        {/* Forgot Password */}
        <p className="text-center text-xs text-[var(--muted-foreground)]">
          <a
            href="#forgot"
            className="hover:text-[var(--lycan-gold)] hover:underline"
          >
            Forgot your password?
          </a>
        </p>
      </form>
    </LycanBox>
  );
}
