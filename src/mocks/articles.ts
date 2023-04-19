import articleImages from "../../img/articles/index.js" 

interface article  {
  id: number,
  title: string,
  content: string,
  image : string,
  progress: number

}



const articles:article[] = [
  {
    id: 1,
    title: "War article",
    content:
      "World War I was a major international conflict of the twentieth century. The assassination of the Habsburg Archduke Franz Ferdinand became initiator of this which...",
    image: articleImages.war,
    progress: 20,
  },
  {
    id: 2,
    title: "Political article",
    content:
      "Koninklijik Paleis or the Royal Palace of the Netherlands stands tall on the west side of Dam Square in the center of Amsterdam which is busy with residents and tourists. Now...",
    image: articleImages.political,
    progress: 40,
  },
  {
    id: 3,
    title: "Care article",
    content:
      "Beautiful and healthy skin is everyone's dream. But the desire to have beautiful skin has its obstacles too. Bad environmental factors can damage skin health, of course in addition...",
    image: articleImages.care,
    progress: 60,
  },
  {
    id: 4,
    title: "Health article",
    content:
      "Yoga your routine to maintain health as well as other types of exercise, yoga can provide tremendous benefits for our health. Tremendous benefits for our health, under stress glucagon...",
    image: articleImages.health,
    progress: 80,
  },
];

export default articles