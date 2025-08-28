import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-4 text-3xl font-bold">🚀 Your Personal Dashboard</h1>
                            <p className="mb-6 text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                A modern web application with user authentication and personalized dashboard experience.
                            </p>
                            
                            <div className="mb-8 space-y-4">
                                <div className="flex items-center justify-center gap-3 text-sm">
                                    <span className="flex items-center gap-2">
                                        🔐 <span>Secure Authentication</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        📊 <span>Personal Dashboard</span>
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-sm">
                                    <span className="flex items-center gap-2">
                                        👤 <span>User Profiles</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        🎨 <span>Modern UI</span>
                                    </span>
                                </div>
                            </div>

                            {!auth.user && (
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center rounded-lg bg-[#f53003] px-6 py-3 text-sm font-medium text-white hover:bg-[#d42a05] transition-colors dark:bg-[#FF4433] dark:hover:bg-[#e03d2f]"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center justify-center rounded-lg border border-[#19140035] px-6 py-3 text-sm font-medium text-[#1b1b18] hover:bg-gray-50 transition-colors dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:bg-[#1a1a1a]"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            )}

                            {auth.user && (
                                <div className="mb-8">
                                    <p className="text-lg mb-4 text-[#1b1b18] dark:text-[#EDEDEC]">
                                        Welcome back, <strong>{auth.user.name}</strong>! 👋
                                    </p>
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-flex items-center justify-center rounded-lg bg-[#f53003] px-6 py-3 text-sm font-medium text-white hover:bg-[#d42a05] transition-colors dark:bg-[#FF4433] dark:hover:bg-[#e03d2f]"
                                    >
                                        Go to Dashboard
                                    </Link>
                                </div>
                            )}
                            <footer className="mt-12 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                Built with ❤️ by{" "}
                                <a 
                                    href="https://app.build" 
                                    target="_blank" 
                                    className="font-medium text-[#f53003] hover:underline dark:text-[#FF4433]"
                                >
                                    app.build
                                </a>
                            </footer>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
