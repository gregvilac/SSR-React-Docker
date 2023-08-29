import ReactDOMServer from "react-dom/server";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </StaticRouter>
  );
  console.log(html);
  return { html };
}
