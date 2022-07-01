import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow-hidden">
      <Navbar toggle={toggle} route={router.pathname} router={router} />
      <Sidebar isOpen={isOpen} toggle={toggle} route={router.pathname} />
    </div>
  );
};

export default Navigation;
