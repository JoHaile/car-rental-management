import { AnimatePresence, motion } from "framer-motion";

function Transition({ children }) {
  return (
    <>
      {children}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={2}
          className="slide-in"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />

        <motion.div
          key={1}
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />
      </AnimatePresence>
    </>
  );
}

export default Transition;
