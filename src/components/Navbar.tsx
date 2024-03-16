import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <nav className="py-4 border-b-2 border-container shadow-md shadow-gray-400 w-full fixed top-0 bg-base">
      <ul className="flex items-center justify-between  w-11/12 mx-auto">
        <Link to="/">
          <Button
            content={{
              text: "Taskwrite",
              icon: PencilIcon,
            }}
            textClasses="font-semibold text-main"
            iconClasses="text-main"
          />
        </Link>
        {/* </Link> */}
        <div className="flex items-center justify-between gap-6">
          <Link
            to="/tasks"
            className="font-semibold hover:scale-105 transition duration-300 ease-in-out"
          >
            View Tasks
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
