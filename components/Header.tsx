import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import type { Post, Settings } from 'lib/sanity.queries'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    TvIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    FilmIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    ClipboardDocumentCheckIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { HiArchive } from "react-icons/hi";
import { 
    ChevronDownIcon 
} from '@heroicons/react/20/solid';
import {
    FaGithub, 
    FaLinkedin, 
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const resources = [
    {
        name: 'GitHub',
        description: 'Check out what I\'m currently working on!',
        href: 'https://github.com/AnthonyDampier',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        description: 'Connect and create new opportunities!',
        href: 'https://www.linkedin.com/in/anthonydampier',
        icon: FaLinkedin,
    },
    {
        name: 'Prentus',
        description: 'Hire fantastic developers and UX designers!',
        href: 'https://community.primeacademy.io/p/anthony-dampier',
        icon: BookmarkSquareIcon,
    },
]

const callsToAction = [
    { name: 'View the projects now!', href: '#projects', icon: PlayIcon, key: 1 },
    // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Header({ posts }: { posts: Post[] }) {

    const projects =
        [
                {
                    title: 'GoMove 💪🏽',
                    description: 'Built using React, Postgres, express and much more',
                    href: 'https://protected-bastion-78122.herokuapp.com/#/home',
                    image: '/images/GoMoveProject.png',
                    icon: Squares2X2Icon,
                },
                {
                    title: 'Cactus Mayhem 🤠🌵',
                    description: 'Game using JavaScript, HTML, &  CSS!',
                    href: 'https://cactus-mayhem.herokuapp.com/',
                    image: '/images/CactusMayhemProject.png',
                    icon: PlayIcon,
                },
                {
                    title: 'The Collection 🎬',
                    description: 'Collection of Movie for private database!',
                    href: 'https://obscure-fortress-88731.herokuapp.com/#/',
                    image: '/images/TheCollectionProject.png',
                    icon: FilmIcon,
                },
                {
                    title: 'MN Women\'s Press',
                    description: 'Content & Contact Manager: Use \'Guest\' as username & password',
                    href: 'https://mnwomenpress-prototype.herokuapp.com/#/login',
                    image: '/images/Screen Shot 2023-02-21 at 11.48.26 AM.png',
                    icon: HiArchive,
                }
        ]
    
    return (
        <Popover className="relative bg-transparent pt-2">
        <div className="mx-auto px-2 w-5/6 bg-white rounded-lg shadow-2xl ">
            <div className="flex justify-center items-center py-6 space-x-10 ">
                <Link href="/" className="text-base font-medium text-black hover:text-zinc-500">
                    Home
                </Link>
                <Popover.Group as="nav" className="space-x-10 flex justify-center">
                    <Popover className="relative flex justify-center">
                    {({ open }) => (
                        <>
                        <Popover.Button
                            className={classNames(
                            open ? 'text-black' : 'text-black',
                            'group inline-flex items-center text-center rounded-md bg-white text-base font-medium hover:text-black-900 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2'
                            )}
                        >
                            <span className='text-center hover:text-zinc-500'>Project Examples</span>
                            <ChevronDownIcon
                            className={classNames(
                                open ? 'text-black' : 'text-black',
                                'ml-2 h-5 w-5 group-hover:text-black'
                            )}
                            aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-9 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {projects?.map((item, index) => (
                                    <a
                                    key={index}
                                    href={item.href}
                                    rel='noreferrer'
                                    target="_blank"
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-black-50"
                                    >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-zinc-400" aria-hidden="true" />
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-black-900">{item.title}</p>
                                        <p className="mt-1 text-sm text-black-500">{item.description}</p>
                                    </div>
                                    </a>
                                ))}
                                </div>
                                <div className="space-y-6 bg-black-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 bg-zinc-300">
                                {callsToAction.map((item, index) => (
                                    <div key={item.name} className="flow-root">
                                    <a
                                        href={item.href}
                                        key={index}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-black-900 hover:bg-black-100"
                                    >
                                        <item.icon className="h-6 w-6 flex-shrink-0 text-sky-400" aria-hidden="true" />
                                        <span className="ml-3">{item.name}</span>
                                    </a>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </Popover.Panel>
                        </Transition>
                        </>
                    )}
                </Popover>
                {/* <a href="/" className="text-base font-medium text-black hover:text-zinc">
                    About Me
                </a> */}
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                open ? 'text-black' : 'text-black',
                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-zinc focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2'
                                )}
                            >
                                <span className='hover:text-zinc-500'>Let&apos;s Connect</span>
                                <ChevronDownIcon
                                className={classNames(
                                    open ? 'text-black' : 'text-black',
                                    'ml-2 h-5 w-5 group-hover:text-zinc'
                                )}
                                aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-100 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-100 translate-y-1"
                            >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item, index) => (
                                    <a
                                    key={index}
                                    href={item.href}
                                    rel='noreferrer'
                                    target='_blank'
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc"
                                    >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-zinc-400" aria-hidden="true" />
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-black">{item.name}</p>
                                        <p className="mt-1 text-sm text-black-500">{item.description}</p>
                                    </div>
                                    </a>
                                ))}
                                </div>
                                <div className="bg-zinc-300 px-5 py-5 sm:px-8 sm:py-8">
                                <div>
                                    <h3 className="text-base font-medium text-black">Recent Posts</h3>
                                    <ul role="list" className="mt-4 space-y-4">
                                    {posts.slice(0,5).map((post, index) => (
                                        <li key={index} className="truncate text-base indent-4">
                                            <a href={`/posts/${post.slug}`} className="font-medium text-zinc-700 hover:text-zinc-600">
                                                {post.title}
                                            </a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                    <a href="#blog" className="font-medium text-sky-400 hover:text-sky-700">
                                    View all posts
                                    <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </Popover.Panel>
                        </Transition>
                        </>
                    )}
                    </Popover>
                </Popover.Group>
                <a href="#blog" className="text-base font-medium text-black hover:text-zinc-500">
                    Blog
                </a>
            </div>
        </div>

        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-black-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                    <div>
                    {/* <Image
                        className="h-8 w-auto"
                        width={30}
                        height={30}
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    </div>
                    <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black-400 hover:bg-black-100 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-600">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                </div>
                <div className="mt-6">
                    <nav className="grid gap-y-8">
                    {projects.map((item,index) => (
                        <a
                        key={index}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-black-50"
                        >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-black">{item.title}</span>
                        </a>
                    ))}
                    </nav>
                </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" className="text-base font-medium text-black-900 hover:text-zinc-500">
                            Blog
                        </a>
                        <a href="#" className="text-base font-medium text-black-500 hover:text-black-900">
                            About Me
                        </a>
                        {resources.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-black-900 hover:text-black-700"
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    {/* <div>
                        <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                        Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-black-500">
                        Existing customer?{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                        </p>
                    </div> */}
                </div>
            </div>
            </Popover.Panel>
        </Transition>
        </Popover>
  )
}
