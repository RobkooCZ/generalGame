'use client';

// Module Imports
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import RedirectToMap from '@/components/redirectToMap';

export default function titleBody() {
    const { user, error, isLoading } = useUser();
    return (
        <div className="login">
            {(user ? (
                <>
                    <Link href="/api/auth/logout" className="logoutButton button">Logout</Link>
                    <Link href="api/auth/me">
                        <img className='pfp'
                            src={user.picture}
                            alt="profile picture"
                        />
                    </Link>
                    <RedirectToMap/>
                </>
            ) : (
                <>
                    <Link href="/api/auth/login" className="loginButton button">Login</Link>
                    <Link href="/api/auth/login" className="registerButton button">Register</Link>
                </>
            ))}
        </div>
    );
}
