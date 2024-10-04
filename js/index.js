const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

// if it's morning, show "Good morning" message
if (currentHour <= 12) {
    message = "Good morning, beautiful world!";
// if it's midday, show "Hello" message
} else if (currentHour > 12 && currentHour <= 17) { 
    message = "Hello, beautiful world!";
// if it's evening, show "Good evening" message
} else if (currentHour > 17) {
    message = "Good evening, beautiful world!";
}

const handleClick = () => {
    alert(message);
}