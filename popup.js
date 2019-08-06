let capture = document.querySelector("#capture");

capture.onclick = element => {
  chrome.tabs.captureVisibleTab(
    null,
    { format: "jpeg", quality: 100 },
    dataUrl => {
      let a = document.createElement("a");
      a.href = dataUrl;
      a.download = `capture_${formatDate(new Date(), "yyyyMMddHHmmss")}.jpg`;
      a.click();
    }
  );
};

const formatDate = (date, format) => {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
};
