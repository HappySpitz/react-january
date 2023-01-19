import './App.css';
import {Simpson} from "./components/SimpsonComponents/main";
import './components/SimpsonComponents/simpson.css';
import {RickAndMorty} from "./components/RickAndMorty/RickAndMorty";
import './components/RickAndMorty/RickAndMorty.css';

const App = () => {
  return (
    <div className="Add">
        <div className={"Simpson"}>
        <h1>Simpson Family</h1>
        <img className={"imageSimpsonFamily"} src="https://media.npr.org/assets/img/2012/04/10/ap100512117837-1--d27b59825b79f0946e2503738f692e103de5e199-s1100-c50.jpg"/>
        <Simpson
            simpsonName={"Homer"}
            info={"Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 239 pounds), lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't."}
            phrases1={"D'oh!"}
            phrases2={"Why you little...!"}
            phrases3={"Woo-hoo!"}
            image={"https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png"}
        />
            <Simpson
            simpsonName={"Marge"}
            info={"Marjorie Jacqueline \"Marge\" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist."}
            phrases1={"Hrmmm…."}
            phrases2={"Now it's Marge's time to shine!"}
            phrases3={"Oh!"}
            image={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"}
        />
            <Simpson
                simpsonName={"Bart"}
                info={"Bartholomew JoJo \"Bart\" Simpson (born Feburary 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and \"potentially dangerous\" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed \"Cosmo\", after discovering a comet in \"Bart's Comet\". Bart has also been on the cover on numerous comics, such as \"Critical Hit\", \"Simpsons Treasure Trove #11\", and \"Winter Wingding\". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening."}
                phrases1={"Ay Caramba!"}
                phrases2={"Eat my shorts!"}
                phrases3={"Don't have a cow, man."}
                image={"https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png"}
            />
            <Simpson
                simpsonName={"Lisa"}
                info={"Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series. In \"Homer and Lisa Exchange Cross Words\" she is also known as Lisa Bouvier. She was named after a train called Lil' Lisa on her parents' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone's surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies. In school, Lisa's popularity is affected by those who view her as a geeky overachiever, which leaves her with only a few friends. She focuses on her goals and strives to reach her potential, and at the age of eight, she is already a member of Mensa with an IQ of 159. Her lack of parental involvement also leads to her lashing out at those who she deems lower than her or even above her. She has extreme jealousy from time to time and will do whatever it takes to reclaim her title as the smartest; but only if she deems it necessary. Otherwise, she's the intelligent one who usually thinks things through."}
                phrases1={"Bart!"}
                phrases2={"If anyone wants me, I'll be in my room."}
                phrases3={"Quit it, Bart!"}
                image={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"}
            />
            <Simpson
                simpsonName={"Maggie"}
                info={"Margaret Evelyn Lenny \"Maggie\" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is at the very young, infant age of 1."}
                phrases1={"*suck suck*"}
                phrases2={"Good night."}
                phrases3={"It's your fault I can't talk!"}
                image={"https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png"}
            />
    </div>
        <div className={"RickAndMorty"}>
            <h1>The Rick and Morty</h1>
            <div className={"cards"}>
            <RickAndMorty
                id={"1"}
                name={"Rick Sanchez"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
            />
            <RickAndMorty
                id={"2"}
                name={"Morty Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            />
            <RickAndMorty
                id={"3"}
                name={"Summer Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
            />
            <RickAndMorty
                id={"4"}
                name={"Beth Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
            />
            <RickAndMorty
                id={"5"}
                name={"Jerry Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}
            />
            <RickAndMorty
                id={"6"}
                name={"Abadango Cluster Princess"}
                status={"Alive"}
                species={"Alien"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
            />
                </div>
        </div>
    </div>
  );
}

export default App;
