import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import AppearanceToggleTab from '@/components/appearance-tabs';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Settings',
        href: '/settings/profile',
    },
    {
        title: 'Appearance',
        href: '/settings/appearance',
    },
];

export default function Appearance() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance Settings" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        🎨 Appearance Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Customize the look and feel of your dashboard.
                    </p>
                </div>

                {/* Theme Settings */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Theme Preferences
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Choose your preferred color scheme for the interface.
                        </p>
                    </div>

                    <AppearanceToggleTab />
                </div>

                {/* Preview Section */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        🖼️ Interface Preview
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Sample Card</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                This is how content cards will appear with your current theme settings.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded dark:bg-blue-800 dark:text-blue-100">
                                    Tag
                                </span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded dark:bg-green-800 dark:text-green-100">
                                    Active
                                </span>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Sample Stats</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Total Users</span>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">1,234</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</span>
                                    <span className="font-medium text-gray-900 dark:text-gray-100">89</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Information */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        ✨ Theme Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">🌞</div>
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Light Mode</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Clean, bright interface perfect for daytime use
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">🌙</div>
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Dark Mode</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Easy on the eyes for low-light environments
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-2xl mb-2">⚡</div>
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Auto Switch</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Follows your system preference automatically
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Quick Settings
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href={route('profile.edit')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            👤 Profile Settings
                        </Link>
                        <Link
                            href={route('password.edit')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            🔒 Change Password
                        </Link>
                        <Link
                            href={route('dashboard')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            📊 Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}