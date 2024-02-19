export const getRemainTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  };
};

export const countDown = (deadline) => {
  const timer = setInterval(() => {
    const time = getRemainTime(deadline);
    if (time.remainSeconds === "00" && time.remainMinutes === "00") {
      clearInterval(timer);
    }
  }, 1000);
}

console.log(countDown("2024-03-28 00:00:00"))