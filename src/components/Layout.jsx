import React from "react";
import { IoIosNotifications } from "react-icons/io";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Activity,
} from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = location.pathname.slice(1) || "dashboard";

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    { id: "journal", label: "Journal", icon: BookOpen, path: "/journal" },
    { id: "learn", label: "Learn", icon: GraduationCap, path: "/learn" },
    { id: "vitals", label: "Vitals", icon: Activity, path: "/vitals" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Header */}
      <div className="px-6 py-8 text-white">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold tracking-wide">cura</h1>

          <div className="flex items-center space-x-4">
            <button
              aria-label="Notifications"
              className="relative text-white hover:text-yellow-300 focus:outline-none"
            >
              <IoIosNotifications size={30} className="text-yellow-400"/>
              {/* Optional notification badge */}
              {/* <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span> */}
            </button>

            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
          </div>
        </div>
        <p className="text-blue-100 text-lg">Hello, Kanishka 🥰</p>
      </div>

      {/* Main Content Area - Semi-circular white container */}
      <div className="relative flex-1">
        {/* Semi-circular background */}
        <div
          className="bg-white rounded-t-[3rem] min-h-[calc(100vh-200px)] relative overflow-hidden"
          style={{
            minHeight: "calc(100vh - 200px)",
          }}
        >
          {/* Content - This is where child components will render */}
          <div className="pt-8 px-6 pb-24">
            <Outlet />
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
            <div className="flex justify-around items-center py-4 px-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={isActive ? "text-blue-600" : "text-gray-500"}
                    />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .min-h-screen {
            min-height: 100vh;
            min-height: -webkit-fill-available;
          }
        }

        @media (max-height: 600px) {
          .rounded-t-[3rem] {
            border-radius: 2rem 2rem 0 0;
          }
        }

        /* Prevent zoom on input focus (iOS Safari) */
        @media screen and (max-width: 768px) {
          input[type="text"],
          input[type="email"],
          input[type="number"],
          input[type="password"],
          textarea,
          select {
            font-size: 16px !important;
          }
        }

        /* Handle safe area for newer phones */
        @supports (padding: max(0px)) {
          .pb-24 {
            padding-bottom: max(6rem, env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
