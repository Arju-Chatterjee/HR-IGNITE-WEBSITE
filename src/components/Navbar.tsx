
import { useEffect, useState } from "react"


const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect((): (() => void) => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled
                    ? "bg-white/75 backdrop-blur-2xl shadow-lg border-b border-green-200/60"
                    : "bg-white/60 backdrop-blur-xl border-b border-green-100/50"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-5 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg  flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="HR Ignite Logo"
                                className="w-full h-full object-contain p-1"
                            />
                        </div>


                        <div className="leading-tight">
                            <div className="text-green-900 font-black text-base">
                                HR IGNITE <span className="text-orange-500"> INOVATIVE INDIA PVT. LTD.</span>
                            </div>
                            {/* <div className="text-[11px] text-green-700">
                                Rooftop Solutions
                            </div> */}
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {[ "about us", "calculator", "benefits", "Projects", "products", "contact"].map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-green-900 hover:text-orange-500 font-semibold text-sm transition"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}

                        <a
                            href="https://wa.me/919714533858?text=Hi%2C%20I%20want%20solar%20installation%20details"
                            className="bg-orange-500 hover:bg-green-600 hover:shadow-green-400/50 text-white font-bold px-5 py-2.5 text-sm rounded-lg shadow-md transition-all duration-300"


                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-green-900 text-2xl"
                        aria-label="Toggle menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/80 backdrop-blur-xl border-t border-green-200">
                    <div className="flex flex-col px-6 py-6 space-y-5">
                        {["calculator", "benefits", "projects", "contact"].map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setOpen(false)}
                                className="text-green-900 text-lg font-semibold hover:text-orange-500 transition capitalize"
                            >
                                {item}
                            </a>
                        ))}

                        <a
                            href="https://wa.me/919714533858?text=Hi%2C%20I%20want%20solar%20installation%20details"
                            className="bg-gradient-to-r from-green-500 to-orange-500 text-white text-center font-bold py-3 rounded-lg shadow-md"
                        >
                            Get Free Quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
