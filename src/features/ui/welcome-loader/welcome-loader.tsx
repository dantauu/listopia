"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { motion } from "framer-motion"
import style from "./welcome-loader.module.scss"

const WelcomeLoader = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home/catalog")
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <motion.div
      className={style.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className={style.title}>You can</h3>
        <motion.div
          className={style.progressBar}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default WelcomeLoader
