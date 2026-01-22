"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#downloads", label: "Download" },
	{ href: "#ranking", label: "Rankings" },
	{ href: "#free-silk", label: "Vote for Silk" },
	{ href: "#buy-silk", label: "Buy Silk" },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-[var(--lycan-dark)]/95 shadow-lg backdrop-blur-md"
					: "bg-transparent"
			}`}
		>
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2">
					
					<Image
						src="/images/name.png"
						alt="Lycan"
						width={100}
						height={30}
						className="hidden drop-shadow-lg sm:block"
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-6 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="font-semibold uppercase text-[var(--foreground)]/80 transition-colors hover:text-[var(--lycan-gold)]"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Auth Buttons */}
				<div
					className={`hidden items-center gap-3 md:flex font-serif ${
						isScrolled && "invisible"
					}`}
				>
					<button
						type="button"
						className="rounded-md px-4 py-2 text-sm font-bold text-[var(--lycan-gold)] hover:bg-[var(--lycan-gold)]/10 transition-all "
					>
						Login
					</button>
					<button
						type="button"
						className="rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] px-4 py-2 text-sm font-bold text-[var(--lycan-dark)] transition-all hover:scale-105"
					>
						Register
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					className="text-[var(--foreground)] md:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="bg-[var(--lycan-dark)]/95 backdrop-blur-md md:hidden">
					<div className="flex flex-col gap-2 px-4 py-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="uppercase font-bold rounded-md px-4 py-3 text-[var(--foreground)]/80 transition-colors hover:bg-[var(--lycan-gold)]/10 hover:text-[var(--lycan-gold)]"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className="mt-4 flex gap-2 border-t border-[var(--border)] pt-4 font-serif">
							<button
								type="button"
								className="cursor-pointer flex-1 rounded-md border border-[var(--lycan-gold)] py-2 text-[var(--lycan-gold)] font-bold"
							>
								Login
							</button>
							<button
								type="button"
								className="cursor-pointer flex-1 rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] py-2 font-bold text-[var(--lycan-dark)]"
							>
								Register
							</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
