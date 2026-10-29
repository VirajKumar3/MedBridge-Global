import { BreatheWithMe } from "@/components/games/BreatheWithMe";
import { HydrationChallenge } from "@/components/games/HydrationChallenge";
import { LungCapacityChallenge } from "@/components/games/LungCapacityChallenge";
import { ArrowDown, Leaf, Clock3 } from "lucide-react";
import styles from "./wellness.module.css";

export const metadata = {
  title: "Health Games | MedBridge Global",
  description: "A little space to breathe, build daily habits, and find your rhythm.",
};

export default function HealthGamesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div>
          <div className={styles.eyebrow}><Leaf size={15} /> YOUR DAILY RESET</div>
          <h1>A little pause.<br /><span>A healthier you.</span></h1>
          <p>Step away from the busy. Breathe a little deeper, grow a daily habit, and find your rhythm — at your own pace.</p>
        </div>
        <div className={styles.heroNote}><span className={styles.noteIcon}><Clock3 size={22} /></span><strong>Small moments. Lasting habits.</strong><p>No pressure. No leaderboard.<br />Just a few minutes for yourself.</p><a href="#activities">Find your moment <ArrowDown size={16} /></a></div>
      </header>
      <section id="activities" className={styles.activities} aria-label="Wellness activities">
        <div className={styles.sectionHeading}><h2>How would you like to feel?</h2><span>Three simple ways to check in with yourself</span></div>
        <div className={styles.grid}><BreatheWithMe /><HydrationChallenge /><LungCapacityChallenge /></div>
      </section>
      <p className={styles.footnote}><Leaf size={14} /> A little care, every day. Come back whenever you need a moment.</p>
    </div>
  );
}
