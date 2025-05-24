const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  export function getFormattedToday(): string {
    const today = new Date();
    const month = monthNames[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
  
    return `${month} ${day}, ${year}`;
  }
  
  export function getDayName(date: Date = new Date()): string {
    return dayNames[date.getDay()];
  }
  