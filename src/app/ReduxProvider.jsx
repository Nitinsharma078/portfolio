'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/store/themeSlice';

function ThemeSync({ children }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      dispatch(setTheme(saved));
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      dispatch(setTheme('light'));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return children;
}

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ThemeSync>{children}</ThemeSync>
    </Provider>
  );
}
