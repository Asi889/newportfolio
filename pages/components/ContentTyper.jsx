import Typewriter from 'typewriter-effect';

const ContentTyper = () => {
    return (
      <Typewriter
        options={{
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter.pauseFor(2500).changeDelay(70)
            .typeString("I am a Full-Stack web developer")
            .pauseFor(1000)
            .deleteAll(15)
            .typeString("Sent from the future to write great code :)")
            .pauseFor(1000)
            .deleteAll(15)
            .typeString("I know Java-Script, PHP, React, Next.js, ")
            .pauseFor(100)
            .deleteAll(15)
            .typeString("Vue, Node.js, MongoDB, Redux, ")
            .pauseFor(100)
            .deleteAll(15)
            .typeString(" Mobix, CSS, Tailwind and more...")
            .pauseFor(600)
            .deleteAll(15)
            .typeString("Check out my projects and git-hub account")
            .pauseFor(1000)
            .deleteAll(15)
            .start()
        }}
      />
    )

  }

  export default ContentTyper;