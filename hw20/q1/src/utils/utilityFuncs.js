const formatSection = section => (section < 10 ? "0" + section : section);

export const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600);
  const sec = seconds % 60;
  return formatSection(hours) + ":" + formatSection(minutes) + ":" + formatSection(sec);
};
