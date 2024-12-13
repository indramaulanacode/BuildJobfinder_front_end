const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [

    flowbite.content(),
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

