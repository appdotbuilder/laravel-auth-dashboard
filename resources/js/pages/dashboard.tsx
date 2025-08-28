import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;

    // Example dashboard data
    const stats = [
        { label: 'Total Sessions', value: '24', icon: '📊', change: '+12%' },
        { label: 'Active Projects', value: '8', icon: '🚀', change: '+3%' },
        { label: 'Messages', value: '47', icon: '💬', change: '+8%' },
    ];

    const recentActivities = [
        { action: 'Logged in', time: '2 minutes ago', icon: '🔐' },
        { action: 'Updated profile', time: '1 hour ago', icon: '👤' },
        { action: 'Created new project', time: '3 hours ago', icon: '🆕' },
        { action: 'Sent message', time: '5 hours ago', icon: '📩' },
        { action: 'Uploaded file', time: '1 day ago', icon: '📁' },
    ];

    const quickActions = [
        { label: 'View Profile', href: '/settings/profile', icon: '👤' },
        { label: 'Change Password', href: '/settings/password', icon: '🔒' },
        { label: 'Appearance Settings', href: '/settings/appearance', icon: '🎨' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Welcome Section */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Welcome back, {user?.name}! 👋
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Here's what's happening with your account today.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">{stat.change} from last month</p>
                                </div>
                                <div className="text-3xl">{stat.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-xl">{activity.icon}</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{activity.action}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            {quickActions.map((action, index) => (
                                <a
                                    key={index}
                                    href={action.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <span className="text-xl">{action.icon}</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{action.label}</span>
                                    <span className="ml-auto text-gray-400">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* User Information Card */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Account Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Name</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">{user?.name}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Member Since</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">
                                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Account Status</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                ✅ Active
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
