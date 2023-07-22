import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "demoupload");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);
    // const res = await axios.post("https://api.cloudinary.com/v1_1/djhjuxgyk/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const shortMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getMonthName = (monthNumber) => {
  return monthNames[monthNumber];
};

const getShortMonthName = (monthNumber) => {
  return shortMonthNames[monthNumber];
};

export const timeDiffCalc = (date, showDate = true) => {
  let dateFuture = date;
  if (dateFuture === undefined) return "";
  const dateNow = new Date();
  dateFuture = new Date(dateFuture);

  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  let difference = "";
  if (days > 0 && days <= 7) {
    difference = days === 1 ? `${days} day` : `${days} days`;
    return difference;
  }
  if (days <= 0 && (hours > 0 || minutes >= 0)) {
    if (hours > 0) {
      difference = hours === 1 ? `${hours} hour` : `${hours} hours`;
      return difference;
    }
    if (minutes >= 0) {
      difference =
        minutes === 0 || minutes === 1 ? `Immediately` : `${minutes}  minutes`;
      return difference;
    }
  } else {
    // return the post created date
    const getCurrentYear =
      dateFuture.getFullYear() !== dateNow.getFullYear()
        ? dateFuture.getFullYear()
        : "";
    if (!showDate) {
      if (dateNow.getMonth() !== dateFuture.getMonth()) {
        difference = `${getShortMonthName(dateFuture.getMonth())} ${
          getCurrentYear !== "" ? `${getCurrentYear}` : ""
        }`;
      }
    } else {
      difference = `${getMonthName(
        dateFuture.getMonth()
      )}  ${dateFuture.getDate()} ${
        getCurrentYear !== "" ? `, ${getCurrentYear}` : ""
      }`;
    }
    return difference;
  }
  return difference;
};

export default upload;
