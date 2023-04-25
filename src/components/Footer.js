import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function Footer (props) {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>{ new Date().getFullYear() } &copy;</span>
                <div className="flex items-center">
                    Build with
                    <span className="text-primary text-2xl px-1">
                        &hearts;
                    </span>
                    <Link href="/">One</Link>
                </div>
                <Link href="/">Two</Link>
            </Layout>
        </footer>
    );
}

export default Footer;
