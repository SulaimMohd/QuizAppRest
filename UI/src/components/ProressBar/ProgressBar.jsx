
import { motion } from "framer-motion";
const ProgressBar = ({ progress }) => (
  <div className="flex w-full align-middle">
    <div className="flex w-full align-middle">
      <motion.div className="h-2 bg-blue-500 mt-2" initial={{ width: "0%" }} animate={{ width: `${(progress/10)*100}%` }} />
    </div>
    <div className="flex align-middle">
      <h1 className="flex align-middle">{progress}/10</h1>
    </div>
  </div>
);
export default ProgressBar;