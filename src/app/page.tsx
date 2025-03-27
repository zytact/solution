'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Fingerprint,
    QrCode,
    MessageSquare,
    Bell,
    Lock,
    Globe,
    CheckCircle2,
    MapPin,
    Clock,
    Calendar,
    HelpCircle,
    ChevronRight,
    Search,
    ArrowRight,
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function Home() {
    const signin = async () => {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: '/dashboard',
        });
    };
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold text-secondary">
                            VoteVerify
                        </span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-neutral-500 hover:text-primary"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-medium text-neutral-500 hover:text-primary"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#live-status"
                            className="text-sm font-medium text-neutral-500 hover:text-primary"
                        >
                            Live Status
                        </Link>
                        <Link
                            href="#faq"
                            className="text-sm font-medium text-neutral-500 hover:text-primary"
                        >
                            FAQ
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            Admin Login
                        </Button>
                        <Button
                            className="bg-success hover:bg-green-600"
                            onClick={signin}
                        >
                            Start Verification
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-700">
                                    Faster & Secure Voting
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter text-secondary sm:text-5xl xl:text-6xl/none">
                                        Automated Voter Verification System
                                    </h1>
                                    <p className="max-w-[600px] text-neutral-500 md:text-xl">
                                        Secure, fast, and transparent voting
                                        with blockchain technology and biometric
                                        verification. No more long lines or
                                        identity concerns.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button
                                        size="lg"
                                        className="bg-success hover:bg-green-600"
                                        onClick={signin}
                                    >
                                        Start Verification
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-primary text-primary hover:bg-primary hover:text-white"
                                    >
                                        Admin Login
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="flex -space-x-2">
                                        <div className="inline-block h-8 w-8 rounded-full bg-green-100 ring-2 ring-white"></div>
                                        <div className="inline-block h-8 w-8 rounded-full bg-green-200 ring-2 ring-white"></div>
                                        <div className="inline-block h-8 w-8 rounded-full bg-green-300 ring-2 ring-white"></div>
                                    </div>
                                    <div className="text-neutral-500">
                                        Trusted by{' '}
                                        <span className="font-medium text-secondary">
                                            5+ million
                                        </span>{' '}
                                        voters
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-[500px]">
                                    <Image
                                        src="/images/verification-process.png"
                                        width={500}
                                        height={500}
                                        alt="Voter verification process illustration"
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="h-3 w-3 rounded-full bg-success animate-pulse"></div>
                                            <span className="text-xs font-medium text-secondary">
                                                Verification in progress
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section
                    id="features"
                    className="w-full py-12 md:py-24 lg:py-32 bg-white"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    Key Features
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl">
                                    Advanced Verification Technology
                                </h2>
                                <p className="max-w-[900px] text-neutral-500 md:text-xl">
                                    Our platform combines multiple verification
                                    methods to ensure security and accessibility
                                    for all voters.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <Fingerprint className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        Biometric Authentication
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Secure fingerprint and facial
                                        recognition for foolproof identity
                                        verification.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <QrCode className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        QR Code & Smart ID Scan
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Quick verification using QR codes and
                                        smart ID card scanning technology.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <MessageSquare className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        OTP-Based Verification
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Secure one-time password sent to your
                                        registered mobile number for
                                        verification.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <Bell className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        Real-Time Status Updates
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Get instant notifications about your
                                        verification status and voting process.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <Lock className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        Blockchain Security
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Immutable record-keeping ensures
                                        transparency and prevents fraud in the
                                        voting process.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="border-2 border-green-100 hover:border-primary transition-colors">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                        <Globe className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-secondary">
                                        Multi-Language Support
                                    </CardTitle>
                                    <CardDescription className="text-neutral-500">
                                        Interface available in multiple
                                        languages to ensure accessibility for
                                        all citizens.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section
                    id="how-it-works"
                    className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    Process
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl">
                                    How It Works
                                </h2>
                                <p className="max-w-[900px] text-neutral-500 md:text-xl">
                                    Our streamlined verification process makes
                                    voting quick and secure.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-5xl py-12">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                                            1
                                        </div>
                                        <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle2 className="h-4 w-4 text-success" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">
                                        Register or Check Eligibility
                                    </h3>
                                    <p className="text-neutral-500">
                                        Enter your voter ID or registration
                                        number to check eligibility status.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                                            2
                                        </div>
                                        <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <QrCode className="h-4 w-4 text-success" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">
                                        Choose Verification Method
                                    </h3>
                                    <p className="text-neutral-500">
                                        Select from biometric, QR code, or OTP
                                        verification based on your preference.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                                            3
                                        </div>
                                        <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <Fingerprint className="h-4 w-4 text-success" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">
                                        Instant Identity Confirmation
                                    </h3>
                                    <p className="text-neutral-500">
                                        Our system verifies your identity in
                                        seconds with high accuracy.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                                            4
                                        </div>
                                        <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle2 className="h-4 w-4 text-success" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">
                                        Proceed to Vote
                                    </h3>
                                    <p className="text-neutral-500">
                                        Once verified, you&apos;ll be directed
                                        to the secure voting interface.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 flex justify-center">
                                <Button
                                    size="lg"
                                    className="bg-success hover:bg-green-600"
                                    onClick={signin}
                                >
                                    Start Verification Process
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Polling Booth Status */}
                <section
                    id="live-status"
                    className="w-full py-12 md:py-24 lg:py-32 bg-white"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    Live Updates
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl">
                                    Real-Time Polling Booth Status
                                </h2>
                                <p className="max-w-[900px] text-neutral-500 md:text-xl">
                                    Find the most convenient polling booth with
                                    our live status tracker.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-5xl py-12">
                            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
                                <div className="relative w-full md:w-auto">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                                    <Input
                                        type="text"
                                        placeholder="Enter your location or zip code"
                                        className="pl-10 w-full md:w-[300px] border-green-200 focus:border-primary"
                                    />
                                </div>
                                <Button className="bg-info hover:bg-info/90">
                                    Find Nearby Booths
                                </Button>
                            </div>

                            <Tabs defaultValue="map" className="w-full">
                                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                                    <TabsTrigger value="map">
                                        Interactive Map
                                    </TabsTrigger>
                                    <TabsTrigger value="list">
                                        Booth List
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent
                                    value="map"
                                    className="border-2 border-green-100 rounded-lg p-4 h-[400px] flex items-center justify-center"
                                >
                                    <div className="text-center space-y-4">
                                        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                            <MapPin className="h-8 w-8 text-primary" />
                                        </div>
                                        <p className="text-neutral-500">
                                            Interactive map showing polling
                                            booth locations with color-coded
                                            status indicators
                                        </p>
                                        <div className="flex justify-center gap-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-success"></div>
                                                <span className="text-sm text-neutral-500">
                                                    Less Busy
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-warning"></div>
                                                <span className="text-sm text-neutral-500">
                                                    Moderate
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-error"></div>
                                                <span className="text-sm text-neutral-500">
                                                    Crowded
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="list">
                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: 'Central Community Center',
                                                address: '123 Main St',
                                                status: 'Less Busy',
                                                wait: '5 min',
                                                color: 'bg-success',
                                            },
                                            {
                                                name: 'Westside Elementary School',
                                                address: '456 Park Ave',
                                                status: 'Moderate',
                                                wait: '15 min',
                                                color: 'bg-warning',
                                            },
                                            {
                                                name: 'Northgate Public Library',
                                                address: '789 Oak Rd',
                                                status: 'Crowded',
                                                wait: '30 min',
                                                color: 'bg-error',
                                            },
                                            {
                                                name: 'Southside Recreation Center',
                                                address: '321 Pine St',
                                                status: 'Less Busy',
                                                wait: '10 min',
                                                color: 'bg-success',
                                            },
                                        ].map((booth, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between border-2 border-green-100 rounded-lg p-4"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`w-3 h-3 mt-1.5 rounded-full ${booth.color}`}
                                                    ></div>
                                                    <div>
                                                        <h3 className="font-medium text-secondary">
                                                            {booth.name}
                                                        </h3>
                                                        <p className="text-sm text-neutral-500">
                                                            {booth.address}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-medium text-secondary">
                                                        {booth.status}
                                                    </div>
                                                    <div className="text-sm text-neutral-500">
                                                        Est. wait: {booth.wait}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>

                            <div className="mt-12 grid gap-6 md:grid-cols-3">
                                <Card className="border-2 border-green-100">
                                    <CardHeader className="pb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-secondary text-lg">
                                            Find Nearby Booths
                                        </CardTitle>
                                        <CardDescription className="text-neutral-500">
                                            Locate polling stations with shorter
                                            wait times near you.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="border-2 border-green-100">
                                    <CardHeader className="pb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                            <Clock className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-secondary text-lg">
                                            Live Verification Rate
                                        </CardTitle>
                                        <CardDescription className="text-neutral-500">
                                            Check real-time verification success
                                            rates at different locations.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                                <Card className="border-2 border-green-100">
                                    <CardHeader className="pb-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                            <Calendar className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-secondary text-lg">
                                            Election Day Reminder
                                        </CardTitle>
                                        <CardDescription className="text-neutral-500">
                                            Get notifications and updates about
                                            upcoming election events.
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section
                    id="faq"
                    className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    Support
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl">
                                    Frequently Asked Questions
                                </h2>
                                <p className="max-w-[900px] text-neutral-500 md:text-xl">
                                    Find answers to common questions about our
                                    verification system.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl py-12">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left text-secondary font-medium">
                                        What identification do I need to bring
                                        for verification?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500">
                                        You should bring your voter ID card, a
                                        government-issued photo ID (such as a
                                        driver&apos;s license or passport), and
                                        your registered mobile phone for OTP
                                        verification if needed.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left text-secondary font-medium">
                                        How does the biometric verification
                                        work?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500">
                                        Our system uses fingerprint scanning and
                                        facial recognition technology to match
                                        your biometric data with the information
                                        in our secure database. The process
                                        takes only seconds and is highly
                                        accurate.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-left text-secondary font-medium">
                                        Is my personal data secure during the
                                        verification process?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500">
                                        Yes, we use blockchain technology and
                                        advanced encryption to ensure your
                                        personal data remains secure. Your
                                        information is only used for
                                        verification purposes and is not shared
                                        with third parties.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-left text-secondary font-medium">
                                        What if I don&apos;t have a smartphone
                                        for OTP verification?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500">
                                        We offer multiple verification methods.
                                        If you don&apos;t have a smartphone, you
                                        can use biometric verification or bring
                                        your voter ID card for QR code scanning
                                        at the polling booth.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger className="text-left text-secondary font-medium">
                                        How long does the verification process
                                        take?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500">
                                        The entire verification process
                                        typically takes less than 2 minutes. Our
                                        system is designed to be fast and
                                        efficient to reduce waiting times at
                                        polling stations.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
                                <h3 className="text-xl font-bold text-secondary">
                                    Still have questions?
                                </h3>
                                <p className="text-neutral-500">
                                    Our support team is here to help you with
                                    any questions or concerns.
                                </p>
                                <Button className="bg-info hover:bg-info/90">
                                    Contact Support
                                    <HelpCircle className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-secondary md:text-4xl">
                                    Ready to experience secure and efficient
                                    voting?
                                </h2>
                                <p className="max-w-[900px] text-neutral-500 md:text-xl">
                                    Join millions of citizens who trust our
                                    verification system for a seamless voting
                                    experience.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button
                                    size="lg"
                                    className="bg-success hover:bg-green-600"
                                    onClick={signin}
                                >
                                    Start Verification
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-primary text-primary hover:bg-primary hover:text-white"
                                >
                                    Learn More
                                </Button>
                            </div>
                            <p className="text-sm text-neutral-500">
                                Secure, transparent, and accessible for all
                                eligible voters.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t bg-secondary py-12 text-white">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                                <span className="text-xl font-bold">
                                    VoteVerify
                                </span>
                            </div>
                            <p className="text-sm text-neutral-200">
                                Secure, fast, and transparent voting
                                verification system powered by blockchain
                                technology.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Quick Links</h3>
                            <ul className="space-y-2">
                                {[
                                    'Features',
                                    'How It Works',
                                    'Live Status',
                                    'FAQ',
                                    'Support',
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-sm text-neutral-200 hover:text-primary"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Resources</h3>
                            <ul className="space-y-2">
                                {[
                                    'Voter Education',
                                    'Election Calendar',
                                    'Verification Guide',
                                    'Security Measures',
                                    'Accessibility',
                                ].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-sm text-neutral-200 hover:text-primary"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Contact</h3>
                            <ul className="space-y-2">
                                <li className="text-sm text-neutral-200">
                                    Email: support@voteverify.gov
                                </li>
                                <li className="text-sm text-neutral-200">
                                    Phone: 1-800-VOTE-HELP
                                </li>
                                <li className="text-sm text-neutral-200">
                                    Address: 123 Democracy Ave, Capital City
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-8 md:flex-row">
                        <p className="text-xs text-neutral-200">
                            &copy; {new Date().getFullYear()} VoteVerify. All
                            rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="text-neutral-200 hover:text-primary"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="#"
                                className="text-neutral-200 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-neutral-200 hover:text-primary"
                            >
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
