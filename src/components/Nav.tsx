"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import FlipLink from "@/utils/FlipLink";
import Link from "next/link";
import { link } from "fs";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Work", path: "/work" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Nav = () => {
  return (
    <nav className=" ">
      <SlideTabs />
    </nav>
  );
};

const SlideTabs = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    const currentLink = links.find((link) => link.path === pathname);
    if (currentLink) {
      setActiveTab(currentLink.id);
    }
  }, [pathname]);

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
        setHoveredId(null);
      }}
      className="relative mx-auto flex "
    >
      {links.map((link) => (
        <Link href={link.path} key={link.id}>
          <Tab
            setPosition={setPosition}
            onMouseEnter={() => setHoveredId(link.id)}
            onClick={() => setActiveTab(link.id)}
            isActive={activeTab === link.id}
          >
            <div className="py-1.5 relative">
              <FlipLink href={link.path} isHovered={hoveredId === link.id}>
                {link.name}
              </FlipLink>
            </div>
            {activeTab === link.id && (
              <div className="absolute inset-0 rounded-full bg-accent" />
            )}
          </Tab>
        </Link>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
  onMouseEnter,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
  onMouseEnter: () => void;
  onClick: () => void;
  isActive: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [isActive, setPosition]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
        onMouseEnter();
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer py-1.5 text-xs text-white md:px-4 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-accent md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export default Nav;
