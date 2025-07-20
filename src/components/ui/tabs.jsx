import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { value, setValue })
  );
}

export function TabsList({ children, className = '' }) {
  return <div className={lex flex-wrap gap-2 justify-center }>{children}</div>;
}

export function TabsTrigger({ children, value: tabValue, value: selectedValue, setValue, className = '' }) {
  const active = selectedValue === tabValue;
  return (
    <button
      onClick={() => setValue(tabValue)}
      className={${className} }
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value: tabValue, value: selectedValue, className = '' }) {
  return selectedValue === tabValue ? <div className={className}>{children}</div> : null;
}
