import { Title, Subtitle, Paragraph, HighlightBox } from "./components/UI";
import StudentCard from "./components/StudentCard";
import { Counter } from "./components/Counter";

function App() {
    const currentYear = new Date().getFullYear();

    return (
        <div style={{ padding: 20, fontFamily: "Arial" }}>
            {/* Hello React */}
            <Title>Introduction to React</Title>
            <Paragraph>
                React is a JavaScript library for building user interfaces.
            </Paragraph>
            <Paragraph>© {currentYear}</Paragraph>

            <hr />

            {/* Components */}
            <Title>UI Components Demo</Title>
            <Subtitle>This is a custom React UI set</Subtitle>
            <Paragraph>This paragraph text comes from the Paragraph component.</Paragraph>
            <HighlightBox>
                This is a highlight box. You can put anything inside.
            </HighlightBox>

            <hr />

            {/* Student Cards */}
            <Title>Student Cards</Title>
            <StudentCard name="Aida" group="CS101" favoriteSubject="Math" />
            <StudentCard name="Nurlan" group="CS102" favoriteSubject="Physics" />
            <StudentCard name="Dastan" group="CS101" favoriteSubject="Programming" />
            <StudentCard name="Feruza" group="CS105" favoriteSubject="CS" />

            <hr />

            {/* Counter */}
            <Title>Interactive Counter</Title>
            <Counter />
        </div>
    );
}

export default App;

