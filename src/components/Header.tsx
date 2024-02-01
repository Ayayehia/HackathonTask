import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Avatar from "../assets/avatar.png";
import BellIcon from "./svg/BellIcon";

function classNames(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(" ");
}
const Header = () => {
	return (
		<nav className="lg:pr-10">
			<ul className="flex justify-end gap-8 lg:gap-24 text-white mt-8 items-center">
				<li className="relative bg-[#2F293E] rounded-2xl w-full max-w-[556px]">
					<label
						htmlFor="search"
						className=" z-50 absolute inset-y-0 right-9 flex items-center justify-between"
					>
						<MagnifyingGlassIcon
							className="h-5 w-5 text-[#E2D8FD]"
							aria-hidden="true"
						/>
					</label>
					<input
						id="search"
						name="search"
						className="w-full h-full border-0  px-5 py-4 bg-[#2F293E] rounded-2xl focus:outline-none  placeholder:text-[#E2D8FD]"
						placeholder="Search"
						type="search"
					/>
				</li>
				<li className="flex items-center gap-4">
					{/* //Notification button*/}
					<button
						type="button"
						className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#2B2638] border border-[#D9CBFF] border-opacity-40 "
					>
						<span className="sr-only">View notifications</span>
						<BellIcon className="h-6 w-6 text-[#E2D8FD]" aria-hidden="true" />
					</button>
					{/* //Avatar button */}
					<Menu as="div" className="flex items-center">
						<Menu.Button className=" w-12 h-12">
							<img
								className=" rounded-full w-full h-full"
								src={Avatar}
								alt=""
							/>
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100" : "",
												"block px-4 py-2 text-sm text-gray-700"
											)}
										>
											Your Profile
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100" : "",
												"block px-4 py-2 text-sm text-gray-700"
											)}
										>
											Settings
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100" : "",
												"block px-4 py-2 text-sm text-gray-700"
											)}
										>
											Sign out
										</a>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
