"use client";

import {
	Castle,
	Crown,
	GitGraphIcon,
	ExternalLink,
	Users,
} from "lucide-react";
import { LycanBox } from "@/components/ui/lycan-box";
import Image from "next/image";

interface FortressWar {
	owner: string;
	ownerId: number;
	points: number;
	fortressWon: number;
}
interface ServerStatus {
	mode: "Online" | "Offline";
	players: number;
}
interface DiscordServer {
	members: number;
	online: number;
}
const fortressWar: FortressWar[] = [
	{
		owner: "Legends",
		ownerId: 1420,
		points: 23412,
		fortressWon: 3,
	},
];
const serverStatus: ServerStatus[] = [
	{
		mode: "Online",
		players: 623,
	},
];
const discordServer: DiscordServer[] = [
	{
		members: 3542,
		online: 538,
	},
];
type DiscordIconProps = {
	styles?: string;
};
const DiscordIcon = ({ styles }: DiscordIconProps) => (
	<svg className={styles} viewBox="0 0 24 24" fill="currentColor">
		<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
	</svg>
);

export function StatsBox() {
	return (
		<LycanBox
			title="Lycan Stats"
			icon={<GitGraphIcon className="h-4 w-4" />}
			contentClassName="px-5"
		>
			{/* Three-column layout */}
			<div className="grid gap-6 lg:grid-cols-12 font-sans">
				{/* Online Stats */}
				<div className="space-y-6 lg:col-span-4 border-r px-4 py-0">
					<div className="mb-0 flex items-center justify-center gap-4 rounded-lg">
						<div className="text-center">
							<p className="text-2xl font-semibold text-[var(--lycan-success)]">
								{serverStatus[0].mode.toUpperCase()}
							</p>
							<p className="text-xs text-[var(--muted-foreground)] font-serif font-semibold">
								Status
							</p>
						</div>
						<div className="h-8 w-px bg-[var(--border)]" />
						<GitGraphIcon className="h-12 w-12 text-[var(--lycan-white)]" />
						<div className="h-8 w-px bg-[var(--border)]" />
						<div className="text-center">
							<p className="text-2xl font-semibold text-[var(--lycan-success)]">
								{serverStatus[0].players}
							</p>
							<p className="text-xs text-[var(--muted-foreground)] font-serif font-semibold">
								Online
							</p>
						</div>
					</div>

					{/* Join Button */}
					<div className="mt-4 flex gap-2 p-0">
						<button
							type="button"
							className="font-bold font-serif flex-1 rounded-md border border-[var(--lycan-gold)] py-2 text-[var(--lycan-gold)] transition-colors hover:bg-[var(--lycan-gold)]/10"
						>
							Login
						</button>
						<button
							type="button"
							className="font-serif flex-1 rounded-md bg-gradient-to-r from-[var(--lycan-gold)] to-[var(--lycan-orange)] py-2 font-bold text-[var(--lycan-dark)]  transition-all hover:scale-105"
						>
							Register
						</button>
					</div>
				</div>

				{/* Fortress War */}
				<div className="space-y-6 lg:col-span-4 border-r px-4 mb-0">
					<div className="p-0 divide-y divide-[var(--border)]">
						<div
							key="Jangan Fortress"
							className="flex items-center gap-3 p-0 transition-colors hover:bg-[var(--lycan-card-hover)]"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--lycan-gold)]/20 to-[var(--lycan-orange)]/20">
								<Castle className="h-8 w-8 text-[var(--lycan-gold)]" />
							</div>
							<div className="flex-1 min-w-0 mb-0">
								
												 
								<span className="text-sm font-medium font-serif uppercase text-[var(--foreground)] truncate">
									Jangan Fortress
								</span>
								<div className="flex items-center gap-1 font-semibold">
									<Crown className="h-4 w-4 text-[var(--lycan-gold)]" />
									<span className="text-xs font-medium font-serif text-[var(--foreground)] truncate">
										Guild:
									</span>
									<span className="text-xs text-[var(--lycan-gold)] truncate py-1">
										[{fortressWar[0].owner}]
									</span>
									
								</div>
							</div>
						</div>
					</div>

					{/* Next War Timer */}
					<div className="border-t border-[var(--border)] bg-[var(--lycan-dark)]/50 px-3 pt-2">
						<div className="flex items-center justify-between">
							<span className="text-xs text-[var(--muted-foreground)]">
								Next Fortress:
							</span>
							<span className="font-mono text-sm font-medium text-[var(--lycan-gold)]">
								2D : 17H : 51M : 27S
							</span>
						</div>
					</div>
				</div>

				{/* Discord Stats */}
				<div className="space-y-6 lg:col-span-4">
					{/* Online Stats */}
					<div className="mb-4 flex items-center justify-center gap-4 rounded-lg p-0">
						<div className="text-center">
							<p className="text-2xl font-bold text-[var(--lycan-gold)]">
								{discordServer[0].members}
							</p>
							<p className="text-xs text-[var(--muted-foreground)] font-serif font-semibold">
								Members
							</p>
						</div>
						<div className="h-8 w-px bg-[var(--border)]" />
						<DiscordIcon styles="h-12 w-12 text-[var(--lycan-white)]" />
						<div className="h-8 w-px bg-[var(--border)]" />
						<div className="text-center">
							<p className="text-2xl font-bold text-[var(--lycan-success)]">
								{discordServer[0].online}
							</p>
							<p className="text-xs text-[var(--muted-foreground)] font-serif font-semibold">
								Online
							</p>
						</div>
					</div>

					{/* Join Button */}
					<a
						href="https://discord.gg/lycan"
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-full font-serif uppercase font-semibold items-center justify-center gap-2 rounded-md bg-[#5865F2] py-2.5 text-sm  text-white transition-all hover:bg-[#4752C4] hover:scale-[1.02]"
					>
						<Users size={16} />
						Join Discord
						<ExternalLink size={14} />
					</a>
				</div>
			</div>
		</LycanBox>
	);
}
