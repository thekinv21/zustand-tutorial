# Zustand Tutorial

Welcome to the tutorial on how to use Zustand for state management in React applications with TypeScript.

## Why Choose Zustand?

- **Compact, Fast, and Scalable**: Zustand is a lightweight state management library.
- **Simplicity**: Less boilerplate code compared to Redux and similar libraries.
- **No Provider Required**: Simplifies React logic.
- **Built with Hooks**: Follows simplified flux principles.

### Key Benefits of Zustand:
- **Performance**: Faster than context API and allows for specific state selection.
- **State Merging**: Automatically merges state updates (e.g., `{mode: 'dark', sidebar: 'collapsed'}` can be updated to `{sidebar: 'normal'}`).
- **Extensibility**: Supports a variety of middleware.
- **TypeScript Support**: Well-suited for TypeScript projects.

## Zustand vs Redux

- **Redux**: The classic state management library for React, highly popular.
- **Zustand**: Offers a simpler and more concise approach.

## Installation

To create a React application with Vite and add Zustand:

```sh
yarn create vite # Create React Vite project
yarn add zustand # Add Zustand package
```

## Creating Your First Store

Zustand supports TypeScript very well. Here’s how to create a simple hook-based store.


```sh

import { create } from 'zustand';

interface BearState {
  bears: number;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  clearBears: () => set({ bears: 0 }),
}));

```

## Using the Store in Components

Example of how to use Zustand stored values in your components:


```sh
import React from 'react';
import { useBearStore } from './store';

const BearCounter = () => {
  const bears = useBearStore((state) => state.bears);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);

  return (
    <div>
      <h1>{bears} Bears</h1>
      <button onClick={addBear}>Add Bear</button>
      <button onClick={clearBears}>Clear Bears</button>
    </div>
  );
};

export default BearCounter;

```

## Middleware with Zustand

Here's how to use middleware with Zustand to save the count of bears to localStorage:


```sh
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      addBear: () => set((state) => ({ bears: state.bears + 1 })),
      clearBears: () => set({ bears: 0 }),
    }),
    { name: 'bear-storage' }
  )
);

```

## Async Actions with Zustand

Example of using async actions with Zustand:


```sh
import { create } from 'zustand';

interface User {
  id: number;
  name: string;
}

interface UserState {
  users: User[];
  fetchUsers: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    set({ users });
  },
}));


```

Usage in a component:

```sh
import React, { useEffect } from 'react';
import { useUserStore } from './store';

const UserList = () => {
  const users = useUserStore((state) => state.users);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;

```

## Conclusion
In this tutorial, I demonstrated how to use Zustand for state management in React applications. Thank you for reading!

