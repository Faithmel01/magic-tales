const stories = {
  frozen: {
    title: "❄️ Frozen",
    text: "Elsa’s icy powers trap her kingdom in winter. Her sister Anna teams up with new friends to bring back summer and love!"
  },
  beauty: {
    title: "🕯️ Beauty and the Beast",
    text: "Belle trades her life for her father's freedom, only to find the Beast has a kind heart beneath his scary looks."
  },
  aladdin: {
    title: "🕌 Aladdin",
    text: "Aladdin finds a genie lamp and uses three wishes to win Princess Jasmine’s heart and defeat the wicked Jafar."
  },
  mermaid: {
    title: "🧜‍♀️ The Little Mermaid",
    text: "Ariel dreams of life on land and makes a big wish to join Prince Eric. But magic comes at a price!"
  },
  poppins: {
    title: "☂️ Mary Poppins",
    text: "Mary Poppins floats into London to help a family rediscover fun, magic, and imagination—with umbrellas and songs!"
  },
  lightning: {
    title: "🏁 Cars",
    text: "Lightning McQueen races for glory, but makes true friends and learns humility in Radiator Springs."
  },
  peterpan: {
    title: "🏴‍☠️ Peter Pan",
    text: "Peter Pan takes Wendy to Neverland, where they battle pirates, fly, and learn how to never grow up!"
  },
  dragon: {
    title: "🦖 How to Train Your Dragon",
    text: "Hiccup meets Toothless, a fierce dragon, and they change Viking history by becoming best friends."
  },
  lionking: {
    title: "🦁 The Lion King",
    text: "Simba runs from his past, but returns with courage to claim his place as king of the Pride Lands."
  },
  harrypotter: {
    title: "🧙 Harry Potter",
    text: "Harry enters Hogwarts School of Witchcraft and must stop Lord Voldemort with help from loyal friends."
  }
};

function showStory(bookKey) {
  const story = stories[bookKey];
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-text").textContent = story.text;
}
