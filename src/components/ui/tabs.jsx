import React, { useState } from 'react';

// Tabs component to manage the active tab state
export function Tabs({ children, defaultValue, className = '' }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className={`w-full ${className}`}>
      {/*
        We use React.Children.map to pass down 'value' and 'setValue'
        to direct children (TabsList and TabsContent).
      */}
      {React.Children.map(children, (child) => {
        // Ensure child is a valid React element before cloning
        if (React.isValidElement(child)) {
          // Pass selectedValue and setValue to direct children (TabsList and TabsContent)
          return React.cloneElement(child, { selectedValue: value, setValue });
        }
        return child;
      })}
    </div>
  );
}

// TabsList component to hold the tab triggers
export function TabsList({ children, className = '', selectedValue, setValue }) {
  return (
    <div className={`flex flex-wrap justify-center p-2 rounded-lg shadow-inner bg-gray-900 border border-gray-700 ${className}`}>
      {/*
        Clone children (TabsTrigger components) and pass selectedValue and setValue to them.
        This ensures each trigger knows the currently selected tab and can update it.
      */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { selectedValue, setValue });
        }
        return child;
      })}
    </div>
  );
}

// TabsTrigger component for individual tab buttons
export function TabsTrigger({ children, value: tabTriggerValue, selectedValue, setValue, className = '' }) {
  const active = selectedValue === tabTriggerValue;

  return (
    <button
      onClick={() => setValue(tabTriggerValue)}
      // Apply different styles based on active state, with smooth transitions
      className={`
        relative inline-flex items-center justify-center whitespace-nowrap px-5 py-2 text-base font-bold uppercase tracking-wide
        transition-all duration-300 ease-in-out rounded-md // Ensured rounded-md is present
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
        disabled:pointer-events-none disabled:opacity-50
        group // Added for hover effects on pseudo-elements
        ${
          active
            ? 'text-white bg-gray-900 bg-opacity-80 shadow-xl' // Active: transparent charcoal black, slightly more opaque
            : 'text-gray-300 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 hover:text-white' // Inactive: transparent charcoal black, less opaque
        }
        ${className}
      `}
      data-state={active ? 'active' : 'inactive'}
      role="tab"
      aria-selected={active}
      id={`trigger-${tabTriggerValue}`}
      aria-controls={`tabpanel-${tabTriggerValue}`}
    >
      {children}
      {/* Active state indicator - glowing line */}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"></span>
      )}
    </button>
  );
}

// TabsContent component to display content for the active tab
export function TabsContent({ children, value: tabContentValue, selectedValue, className = '' }) {
  // Only render content if the current tab is selected
  return selectedValue === tabContentValue ? (
    <div
      className={`
          mt-6 p-6 bg-[#1a1a1a] rounded-lg shadow-xl
          ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
          animate-fade-in
          ${className}
        `}
      data-state={selectedValue === tabContentValue ? 'active' : 'inactive'}
      role="tabpanel"
      id={`tabpanel-${tabContentValue}`}
      aria-labelledby={`trigger-${tabContentValue}`}
    >
      {children}
    </div>
  ) : null;
}
