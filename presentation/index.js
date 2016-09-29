import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Quote,
  Slide,
  Spectacle,
  Text,
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import GameBoard from './components/GameBoard';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  // Images
  reactLogo: require("../assets/react-logo.png"),
  airbnbLogo: require("../assets/airbnb-logo.png"),
  facebookLogo: require("../assets/facebook-logo.png"),
  googleLogo: require("../assets/google-logo.png"),
  appleLogo: require("../assets/apple-logo.png"),
  netflixLogo: require("../assets/netflix-logo.png"),
  slackLogo: require("../assets/slack-logo.png"),
  pinterestLogo: require("../assets/pinterest-logo.png"),
  instagramLogo: require("../assets/instagram-logo.png"),
  khanLogo: require("../assets/khan-logo.png"),
  reactBoard1: require("../assets/reactBoard1.jpg"),
  reactBlackBox: require("../assets/reactBlackBox.jpg"),
  reactDataFlow: require("../assets/reactDataFlow.jpg"),
  reactVDOM: require("../assets/reactVDOM.jpg"),
  flux1: require("../assets/code/flux1.jpg"),
  reactPain1: require("../assets/reactPain1.jpg"),

  // Code Images
  naive1: require("../assets/code/naive-1.jpg"),
  template1: require("../assets/code/template1.jpg"),
  func1: require("../assets/code/func-1.jpg"),
  func2: require("../assets/code/func-2.jpg"),
  func3: require("../assets/code/func-3.jpg"),
  func4: require("../assets/code/func-4.jpg"),
  func5: require("../assets/code/func-5.jpg"),
  func6: require("../assets/code/func-6.jpg"),
};

preloader(images);

const theme = createTheme(
  {
    primary: "#f8f8f8",
    secondary: "#4a4a4a",
    codeBg: "#2c303b"
  },
  {
    primary: "Merriweather",
    secondary: "Merriweather",
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="none" controls={false} transition={["fade"]} transitionDuration={500}>
          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.reactLogo.replace("/", "")} margin="-10px auto 0" height="293px"/>
            <Text fit textColor="secondary">
              The UI as a pure function
            </Text>
            <Heading size={1} fit fontWeight="normal" lineHeight={1} textColor="black">
              Intro to React
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text textColor="secondary" lineHeight={1.5}>
              Vassilis Mastorostergios
            </Text>

            <Text>
              @vmasto
            </Text>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <Heading size={3} fontWeight="normal" lineHeight={2} textColor="black">
              A little bit of history
            </Heading>

            <Appear><Text margin="0 0 30px">2011: Created by Jordan Walke at Facebook</Text></Appear>
            <Appear><Text margin="0 0 30px">Influenced by <Link href="https://en.wikipedia.org/wiki/XHP">XHP</Link>, an
              HTML component framework for PHP</Text></Appear>
            <Appear><Text margin="0 0 30px">2011: First used by Facebook in comment functionality</Text></Appear>
            <Appear><Text margin="0 0 30px">2012: Adopted site-wide by Instagram</Text></Appear>
            <Appear><Text margin="0 0 30px">2013: Open sourced in JSConf US</Text></Appear>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <BlockQuote>
              <Quote lineHeight="1.5" textSize="40px" textColor="black">So the engineers who started working on a way to
                remedy [...our issues with Bolt] ended up going wild for a couple of months and came out with this
                weird-looking thing nobody thought had any chance whatsoever of working.</Quote>
              <Cite textColor="black">Pete Hunt - Instagram</Cite>
            </BlockQuote>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <Heading size={3} fontWeight="normal" lineHeight={2} margin="0 0 30px" textColor="black">
              Who uses React
            </Heading>

            <Layout>
              <Fill>
                <Image src={images.facebookLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.netflixLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.airbnbLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Image src={images.instagramLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.pinterestLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.khanLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
            </Layout>

            <Layout>
              <Fill>
                <Image src={images.slackLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.appleLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
              <Fill>
                <Image src={images.googleLogo.replace("/", "")} margin="0 auto 30px" height="80px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} fontWeight="normal" lineHeight={2} textColor="black">
              What is React?
            </Heading>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <Text fit>A Javascript library for building User Interfaces</Text>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <Text textColor="secondary"><s>A Javascript library for building User Interfaces</s></Text>
            <Text fit>React as a platform</Text>
          </Slide>

          <Slide
            transition={["fade"]}
            bgColor="primary">
            <Heading size={3} fontWeight="normal" lineHeight={2} margin="0 0 30px" textColor="black">
              The problem
            </Heading>
            <Text textColor="secondary">Interesting user interfaces are inherently complex</Text>
          </Slide>

          <Slide
            transition={["fade"]} bgColor="codeBg" bgImage={images.naive1.replace("/", "")}>
          </Slide>

          <Slide
            transition={["fade"]} bgColor="codeBg" bgImage={images.template1.replace("/", "")}>
          </Slide>

          <Slide
            transition={["fade"]}>
            <Text lineHeight={1.2} textColor="secondary" margin="0 0 30px">What if we used the same intuition we have
              developed about
              functions to describe a User Interface?</Text>

            <Appear><Text textSize="60px">f(d) => V</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func1.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func2.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func3.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func4.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func5.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.func6.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="primary" bgImage={images.reactBlackBox.replace("/", "")}></Slide>
          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.reactBoard1.replace("/", "")}></Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.3}>Declarative, Composable, Encapsulated Components</Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="#2c303b">
            <GameBoard/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.3}>But mixing Javascript logic with HTML is bad, where's the separation of
              concerns?</Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.3} margin="0 0 30px">UI Presentation and UI Interaction are inherently closely
              intertwined.</Text>

            <Appear><Text lineHeight={1.3} margin="0 0 30px">Separating Presentation and Interaction is a separation of
              technologies, <strong>not</strong> concerns.</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.2}>Isn't it really slow?</Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fontWeight="normal" lineHeight={1} textColor="black">
              Virtual DOM!
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="codeBg" bgImage={images.reactVDOM.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.3}>The value proposition of React is not the V-DOM. The Virtual DOM is a necessary "side effect". It just happens to also be awesome.</Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4} margin="0 0 50px" fontWeight="normal" lineHeight={1} textColor="black">
              Thinking in React
            </Heading>

            <Appear><Text margin="0 0 30px">Data (state) flows down</Text></Appear>
            <Appear><Text margin="0 0 30px">Events bubble up</Text></Appear>
            <Appear><Text margin="0 0 30px">Delegate state as much as possible</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" bgImage={images.reactDataFlow.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={4} margin="0 0 50px" fontWeight="normal" lineHeight={1} textColor="black">
              Tearing apart state
            </Heading>

            <Appear><Text margin="0 0 30px">Adaptable</Text></Appear>
            <Appear><Text margin="0 0 30px">Easy to reason about</Text></Appear>
            <Appear><Text margin="0 0 30px">Easy to snapshot</Text></Appear>
            <Appear><Text margin="0 0 30px">Easy to test</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} margin="0 0 50px" fontWeight="normal" lineHeight={1} textColor="black">
              Flux?
            </Heading>

            <Appear><Text lineHeight={1.2} margin="0 0 30px">Flux is not necessary but it complements React's paradigm
              extremely well for larger scale</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Simplifies the source of truth</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Avoids the "multiple mutators" issue of MVC</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Actions are self-documenting on the changes of the application</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" bgImage={images.flux1.replace("/", "")}></Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} margin="0 0 50px" fontWeight="normal" lineHeight={1} textColor="black">
              React's success
             </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.2} margin="0 0 30px">Easier to reason about control and data flow</Text>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Encourages functional programming style</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Plain and simple Javascript</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">Learn once, write anywhere</Text></Appear>
            <Appear><Text lineHeight={1.2} margin="0 0 30px">React is a Platform</Text></Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <BlockQuote textColor="black">
              <Quote textColor="black"><strong>Mutability</strong> should be an implementation detail. React doesn't
                care.</Quote>
              <Cite textColor="black">David Nolen - Creator of Om</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} margin="0 0 50px" fontWeight="normal" lineHeight={1} textColor="black">
              Pain Points
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.reactPain1.replace("/", "")} margin="0px auto" height="600px"/>
          </Slide>

          <Slide
            transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.2}>
              <Link href="https://github.com/facebookincubator/create-react-app">
                /create-react-app
              </Link>
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Text lineHeight={1.2}>
              Thank you!
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
