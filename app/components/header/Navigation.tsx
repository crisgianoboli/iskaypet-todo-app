import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/my-data"
              className="inline-block py-2 text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900"
            >
              Mis datos
            </Link>
          </li>
          <li>
            <Link
              href="/tasks"
              className="inline-block py-2 text-green-600 border-b-2 border-green-600"
            >
              Mis tareas
            </Link>
          </li>
          <li>
            <Link
              href="/returns"
              className="inline-block py-2 text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900"
            >
              Mis devoluciones
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
