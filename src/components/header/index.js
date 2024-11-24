"use client"; // Adicione essa linha no topo do arquivo

import { useState } from "react";
import { motion } from "framer-motion";
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
                <Image
                    className={styles.Image}
                    src={'/img/file.png'}
                    alt="Logo Png"
                    width={100}
                    height={100}/>

                    {isMenuOpen && (
                        <motion.div
                            className={styles.modal}
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5 }}>
                                
                            <ul className={`${styles.ul} ${isMenuOpen ? styles.open : ''}`}>
                                <li className={styles.li}><Link href={'/about'}>ABOUT</Link></li>
                                <li className={styles.li}><Link href={'/features'}>FEATURES</Link></li>
                                <li className={styles.li}><Link href={'/services'}>SERVICES</Link></li>
                                <li className={styles.li}><Link href={'/membership'}>MEMBERSHIP</Link></li>
                            </ul>
                        </motion.div>
                    )}

                <div className={styles.joinNow}>
                    joinNow
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
        </header>
    );
}
