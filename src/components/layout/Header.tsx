'use client'

import ThemeToggle from '@/components/ui/ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
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
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
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

  const themeToggleVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5
      }
    }
  }

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' 
          : 'bg-white dark:bg-gray-900 shadow-sm'
      }`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NavioX Solutions Inc.</span>
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Image
                className="h-8 w-auto"
                src="/images/brand/banner_transparent.png"
                alt="NavioX Solutions Inc."
                width={120}
                height={32}
                priority
              />
            </motion.div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex lg:gap-x-12"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href)
            return (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                whileHover="hover"
                custom={index}
              >
                <Link 
                  href={item.href} 
                  className={`text-sm font-semibold leading-6 relative overflow-hidden group transition-colors duration-200 ${
                    active 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active indicator - always visible for active items */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 origin-left"
                    initial={{ scaleX: active ? 1 : 0 }}
                    animate={{ scaleX: active ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Right Section: CTA Button + Theme Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
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
              className="text-sm font-semibold leading-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
            </Link>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            variants={themeToggleVariants}
            initial="initial"
            animate="animate"
          >
            <ThemeToggle />
          </motion.div>
        </div>
        
        {/* Mobile Section: Menu Button + Theme Toggle */}
        <div className="flex lg:hidden items-center gap-x-3 relative">
          {/* Mobile menu button */}
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

          {/* Mobile Theme Toggle */}
          <ThemeToggle />

          {/* Floating Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Menu Header */}
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-center">
                    <Image
                      className="h-6 w-auto"
                      src="/images/brand/banner_transparent.png"
                      alt="NavioX Solutions Inc."
                      width={100}
                      height={24}
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
                    return (
                      <motion.div
                        key={item.name}
                        variants={mobileNavItemVariants}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-6 py-3 text-base font-medium transition-all duration-200 relative ${
                            active 
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 dark:border-blue-400' 
                              : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {/* Active indicator line */}
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400"
                            initial={{ scaleY: active ? 1 : 0 }}
                            animate={{ scaleY: active ? 1 : 0 }}
                            whileHover={{ scaleY: 1 }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.5 }}
                          />
                          <span className="relative">{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA Button */}
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile menu backdrop (optional - for closing when clicking outside) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm lg:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header 