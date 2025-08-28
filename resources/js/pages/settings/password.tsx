import { FormEventHandler, useRef } from 'react';
import { useForm } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Settings',
        href: '/settings/profile',
    },
    {
        title: 'Password',
        href: '/settings/password',
    },
];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, put, errors, processing, recentlySuccessful, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Password Settings" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        🔒 Password Settings
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Update your account password to keep your account secure.
                    </p>
                </div>

                {/* Change Password Form */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            Update Password
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Ensure your account is using a long, random password to stay secure.
                        </p>
                    </div>

                    <form onSubmit={updatePassword} className="space-y-6">
                        <div>
                            <Label htmlFor="current_password">Current Password</Label>
                            <Input
                                id="current_password"
                                ref={currentPasswordInput}
                                type="password"
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                                autoComplete="current-password"
                            />
                            <InputError message={errors.current_password} className="mt-2" />
                        </div>

                        <div>
                            <Label htmlFor="password">New Password</Label>
                            <Input
                                id="password"
                                ref={passwordInput}
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                autoComplete="new-password"
                            />
                            <InputError message={errors.password} className="mt-2" />
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Password must be at least 8 characters long.
                            </p>
                        </div>

                        <div>
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                autoComplete="new-password"
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between">
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Updating...' : 'Update Password'}
                            </Button>

                            {recentlySuccessful && (
                                <p className="text-sm text-green-600 dark:text-green-400">
                                    ✅ Password updated successfully!
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {/* Security Tips */}
                <div className="bg-white rounded-xl border border-sidebar-border/70 p-6 dark:bg-sidebar dark:border-sidebar-border">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        🛡️ Password Security Tips
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-green-500">✓</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Use at least 8 characters
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500">✓</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Include uppercase and lowercase letters
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-500">✓</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Include numbers and special characters
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-red-500">✗</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Don't use personal information
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-500">✗</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Don't reuse passwords from other sites
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-red-500">✗</span>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Don't use common dictionary words
                                </p>
                            </div>
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