```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the `Routes` and `Route` components from `react-router-dom` v6.  A common error is that the `path` attribute within the `Route` component is incorrect or incomplete, causing unexpected routing behavior or preventing certain routes from working correctly. This is often due to typos, incorrect path parameters, or missing leading slashes.