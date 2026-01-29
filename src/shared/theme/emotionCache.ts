import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

export const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [rtlPlugin],
});

export const ltrCache = createCache({
  key: "mui-ltr",
});
