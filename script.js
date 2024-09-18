const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
  "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
  "The ones who are crazy enough to think they can change the world, are the ones that do. – Anonymous",
  "Do one thing every day that scares you. – Eleanor Roosevelt",
  "All progress takes place outside the comfort zone. – Michael John Bobak",
  "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. – Tony Robbins",
  "Don't let the fear of losing be greater than the excitement of winning. – Robert Kiyosaki",
  "If you really look closely, most overnight successes took a long time. – Steve Jobs",
  "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. – Barack Obama",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't be distracted by criticism. Remember – the only taste of success some people get is to take a bite out of you. – Zig Ziglar",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "You know you are on the road to success if you would do your job, and not be paid for it. – Oprah Winfrey",
  "Don't cry because it's over, smile because it happened. – Dr. Seuss",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit. – Conrad Hilton",
  "In order to succeed, your desire for success should be greater than your fear of failure. – Bill Cosby",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "The distance between insanity and genius is measured only by success. – Bruce Feirstein",
  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
  "I am not a product of my circumstances. I am a product of my decisions. – Stephen R. Covey",
  "Try not to become a man of success. Rather become a man of value. – Albert Einstein",
  "Success is not the absence of failure; it's the persistence through failure. – Aisha Tyler",
  "If you want to achieve greatness stop asking for permission. – Anonymous",
  "Things work out best for those who make the best of how things work out. – John Wooden",
  "To live a creative life, we must lose our fear of being wrong. – Anonymous",
  "If you are not willing to risk the usual you will have to settle for the ordinary. – Jim Rohn",
  "Trust because you are willing to accept the risk, not because it’s safe or certain. – Anonymous",
  "All our dreams can come true if we have the courage to pursue them. – Walt Disney",
  "Good things come to people who wait, but better things come to those who go out and get them. – Anonymous",
  "If you do what you always did, you will get what you always got. – Anonymous",
  "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "The best revenge is massive success. – Frank Sinatra",
  "Success is how high you bounce when you hit bottom. – George S. Patton",
  "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
  "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston S. Churchill",
  "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston S. Churchill",
  "Success is not in never failing, but rising every time you fall! – Jonathan Taylor Thomas",
  "Success is nothing more than a few simple disciplines, practiced every day. – Jim Rohn",
  "Success is not just making money. Success is happiness. Success is fulfillment; it's the ability to give. – Adam Neumann",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. – Pelé",
    "The successful warrior is the average man, with laser-like focus. – Bruce Lee",
    "Success is not the result of spontaneous combustion. You must set yourself on fire. – Arnold H. Glasow",
    "Success is not what you have, but who you are. – Bo Bennett",
    "Success is the sum of small efforts, repeated day-in and day-out. – Robert Collier",
    "Success is achieved and maintained by those who try and keep trying. – W. Clement Stone",
    "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe. – Sumner Redstone",
    "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    "Success is not just about making money. It's about making a difference. – Unknown",
    "Success is not about the destination. It's about the journey. – Unknown",
    "Success is not determined by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    "Success is not about being the best. It's about always getting better. – Behdad Sami",
    "Success is not about luck. It's about hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing. – Pelé",
    "Success is not about having everything. It's about making the most of what you have. – Unknown",
    "Success is not about what you achieve in life. It's about who you become as a person. – Unknown",
    "Success is not about the amount of money you make. It's about the impact you have on people's lives. – Michelle Obama",
    "Success is not in never falling, but in rising every time we fall. – Confucius",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
    "Success is the progressive realization of a worthy goal or ideal. – Earl Nightingale",
    "I failed my way to success. – Thomas Edison",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "Success is not about what you accomplish in your life, it's about what you inspire others to do. – Unknown",
    "Success is not achieved by winning all the time. Real success comes when we rise after we fall. – Muhammad Ali",
    "Success is not in never falling, but in rising every time you fall. – Vince Lombardi",
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe. – Sumner Redstone",
    "Success is not about what you have. It's about who you are. – Bo Bennett",
    "Success is liking yourself, liking what you do, and liking how you do it. – Maya Angelou",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Success is not the result of spontaneous combustion. You must set yourself on fire. – Arnold H. Glasow",
    "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Call the function to display a random quote on page load
window.onload = displayRandomQuote;

function openModal(section) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  modal.style.display = 'block';

  switch (section) {
    case 'about':
      modalText.innerHTML = `
        <h2>About Me</h2>
        <p>I am Alejandro M. Martinez Jr., a dedicated Information Technology student at Cebu Technological University. My academic journey has instilled a strong foundation in computer technology and problem-solving skills. I am passionate about leveraging technology to create innovative solutions that enhance efficiency and user experience. My interests span across programming, video editing, and analytical problem-solving. I thrive in dynamic environments where I can apply my technical expertise and learn from real-world challenges. I am eager to contribute to projects that push the boundaries of technology and provide tangible benefits to users.</p>
      `;
      break;
    case 'skills':
      modalText.innerHTML = `
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming:</strong> Proficient in Arduino, C++, and Java.</li>
          <li><strong>Editing:</strong> Experienced in photo and video editing.</li>
          <li><strong>Technical Skills:</strong> Basic knowledge of Word and Excel.</li>
          <li><strong>Problem-solving:</strong> Strong critical thinking and analytical skills.</li>
        </ul>
      `;
      break;
    case 'achievements':
      modalText.innerHTML = `
        <h2>Achievements</h2>
        <div class="achievement-item">
          <h3>Consistent Dean’s Lister</h3>
          <p>Awarded for consistent academic excellence during my studies.</p>
        </div>
        <div class="achievement-item">
          <h3>Techno Week Escape Room Champion</h3>
          <p>Showcased quick problem-solving skills during the event.</p>
        </div>
      `;
      break;
    case 'projects':
      modalText.innerHTML = `
        <h2>Projects</h2>
        <p>Coming Soon...</p>
      `;
      break;
    case 'contact':
      modalText.innerHTML = `
        <h2>Contact</h2>
        <div style="text-align: center;">
          <p>Feel free to reach out to me at:</p>
          <p><strong>alejandromartinez050302@gmail.com</strong></p>
          <p>Or call me at:</p>
          <p><strong>09615745812</strong></p>
        </div>
        <form id="contactForm" onsubmit="handleSubmit(event)">
          <input type="text" name="name" placeholder="Your Name" required>
          <input type="email" name="email" placeholder="Your Email" required>
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      `;
      break;
    default:
      modalText.innerHTML = '<p>Content not available.</p>';
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function downloadFile(fileName) {
  window.location.href = `files/${fileName}`;
}

function callMe() {
  alert('Please call me at 09615745812');
}

function buyMeCoffee() {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  modal.style.display = 'block';
  modalText.innerHTML = `
    <h2>Buy Me a Coffee</h2>
    <p>If you'd like to support me, you can send a tip via GCash.</p>
    <p><strong>Name:</strong> Alejandro Jr. Morante Martinez</p>
    <p><strong>GCash Number:</strong> 09615745812</p>
  `;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
  const mailtoLink = `mailto:alejandromartinez050302@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.location.href = mailtoLink;
}