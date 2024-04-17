export const formatDate = (inputDate) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    
      // Split the input date string into components
      if(inputDate){
        const parts = inputDate.split('/');
    
      // Extract month, day, and year from the parts
      const month = parseInt(parts[0], 10);
      const day = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
    
      // Create a Date object from the parsed components
      const date = new Date(year, month - 1, day);
    
      // Get the month name from the months array
      const monthName = months[date.getMonth()];
    
      // Get the day suffix (st, nd, rd, or th)
      let daySuffix;
      if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
      } else if (day === 2 || day === 22) {
        daySuffix = "nd";
      } else if (day === 3 || day === 23) {
        daySuffix = "rd";
      } else {
        daySuffix = "th";
      }
    
      // Format the date into "Month Day, Year" format
      const formattedDate = `${monthName} ${day}${daySuffix}, ${year}`;
      return formattedDate;
      }
      
}
