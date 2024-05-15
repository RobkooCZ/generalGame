'use client';

// Module Imports
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function titleBody() {
    const { user, error, isLoading } = useUser();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {(user && (
                    <>
                        <li>
                            <Link href="/api/auth/logout">Logout</Link>
                        </li>
                        <li>
                            <Link href="api/auth/me">
                                <img
                                    src={user.picture}
                                    alt="profile picture"
                                />
                            </Link>
                        </li>
                    </>
                )) || (
                    <li>
                        <Link href="/api/auth/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}