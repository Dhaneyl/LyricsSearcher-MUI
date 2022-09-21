import { AppTheme } from "./theme/AppTheme";
import { AppLyrics } from "./pages";
import { LyricsProvider } from "./context";


export const App = () => {
  return (
   
    <AppTheme>
      <LyricsProvider>
      <AppLyrics />
      </LyricsProvider>
    </AppTheme>
  );
};
