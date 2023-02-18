const dayjs = require("dayjs");
module.exports = {
  format_date: (date) => {
   
    return dayjs(date).format("DD/MM/YYYY HH:mm:ss")
  },
  };
