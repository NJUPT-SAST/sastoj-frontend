import React, { ReactNode } from "react";
import Footer from "../../components/footer";
import Logo from "../../components/logo";
import styles from './page.module.scss'
import { Navbar } from "@ui-aurora/react";

interface SelectLayoutProps {
    children: ReactNode
}


const SelectLayout: React.FC<SelectLayoutProps> = ({ children }) => {
    return (
        <div className={styles['select-page']}>
            <Navbar
                header={<Logo height={36} />}
                className={styles.navbar}
            />
            <div className={styles['select-content']}>{children}</div>
            <Footer />
        </div>
    )
}

export default SelectLayout