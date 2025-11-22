export function Title({ children }) {
    return <h1>{children}</h1>;
}

export function Subtitle({ children }) {
    return <h3>{children}</h3>;
}

export function Paragraph({ children }) {
    return <p>{children}</p>;
}

export function HighlightBox({ children }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: 10,
            borderRadius: 6,
            marginTop: 10
        }}>
            {children}
        </div>
    );
}
