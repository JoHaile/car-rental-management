import { AnimatePresence, motion } from "framer-motion";
import Faq from "./pages/Faq";

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
          transition={{ duration: 1, ease: "circInOut" }}
        />

        <motion.div
          key={1}
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "circInOut" }}
        />
      </AnimatePresence>
    </>
  );
}

export default Transition;
