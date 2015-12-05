var pageMod = require("sdk/page-mod").PageMod({
  include: /^https?:\/\/.*twitter.com.*/i,
  contentStyle: "a[href^=\"/i/moments\"] {display: none !important;}"
});
