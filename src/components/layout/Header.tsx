'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SubMenuItem {
  name: string
  href: string
  description: string
}

interface NavigationItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setActiveDropdown(null)
      }
    }

    const handleClickOutside = () => {
      setActiveDropdown(null)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('click', handleClickOutside)
    
    // Set initial mobile state
    handleResize()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  // Reset dropdown when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setActiveDropdown(null)
    }
  }, [mobileMenuOpen])

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      submenu: [
        { name: 'Overview', href: '/about', description: 'Learn about our company' },
        { name: 'Our Story', href: '/about/story', description: 'How NavioX was founded' },
        { name: 'Mission & Vision', href: '/about/mission', description: 'Our core values and goals' },
        { name: 'Leadership Team', href: '/about/leadership', description: 'Meet our executives' },
        { name: 'Careers', href: '/about/careers', description: 'Join our growing team' },
        { name: 'Contact Us', href: '/contact', description: 'Get in touch with us' },
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services', description: 'Complete service portfolio' },
        { name: 'Cloud Solutions', href: '/services/cloud', description: 'Scalable cloud infrastructure' },
        { name: 'DevSecOps', href: '/services/devsecops', description: 'Security-first DevOps' },
        { name: 'API Development', href: '/services/api', description: 'Backend and integrations' },
        { name: 'Web Development', href: '/services/web-development', description: 'Custom web applications' },
        { name: 'Mobile Apps', href: '/services/mobile-apps', description: 'iOS and Android development' },
        { name: 'Digital Strategy', href: '/services/strategy', description: 'Technology consulting' },
      ]
    },
    { 
      name: 'Projects', 
      href: '/projects',
      submenu: [
        { name: 'Portfolio', href: '/projects', description: 'View all our work' },
        { name: 'Web Applications', href: '/projects/web', description: 'Custom web solutions' },
        { name: 'Mobile Projects', href: '/projects/mobile', description: 'App development cases' },
        { name: 'E-commerce', href: '/projects/ecommerce', description: 'Online store solutions' },
        { name: 'Enterprise', href: '/projects/enterprise', description: 'Large-scale systems' },
        { name: 'Case Studies', href: '/projects/case-studies', description: 'Detailed project breakdowns' },
      ]
    },
    { name: 'Team', href: '/team' },
    { 
      name: 'Blog', 
      href: '/blog',
      submenu: [
        { name: 'Latest Posts', href: '/blog', description: 'Recent articles and insights' },
        { name: 'Technology', href: '/blog/technology', description: 'Tech trends and tutorials' },
        { name: 'Industry News', href: '/blog/news', description: 'Latest industry updates' },
        { name: 'Best Practices', href: '/blog/best-practices', description: 'Development tips and guides' },
        { name: 'Company Updates', href: '/blog/company', description: 'NavioX news and announcements' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleDropdownToggle = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // For desktop dropdowns - only allow on mobile devices for click behavior
    if (isMobile) {
      setActiveDropdown(activeDropdown === itemName ? null : itemName)
    }
  }

  const handleMouseEnter = (itemName: string) => {
    if (!isMobile) {
      setActiveDropdown(itemName)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null)
    }
  }

  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const logoVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  const navItemVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  }

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const ctaButtonVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.3
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  }

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const mobileNavItemVariants: Variants = {
    closed: { x: -10, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const mobileContainerVariants: Variants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const hamburgerVariants: Variants = {
    initial: { rotate: 0 },
    animate: { rotate: 0 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  }

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const dropdownItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const dropdownContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  }



  return (
    <motion.header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/70 backdrop-blur-sm shadow-md border-b border-gray-50'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NavioX Solutions Inc.</span>
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="flex items-center"
            >
              <Image
                className="h-8 w-auto sm:h-10 max-w-[160px] sm:max-w-[180px] object-contain filter drop-shadow-sm"
                src="/images/brand/banner_transparent.png"
                alt="NavioX Solutions Inc."
                width={180}
                height={40}
                priority
                onError={(e) => {
                  console.error('Failed to load logo:', e);
                  // Fallback to text if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const textFallback = document.createElement('span');
                    textFallback.className = 'text-xl font-bold text-blue-600';
                    textFallback.textContent = 'NavioX';
                    parent.appendChild(textFallback);
                  }
                }}
              />
            </motion.div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex lg:gap-x-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href)
            const hasSubmenu = 'submenu' in item && item.submenu
            const isDropdownOpen = activeDropdown === item.name
            
            return (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                whileHover="hover"
                custom={index}
                className="relative"
                onMouseEnter={() => hasSubmenu && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={(e) => handleDropdownToggle(item.name, e)}
                      className={`text-sm font-semibold leading-6 relative overflow-hidden group transition-colors duration-200 flex items-center gap-1 ${
                        active 
                          ? 'text-blue-600' 
                          : 'text-gray-900 hover:text-blue-600'
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                      
                      {/* Active indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-blue-600 origin-left"
                        initial={{ scaleX: active ? 1 : 0 }}
                        animate={{ scaleX: active ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: 'calc(100% - 20px)' }}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <motion.div
                            className="py-4"
                            variants={dropdownContainerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {item.submenu?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                variants={dropdownItemVariants}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start">
                                    <div className="flex-1">
                                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1">
                                        {subItem.description}
                                      </div>
                                    </div>
                                    <svg
                                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 mt-0.5 ml-2"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className={`text-sm font-semibold leading-6 relative overflow-hidden group transition-colors duration-200 flex items-center ${
                      active 
                        ? 'text-blue-600' 
                        : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-600 origin-left"
                      initial={{ scaleX: active ? 1 : 0 }}
                      animate={{ scaleX: active ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: '100%' }}
                    />
                  </Link>
                )}
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Right Section: CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* CTA Button */}
          <motion.div
            variants={ctaButtonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              href="/contact" 
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border border-blue-500/30 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800"
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-1.5">
                Get Started
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.4 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Section: Menu Button */}
        <div className="flex lg:hidden items-center relative">
          {/* Mobile menu button */}
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              if (mobileMenuOpen) {
                setActiveDropdown(null)
              }
            }}
            variants={hamburgerVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>

          {/* Floating Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Menu Header */}
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center justify-center">
                    <Image
                      className="h-8 w-auto max-w-[160px]"
                      src="/images/brand/banner_transparent.png"
                      alt="NavioX Solutions Inc."
                      width={160}
                      height={32}
                      onError={(e) => {
                        console.error('Failed to load mobile logo:', e);
                        // Fallback to text if image fails
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const textFallback = document.createElement('span');
                          textFallback.className = 'text-lg font-bold text-blue-600';
                          textFallback.textContent = 'NavioX';
                          parent.appendChild(textFallback);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <motion.div 
                  className="py-4"
                  variants={mobileContainerVariants}
                  initial="closed"
                  animate="open"
                >
                  {navigation.map((item, index) => {
                    const active = isActive(item.href)
                    const hasSubmenu = 'submenu' in item && item.submenu
                    const isDropdownOpen = activeDropdown === item.name
                    
                    return (
                      <motion.div
                        key={item.name}
                        variants={mobileNavItemVariants}
                      >
                        {hasSubmenu ? (
                          <>
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setActiveDropdown(activeDropdown === item.name ? null : item.name)
                              }}
                              className={`w-full flex items-center justify-between px-6 py-4 text-base font-medium transition-all duration-200 relative touch-manipulation ${
                                active 
                                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                                  : 'text-gray-900 hover:bg-gray-50 hover:text-blue-600 active:bg-gray-100'
                              }`}
                              aria-expanded={isDropdownOpen}
                            >
                              <span className="relative">{item.name}</span>
                              <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </motion.svg>
                              
                              {/* Active indicator line */}
                              <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                                initial={{ scaleY: active ? 1 : 0 }}
                                animate={{ scaleY: active ? 1 : 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.5 }}
                              />
                            </button>
                            
                            {/* Mobile Submenu */}
                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  className="bg-gray-50 border-l-4 border-blue-200 overflow-hidden"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                >
                                  <div className="py-2">
                                    {item.submenu?.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block px-10 py-4 text-sm text-gray-700 hover:text-blue-600 hover:bg-white active:bg-gray-50 transition-colors duration-200 touch-manipulation"
                                        onClick={(e) => {
                                          // Close mobile menu and dropdown when navigating
                                          setMobileMenuOpen(false)
                                          setActiveDropdown(null)
                                        }}
                                      >
                                        <div className="font-medium">{subItem.name}</div>
                                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                            <Link
                              href={item.href}
                              className={`block px-6 py-3 text-base font-medium transition-all duration-200 relative ${
                                active 
                                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' 
                                  : 'text-gray-900 hover:bg-gray-50 hover:text-blue-600'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {/* Active indicator line */}
                              <motion.div
                                className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                                initial={{ scaleY: active ? 1 : 0 }}
                                animate={{ scaleY: active ? 1 : 0 }}
                                whileHover={{ scaleY: 1 }}
                                transition={{ duration: 0.2 }}
                                style={{ originY: 0.5 }}
                              />
                              <span className="relative">{item.name}</span>
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA Button */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="relative block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-500/30 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Animated background overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ originX: 0.5, originY: 0.5 }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.4 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm lg:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setMobileMenuOpen(false)
              setActiveDropdown(null)
            }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 