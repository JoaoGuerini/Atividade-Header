"use client";   

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.fifin}>
            <nav className={styles.nav}>
                <div className={styles.teste}>
                    <Image
                        className={styles.Image}
                        src={'/img/file.png'}
                        alt="Logo Png"
                        width={100}
                        height={100}
                    />
                </div>

                <div>
                    <h1 className={styles.titleHeader}>GUERINI</h1>
                </div>

                <div className={styles.navigationMenu} onClick={toggleMenu}>
                    <Image
                        src={isMenuOpen ? '/img/close.png' : '/img/menu-icon.png'}
                        alt={isMenuOpen ? "Close Menu" : "Open Menu"}
                        width={60}
                        height={60}
                    />
                </div>
            </nav>

             <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className={styles.ul}
                        initial={{ right: '-40%' }} 
                        animate={{ right: '0%' }}  
                        exit={{ left: '100%' }} 
                        transition={{ duration: 0.4 }}
                    >
                        <li className={styles.li}><Link href={'/'}>ABOUT</Link></li>
                        <li className={styles.li}><Link href={'/features'}>FEATURES</Link></li>
                        <li className={styles.li}><Link href={'/services'}>SERVICES</Link></li>
                        <li className={styles.li}><Link href={'/membership'}>MEMBERSHIP</Link></li>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
