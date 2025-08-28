import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type User } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import InputError from '@/components/input-error';



interface Props {
    user: User;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Settings',
        href: '/settings/profile',
    },
    {
        title: 'Profile',
        href: '/settings/profile',
    },
];

export default function Profile({ user }: Props) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile Settings" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        👤 Profile Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your account information and email preferences.
                    </p>
                </div>

                {/* Profile Information Form */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Profile Information
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Update your account's profile information and email address.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    autoComplete="name"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoComplete="username"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                        </div>

                        {user.email_verified_at === null && (
                            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg dark:bg-yellow-900/20 dark:border-yellow-800">
                                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="underline text-yellow-600 hover:text-yellow-500 dark:text-yellow-400"
                                    >
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Saving...' : 'Save Changes'}
                            </Button>

                            {recentlySuccessful && (
                                <p className="text-sm text-green-600 dark:text-green-400">
                                    ✅ Saved successfully!
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {/* Account Overview */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Account Overview
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Account ID</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">#{user.id}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Member Since</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">
                                {user.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                }) : 'N/A'}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email Status</p>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                user.email_verified_at 
                                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                            }`}>
                                {user.email_verified_at ? '✅ Verified' : '⚠️ Unverified'}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Last Updated</p>
                            <p className="text-base text-gray-900 dark:text-gray-100">
                                {user.updated_at ? new Date(user.updated_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                }) : 'N/A'}
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
                            href={route('password.edit')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            🔒 Change Password
                        </Link>
                        <Link
                            href={route('appearance')}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            🎨 Appearance
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