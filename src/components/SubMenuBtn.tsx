import { AnimatePresence, motion } from "framer-motion";
import type { navLinkType } from "../types/homepage-types";
import { useBoolStateHook } from "../hooks/useBoolStateHook";
import KeyDown from "./icons/KeyDown";
import KeyUp from "./icons/KeyUp";

export function SubMenuBtn({ item }: { item: navLinkType }) {
  console.log(item);
  const { label, submenu } = item;
  const { state: subMenuOpen, onClick: toggleSubmenu } =
    useBoolStateHook(false);
  return (
    <li className="submenu-li">
      <a className="submenu-item" onClick={toggleSubmenu}>
        {label}
        {subMenuOpen ? <KeyUp /> : <KeyDown />}
      </a>
      <AnimatePresence>
        {subMenuOpen && (
          <motion.ul className="submenu">
            {submenu?.subMenuItems.map((i, idx) => (
              <li key={idx}>
                <a href={i.link}>{i.label}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
