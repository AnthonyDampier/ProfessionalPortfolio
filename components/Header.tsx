import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
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
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {FaGithub, 
    FaLinkedin, 
} from 'react-icons/fa';




const Projects = [
    {
        name: 'GoMove',
        description: 'Workout Program Creator Application using React.js, Node, & More!',
        href: 'https://protected-bastion-78122.herokuapp.com/#/home',
        icon: ClipboardDocumentCheckIcon,
    },
    {
        name: 'Movie Collection',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: 'https://obscure-fortress-88731.herokuapp.com/',
        icon: FilmIcon,
    },
    // { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    // {
    //     name: 'Integrations',
    //     description: "Connect with third-party tools that you're already using.",
    //     href: '#',
    //     icon: Squares2X2Icon,
    // },
    // {
    //     name: 'Automations',
    //     description: 'Build strategic funnels that will drive your customers to convert',
    //     href: '#',
    //     icon: ArrowPathIcon,
    // },
    ]
    const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'GitHub',
        description: 'Check out what I\'m currently working on!',
        href: '#',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        description: 'Connect and create new opportunities!',
        href: '#',
        icon: FaLinkedin,
    },
    {
        name: 'Prentus',
        description: 'Hire fantastic developers and UX designers!',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    // {
    //     name: 'Events',
    //     description: 'See what meet-ups and other events we might be planning near you.',
    //     href: '#',
    //     icon: CalendarIcon,
    // },
    // { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className="relative bg-transparent pt-2">
        <div className="mx-auto max-w-7xl px-6 w-5/6 bg-white rounded-lg shadow-2xl ">
            <div className='sm:hidden flex justify-center align-middle relative top-5 text-lg font-bold'>
                Rotate Phone
            </div>
            <div className="flex justify-center items-center py-6 md:space-x-10 ">
                <Popover.Group as="nav" className="hidden space-x-10 md:flex justify-center">
                    <Popover className="relative flex justify-center">
                    {({ open }) => (
                        <>
                        <Popover.Button
                            className={classNames(
                            open ? 'text-black' : 'text-black',
                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-black-900 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2'
                            )}
                        >
                            <span>Projects</span>
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
                                {Projects.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-black-50"
                                    >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-zinc-400" aria-hidden="true" />
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-black-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-black-500">{item.description}</p>
                                    </div>
                                    </a>
                                ))}
                                </div>
                                <div className="space-y-6 bg-black-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 bg-zinc-300">
                                {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                    <a
                                        href={item.href}
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
                <a href="#" className="text-base font-medium text-black hover:text-zinc">
                    Blog
                </a>
                <a href="#" className="text-base font-medium text-black hover:text-zinc">
                    About Me
                </a>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                open ? 'text-black' : 'text-black',
                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-zinc focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2'
                                )}
                            >
                                <span>More</span>
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
                                {resources.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
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
                                    {recentPosts.map((post) => (
                                        <li key={post.id} className="truncate text-base">
                                        <a href={post.href} className="font-medium text-black hover:text-zinc-600">
                                            {post.name}
                                        </a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                    <a href="#" className="font-medium text-sky-400 hover:text-sky-700">
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
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
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
                    {Projects.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-black-50"
                        >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                        </a>
                    ))}
                    </nav>
                </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" className="text-base font-medium text-black-900 hover:text-black-700">
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
